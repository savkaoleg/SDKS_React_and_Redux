import { HANDLE_CHANGE, HANDLE_SEARCH_CHANGE } from './types'

export function handleChange(newType, newAditional) {
  return {
    type: HANDLE_CHANGE,
    newType,
    newAditional
  }
}

export function handleSearcChange(newType, searchQuery) {
  return {
    type: HANDLE_SEARCH_CHANGE,
    newType,
    searchQuery
  }
}
