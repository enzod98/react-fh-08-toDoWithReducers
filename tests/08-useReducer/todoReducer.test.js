import { toDoReducer } from "../../src/08-useReducer/todoReducer";


describe('Pruebas en todoReducer', () => { 
    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    
    test('Debe regresar el estado inicial', () => {
        const newState = toDoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    })

    test('Debe de agregar un toDo', () => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 2,
                description: 'Demo Add ToDo',
                done: false
            }
        }

        const newState = toDoReducer( initialState, action );
        expect( newState ).toContain( action.payload );
    })

    test('Debe de eliminar un toDo', () => {
        const action = {
            type: '[TODO] Remove ToDo',
            payload:  1
        }

        const newState = toDoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
    })

    test('Debe de cambiar el estado de un toDo', () => {
        const idToToggle = 1;
        const action = {
            type: '[TODO] Toggle ToDo',
            payload: idToToggle
        }

        const newState = toDoReducer( initialState, action );
        expect( newState.filter(toDo => toDo.done === true).length  ).toBe(1);
    })

 })