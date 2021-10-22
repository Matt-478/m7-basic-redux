import './App.css';
import {connect} from 'react-redux'
import {increaseAction} from './actions'
import {decreaseAction} from './actions'


// this function gets state as argument and must return an object
// ({}) we use them like this bc is quicker to return an object from a arrow function
// every key of this returned object will be a prop to my connected component
const mapStateToProps = (state) => ({
  count: state.count
  // prop name can be anything
})
// another way to return an object from arrow function
// { return {} }

// also returns an object
const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch(increaseAction())
  },

  decreaseCounter: () => {
    dispatch(decreaseAction())
  }
})

// App(props), then access with props.count etc
function App({count, increaseCounter, decreaseCounter}) {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increaseCounter}>+</button>
        {count}
        <button onClick={decreaseCounter}>-</button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// mapStateToProps - which parts of the reduz store I want to receive as props | READ
// mapDispatchToProps - which actions to dispatch so I can interact with Redux store | INTERACT WITH