import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
    const { counter, decrement, increment } = useCounter(108); 
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr />
        { 
            isLoading 
            ? <LoadingMessage /> 
            : <PokemonCard id={ data?.id } name={ data?.name } sprites={ [data?.sprites.back_default, data?.sprites.front_default ] }  />
        }
        <h2>{ data?.name }</h2>
        <button className="btn btn-primary mt-2" onClick={ () => counter > 1 && decrement() }>Anterior</button>
        <button className="btn btn-primary mt-2" onClick={ () => increment() }>Siguiente</button>

    </>
)
}
