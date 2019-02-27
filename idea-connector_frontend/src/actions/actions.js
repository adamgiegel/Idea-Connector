import { FETCH_USER, FOUND_IDEA, FETCH_COMPANIES, INCREASE_BY_FOUR, FOUND_USER } from './types'

export const fetchUser = () => dispatch => {
  fetch('http://localhost:3000/api/v1/users/7')
  .then(response => response.json())
  .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }))
}

export const findIdea = (id) => {
  return {
    type: FOUND_IDEA,
    payload: id
  }
}

export const incrementByFour = () => {
  return {
    type: INCREASE_BY_FOUR
  }
}
