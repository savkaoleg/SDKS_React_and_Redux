import { SET_SDKS } from './types'

export function setSdks(payload) {
  return {
    type: SET_SDKS,
    payload
  }
}
