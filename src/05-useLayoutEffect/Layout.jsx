import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {
    const { counter, decrement, increment } = useCounter(1); 
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr />
        { 
            isLoading 
            ? <LoadingMessage /> 
            : <PokemonCard id={ data?.id } name={ data?.name } sprites={ [ data?.sprites.front_default, data?.sprites.back_default ] }  />
        }
        <h2>{ data?.name }</h2>
        <button className="btn btn-primary mt-2" onClick={ () => counter > 1 && decrement() }>Anterior</button>
        <button className="btn btn-primary mt-2" onClick={ () => increment() }>Siguiente</button>

    </>
)
}
