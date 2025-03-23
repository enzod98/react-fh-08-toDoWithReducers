import { render, screen } from "@testing-library/react"
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useToDo } from "../../src/hooks/"

jest.mock( "../../src/hooks/useToDo" );

describe('Pruebas en <TodoApp />', () => { 
    useToDo.mockReturnValue({
        handleNewToDo: jest.fn(),
        handleDeleteToDo: jest.fn(), 
        onHandleToggleToDo: jest.fn(), 
        toDos: [
            {
                id: 1,
                description: 'Barrer la casa',
                done: false
            },
            {
                id: 2,
                description: 'Barrer el patio',
                done: true
            },
        ],
        toDosCount: () => 2,
        pendingToDosCount: () => 1
    });


    test('Debe mostrar el componente correctamente', () =>{
        render( <TodoApp /> )
        // screen.debug();
        expect( screen.getByText('Barrer la casa') ).toBeTruthy();
        expect( screen.getByText('Barrer el patio') ).toBeTruthy();
    })

 })