import expect from 'expect'
import reducer, {initialState} from './index'
import { handleChange, handleSearcChange } from './actions'

describe('>>> visibilityFilter > reducer', ()=>{
  describe('>>> visibilityFilter > reducer > handleChange', ()=>{
    const newType = 'Tag'
    const newAditional = 'TagName'

    it('handleChange snapshot', () => {

      const next = reducer(initialState, handleChange(newType, newAditional))
      expect(next).toMatchSnapshot()
    })

    it('handleChange', () => {
      const next = reducer(initialState, handleChange(newType, newAditional))
      expect(next).toMatchObject({
        'aditional': newAditional,
        'type': newType
      })
    })
  })


  describe('>>> visibilityFilter > reducer > handleSearcChange', ()=>{
    const newType = 'Search'
    const searchQuery = 'searchQuery'

    it('handleSearcChange snapshot', () => {

      const next = reducer(initialState, handleSearcChange(newType, searchQuery))
      expect(next).toMatchSnapshot()
    })

    it('handleSearcChange snapshot', () => {
      const next = reducer(initialState, handleSearcChange(newType, searchQuery))
      expect(next).toMatchObject({
        'search': searchQuery,
        'type': newType
      })
    })
  })
})
