import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";


describe('Pruebas en useCounter', () => { 
    test('Debe retornar valores por defecto:', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual( expect.any(Function) );
        expect(decrement).toEqual( expect.any(Function) );
        expect(reset).toEqual( expect.any(Function) );

    })

    test('Debe generar el counter por valor de 100', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue) );
        const { counter } = result.current;

        expect( counter ).toBe( initialValue );
    })

    test('Debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, increment } = result.current;
        
        act(() => {
            increment();
        })
        
        expect( result.current.counter ).toBe( counter + 1 );
    })

    test('Debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, decrement } = result.current;
        
        act(() => {
            decrement();
        })
        
        expect( result.current.counter ).toBe( counter - 1 );
    })

    test('Debe volver al valor inicial', () => {
        const initialValue = Math.random();
        const { result } = renderHook(() => useCounter(initialValue) );
        const { increment, decrement, reset } = result.current;
        
        act(() => {
            increment(Math.random());
            decrement(Math.random());
            reset()
        })
        
        expect( result.current.counter ).toBe( initialValue );
    })
})