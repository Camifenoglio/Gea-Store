import { useDispatch, useSelector } from 'react-redux'
import { reset, subtract, sum } from '../../redux/actions/counterActions';


const Counter = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h2>Contador Redux</h2>
            </div>
            <nav>
                <button onClick={() => dispatch(sum)}>-</button>
                <button onClick={() => dispatch(subtract)}>+</button>
                <button onClick={() => dispatch(reset)}>clear</button>
            </nav>
            <h3>{state.counter}</h3>
        </>
    )
}

export default Counter;
