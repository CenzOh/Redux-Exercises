//this is components/CounterApp.jsx
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, CLEAR, IncrementBy } from '../actions'
// don't forget to add the other two fcns we made from the actions folder
import Counter from './Counter'

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch({ type: INCREMENT })
        },
        onDecrement: () => {
            dispatch({ type: DECREMENT })
        },
        onClear: () => {
            dispatch({ type: CLEAR })
        },
        onIncrementBy: () => {
            dispatch({ type: IncrementBy})
        },
    }
}

const CounterApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)