import { useFetch, useCounter } from "../Hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";



export const MultipleCustomHooks = () => {

  const {counter, increment, decrement} = useCounter(1);

  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
      <h1>Informacion pokemondongo</h1>

      <hr />

      {
        isLoading
        ? <LoadingMessage/>
        : <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
          />
      }


      <h2>{data?.name}</h2>

      <button className="btn btn-primary mt2" onClick={() => increment()}>
        increment
      </button>
      <button className="btn btn-primary mt2" onClick={() => counter > 1 ? decrement() : null}>
        decrement
      </button>


    </>
  )
}
