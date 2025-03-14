import { useForm } from '../hooks/index.js'

export const ToDoAdd = ({ onAddToDo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    }) 

    const onSubmit = (event) => {
        event.preventDefault();
        
        let trimmedDescription = description.trim();

        if( trimmedDescription.length < 2 )
            return;

        onAddToDo({
            id: new Date().getTime(),
            description: trimmedDescription,
            done: false
        })        

        onResetForm();
    }

  return (
    <form
        onSubmit={ onSubmit }
    >
        <input 
            type="text"
            placeholder='¿Qué hay que hacer?'
            className='form-control'    
            name="description" 
            onInput={ onInputChange }
            value={ description }
            />
        <button 
            type='submit'
            className='btn btn-outline-primary mt-1'
            >
            Agregar
        </button>
    </form>
)
}
