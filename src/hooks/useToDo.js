import { useEffect, useReducer } from 'react';
import { toDoReducer } from '../08-useReducer/todoReducer'
import { ToDoAdd } from '../components/ToDoAdd';
import { ToDoList } from '../components/ToDoList';



export const useToDo = () => {
    const initialState = []
    
    const init = () => JSON.parse( localStorage.getItem('toDos') || '[]' )
    const [toDos, dispatchToDo] = useReducer(toDoReducer, initialState, init)
        
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos) );
      }, [toDos])
    
    const handleNewToDo = ( toDo ) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }

        dispatchToDo( action );
    }

    const handleDeleteToDo = ( id ) => {
        dispatchToDo({
            type: '[TODO] Remove ToDo',
            payload: id
        });
    }

    const onHandleToggleToDo = (id) => {
        dispatchToDo({
            type: '[TODO] Toggle ToDo',
            payload: id
        });
    }

    const toDosCount = () => toDos.length
    let pendingToDosCount = () => toDos.filter(toDo => !toDo.done).length
    
  return {
    handleNewToDo,
    handleDeleteToDo,
    onHandleToggleToDo,
    toDos,
    toDosCount,
    pendingToDosCount
  }
}
