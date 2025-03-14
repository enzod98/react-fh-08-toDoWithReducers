
import { ToDoList } from '../components/ToDoList'
import { ToDoAdd } from '../components/ToDoAdd'
import { useToDo } from '../hooks'

export const TodoApp = () => {
    
    const {
        handleNewToDo, 
        handleDeleteToDo, 
        onHandleToggleToDo, 
        toDos,
        toDosCount,
        pendingToDosCount
    } = useToDo();
 
    
  return (
    <>
        <h1>TodoApp ({ toDosCount() }), <small>pendientes: { pendingToDosCount() }</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <ToDoList 
                    toDos={ toDos } 
                    onDeleteTodo={ handleDeleteToDo } 
                    onToggleToDo={ onHandleToggleToDo } 
                />
            </div>

            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr />
                
                <ToDoAdd onAddToDo={ handleNewToDo } />
            </div>
        </div>
    </>
  )
}
