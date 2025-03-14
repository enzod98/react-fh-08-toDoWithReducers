

import React, { useEffect, useState } from 'react'
import { Message } from './Message.jsx';
import { useForm } from '../hooks/useForm.js';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const { username, email, password } = formState;


  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <input type="text" className='form-control' placeholder='UserName' name='username' value={ username } onChange={ onInputChange }/>
        <input type="email" className='form-control mt-2' placeholder='enzo@enzo.com' name='email' value={ email } onChange={ onInputChange }/>
        <input type="password" className='form-control mt-2' placeholder='Contraseña' name='password' value={ password } onChange={ onInputChange }/>

        {
            (username === 'Enzo') && <Message></Message>            
        }

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>

    </>
)
}
