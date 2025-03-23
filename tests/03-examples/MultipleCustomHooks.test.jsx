import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch.js"
import { useCounter } from "../../src/hooks/useCounter.js";

jest.mock( "../../src/hooks/useFetch.js" );
jest.mock( "../../src/hooks/useCounter.js" );


describe('Pruebas en MultipleCustomHooks', () => { 
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto', () =>{
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Información de Pokémon'))

        const nextButton = screen.getByRole('button',{ name: 'Siguiente' });

        expect( nextButton.disable ).toBeFalsy();
        // screen.debug();
    })
    

    test('Debe de mostrar un sprite', () => {
        useFetch.mockReturnValue({
            data: {
                id: Math.random(),
                name: 'Bolbasor',
                sprites: [ '' ]
            },
            isLoading: false,
            hasError: null
        })
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Bolbasor') ).toBeTruthy;
    })

    test('Debe llamar la función de incrementar' , () => {
       
        useFetch.mockReturnValue({
            data: {
                id: Math.random(),
                name: 'Bolbasor',
                sprites: [ '' ]
            },
            isLoading: false,
            hasError: null
        })

        
        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
    })
 })