import { useState } from "react"
export const LoggedIn = () =>{
    const [isLonggedIn,setIsLonggedIn] = useState(false)
    const handleLogin = () =>{
        setIsLonggedIn(true)
    }
    const handleLogout = () =>{
        setIsLonggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLonggedIn ?'logged in': 'logged out'}</div>
        </div>
    )
}