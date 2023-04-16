import React from "react"
import { Greet } from "../Greet"

export const CustomComponent= (props: React.ConsumerProps<typeof Greet>)=>{
    return <div>{props.children.name}</div>
}