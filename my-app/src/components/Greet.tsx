type GreetProps ={
    name: String
    messageCount?: number
    isLonggedIn: Boolean
}
export const Greet = (props: GreetProps) =>{
    const{ messageCount=0} =props
    return (
        <div>
            <h2>
                {
                    props.isLonggedIn ? `Xin chào! ${props.name} ${messageCount}`: 'Hello'
                }             
            </h2>
        </div>
    )
}