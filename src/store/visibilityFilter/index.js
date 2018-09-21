import { HANDLE_CHANGE, HANDLE_SEARCH_CHANGE } from './types'

export const initialState = {
  type: 'All', // 'Search' or 'Tag'
  aditional: '',
  search: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_SEARCH_CHANGE:
      return Object.assign({}, state, {
        type: action.newType,
        search: action.searchQuery
      })
    case HANDLE_CHANGE:
      return Object.assign({}, state, {
        type: action.newType,
        aditional: action.newAditional
      })

    default:
      return state
  }
}
