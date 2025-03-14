import { ToDoItem } from "./ToDoItem"



export const ToDoList = ({ toDos = [], onDeleteTodo, onToggleToDo }) => {


    return (
    <ul className='list-group'>
        {
            toDos.map( toDo => (
                /* TODOITEM */
                <ToDoItem 
                    key={ toDo.id } 
                    toDo={ toDo } 
                    onDeleteTodo={ id => onDeleteTodo(id) } 
                    onToggleToDo={ id => onToggleToDo(id) }
                />
            ))
        }
    </ul>
    
  )
}
