import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => { 
    const user = {
        id: 1,
        name: 'Enzo',
    }
    
    test('Debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }} >
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');   
    })

    test('Debe mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user }} >
                <HomePage />
            </UserContext.Provider>
        );

        // const h1 = screen.getByRole('h1');
        // console.log(h1);

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(JSON.stringify( user.name ));   
        expect(preTag.innerHTML).toContain(JSON.stringify( user.id ));   

    })
 })