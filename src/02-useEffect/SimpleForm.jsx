

import React, { useEffect, useState } from 'react'
import { Message } from './Message.jsx';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Enzo',
        email: 'enzo@enzo.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    useEffect(() => {
        // console.log('useEffect!');
    }, [])

    useEffect(() => {
        // console.log('formState Changed');
    }, [formState])

    useEffect(() => {
        // console.log('email Changed');
    }, [email])

    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text" className='form-control' placeholder='UserName' name='username' value={ username } onChange={ onInputChange }/>
        <input type="email" className='form-control mt-2' placeholder='enzo@enzo.com' name='email' value={ email } onChange={ onInputChange }/>

        {
            (username === 'Enzo') && <Message></Message>            
        }

    </>
)
}
