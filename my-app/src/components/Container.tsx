import React from "react"

type ContainerProps ={
    style: React.CSSProperties
}
export const Container = (props: ContainerProps) =>{

    return (
        <div style={props.style}>
            Text Container
        </div>
    )
}