import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {
const { user, setUser } = useContext( UserContext );
// const user = {
//     name: 'Enzod',
//     email: 'enzo@enzo.com',
//     id: 678
// }
return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre aria-label="pre">
            {
                JSON.stringify( user, null, 3 )
            }
        </pre>
        
        <button 
            className="btn btn-primary"
            onClick={ () => setUser({
                    name: 'Enzod',
                    email: 'enzo@enzo.com',
                    id: 678
            }) }
        >
            Establecer usuario
        </button>
    </>
  )
}
