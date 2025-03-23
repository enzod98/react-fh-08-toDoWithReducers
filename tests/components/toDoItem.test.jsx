const { render, screen, fireEvent } = require("@testing-library/react")
import { ToDoItem } from '../../src/components/ToDoItem'

describe('Pruebas en toDoItem.jsx', () => { 
    const toDo = {
        id: 1,
        description: 'Barrer la casa',
        done: false
    }

    const onDeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks() );
    
    test('Debe de mostrar el toDo pendiente de completar', () => {
        render( 
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onDeleteTodo={ onDeleteToDoMock } 
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.textContent ).toContain( toDo.description );

    })
    
    test('Debe de mostrar el toDo completado', () => {
        toDo.done = true;
        
        render( 
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onDeleteTodo={ onDeleteToDoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain( 'text-decoration-line-through' );

    })
    
    test('span debe de llamar el ToggleTodo al hacer click', () => {        
        render( 
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onDeleteTodo={ onDeleteToDoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleToDoMock ).toHaveBeenCalledWith( toDo.id );

    })

    test('button debe de llamar el deleteToDo al hacer click', () => {        
        render( 
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onDeleteTodo={ onDeleteToDoMock } 
            /> 
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteToDoMock ).toHaveBeenCalledWith( toDo.id );

    })
 })