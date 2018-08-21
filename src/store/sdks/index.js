import { SET_SDKS } from './types'

export default function reducer (state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SET_SDKS:
      return payload
    default:
      return state
  }
}
