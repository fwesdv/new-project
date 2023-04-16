import { Name } from './Person.typle'
type PersonListProps ={
    // names: {
    //     first: String
    //     last: String
    // }[]
    names: Name[]
}

export const PersonList = (props: PersonListProps) =>{
    return (
        <div>
            {props.names.map((name)=>{
                return( 
                <h2 key={`name.first`}>
                    {name.first} {name.last}
                </h2>
                )
            })}
        </div>
    )
}