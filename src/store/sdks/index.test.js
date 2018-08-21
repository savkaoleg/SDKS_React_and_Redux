import expect from 'expect'
import reducer from './index'
import { setSdks } from './actions'

const initialState = [ ]
const data = [
  {
    'title': 'Accengage',
    'id': 'accengage',
    'tags': [
      'marketing-automation'
    ]
  },
  {
    'title': 'AdBuddiz',
    'id': 'adbuddiz',
    'tags': [
      'ad-network'
    ]
  }
]

describe('>>> sdks > reducer', ()=>{
  it('setSdks snapshot', () => {
    const next = reducer(initialState, setSdks(data))
    expect(next).toMatchSnapshot()
  })

  it('setSdks', () => {
    const next = reducer(initialState, setSdks(data))

    expect(next).toEqual(data)
  })
})
