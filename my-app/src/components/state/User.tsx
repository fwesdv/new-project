import { type } from "os"
import { useState } from "react"

type AuthUser={
    name: string
    email: string
}
export const User = () =>{
    const [user, setuser] = useState<AuthUser|null>({}as AuthUser)
    const handleLogin = () =>{
        setuser({
            name: 'meomeo',
            email: '01239586229c@gmail.com',
        })
    }
    // const handleLogout = () =>{
    //     setuser(null)
    // }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
} 