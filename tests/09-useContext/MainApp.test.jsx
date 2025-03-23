import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp />', () => { 
    test('Debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('HomePage, bienvenido!') ).toBeTruthy();
        // screen.debug();
    })

    test('Debe de mostrar el Login', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('LoginPage') ).toBeTruthy();
        // screen.debug();
    })
 })