import expect from 'expect'
import { setSdks } from './actions'
import { SET_SDKS } from './types'

const data = [
  {
    title: 'Accengage',
    id: 'accengage',
    tags: ['marketing-automation']
  },
  {
    title: 'AdBuddiz',
    id: 'adbuddiz',
    tags: ['ad-network']
  }
]

describe('>>> sdks > actions', () => {
  it('setSdks snapshot', () => {
    const setSdksAction = setSdks(data)
    expect(setSdksAction).toMatchSnapshot()
  })

  it('setSdks', () => {
    const setSdksAction = setSdks(data)
    expect(setSdksAction).toEqual({ type: SET_SDKS, payload: data })
  })
})
