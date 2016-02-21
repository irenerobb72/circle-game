import { List, Map, fromJS} from 'immutable'
import toggle from './reductions/toggle'
import end from 'reductions/end'

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_GAME':
      return toggle(state)
    case 'END_GAME':
      return end(state)
  }
  return state
}

export default reducer
