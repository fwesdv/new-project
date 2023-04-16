type horizontalPosition= 'left'|'center'|'right'
type verticalPosition='top'|'center'|'bottom'
type ToastProps={
    position: |Exclude<`${horizontalPosition}-${verticalPosition}`,'center-center'>|'center'
}

export const Toast = ({position}: ToastProps)=>{
    return(
        <div>
            toast notification position - {position}
        </div>
    )
}
