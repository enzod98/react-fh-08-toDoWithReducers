import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     name: 'Enzod',
//     email: 'enzo@enzo.com',
//     id: 678
// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: {} }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
)
}
