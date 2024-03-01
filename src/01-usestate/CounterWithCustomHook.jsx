import { useCounter } from '../Hooks/useCounter';


export const CounterWithCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
      <h1>Counter with custome hooks: {counter}</h1>

      <button className="btn btn-primary" onClick={ () => increment(5) } >+1</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrement(5)}>-1</button>



    </>
  )
}
