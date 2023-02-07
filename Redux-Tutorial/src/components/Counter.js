import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'
import classes from './Counter.module.css'

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter)
    const showCounter = useSelector((state) => state.counter.showCounter)
    const dispatch = useDispatch()

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    }

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter
