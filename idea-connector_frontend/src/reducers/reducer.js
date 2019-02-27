import { FETCH_USER, FETCH_COMPANIES, INCREASE_BY_FOUR, FOUND_USER, FOUND_IDEA} from '../actions/types'

const initialState = {
  currentUser: null,
  firstIndex: 0,
  lastIndex: 4,
  foundUser: '',
  foundIdea: ''
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_USER:
      return {...state, currentUser: action.payload}
    case INCREASE_BY_FOUR:
      return {...state, firstIndex: state.firstIndex + 4, lastIndex: state.lastIndex + 4}
    case FOUND_IDEA:
      return {...state, foundIdea: action.payload}
    default:
      return state;
  }
}
