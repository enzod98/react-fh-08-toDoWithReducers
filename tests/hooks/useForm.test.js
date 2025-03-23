import { render, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe('Pruebas en useForm.js', () => { 
    const initialForm = {
        name: 'Enzo',
        email: 'enzo@enzo.com'
    }

    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook( ()=> useForm( initialForm ) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
        // const {  } = result.current;

    })

    test('Debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newName = 'John Connor';
        const { name, onInputChange } = result.current;
        act(() => {
            onInputChange({ target: {
                name: 'name',
                value: newName
            } })

        })

        expect( result.current.name ).toBe( newName );
        expect( result.current.formState.name ).toBe( newName );
    })

    test('Debe realizar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newName = 'John Connor';
        const { name, onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({ target: {
                name: 'name',
                value: newName
            } })

            onResetForm();
        })

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
    })

 })