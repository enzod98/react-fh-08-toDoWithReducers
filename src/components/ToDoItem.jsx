

export const ToDoItem = ({ toDo, onDeleteTodo, onToggleToDo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span 
          className={`align-self-center ${ toDo.done ? 'text-decoration-line-through' : '' }`}
          onClick={ () => onToggleToDo(toDo.id) }
        >
          { toDo.description }
        </span>
        <button 
          className='btn btn-danger' 
          onClick={ () => onDeleteTodo( toDo.id ) }
        >
          Borrar
        </button>
    </li>
  )
}
