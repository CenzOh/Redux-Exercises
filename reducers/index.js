// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, IncrementBy } from '../actions';



const initialState = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
    // I must create a new copy of the state which merges my new post into the state
      Object.assign(...state);
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          action.data
        ]
      }
    );
  
  default:
    return state;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return state - state;
    //clear fcn, the state minus itself will always equal zero
    case IncrementBy:
      return state + 5;
    default:
      return state;
  }
};
