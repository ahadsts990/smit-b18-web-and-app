import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, mutiplyBy2, incrementByAmount, divideByAmount } from './redux/slices/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const incrementFun = () => {
    // dispatch(increment())
    dispatch(incrementByAmount(4))
  }

  const decrementFun = () => {
    dispatch(decrement())
  }

  const mulBy2 = () => {
    dispatch(mutiplyBy2())
  }

  const divByAm = () => {
    dispatch(divideByAmount(5))
  }

  return (
    <div>
      <button onClick={divByAm}>divide by amount</button>
      <button onClick={incrementFun}>+</button>
      <p>{count}</p>
      <button onClick={decrementFun}>-</button>
      <button onClick={mulBy2}>multply by 2</button>
    </div >
  )
}

export default App