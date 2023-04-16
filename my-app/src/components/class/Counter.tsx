
import { Component, ReactNode} from "react"

type ComponentProps={
    message: string
}
type ComponentState={
    count: number
}
export class Counter extends Component<ComponentProps,ComponentState>{
    state={
        count:0,
    }
    handleClick =()=>{
        this.setState((prevState)=>({count: prevState.count+1}))
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message}{this.state.count}
            </div>
        )
    }
}