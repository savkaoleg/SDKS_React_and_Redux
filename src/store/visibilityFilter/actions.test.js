import expect from 'expect'
import { handleChange, handleSearcChange } from './actions'
import { HANDLE_CHANGE, HANDLE_SEARCH_CHANGE } from './types'

describe('>>> visibilityFilter > actions', ()=>{

  describe('>>> visibilityFilter > actions > handleChange', ()=>{

    const newType = 'Tag'
    const newAditional = 'TagName'

    it('handleChange snapshot', () => {

      const handleChangeAction = handleChange(newType, newAditional)
      expect(handleChangeAction).toMatchSnapshot()
    })

    it('handleChange', () => {


      const handleChangeAction = handleChange(newType, newAditional)
      expect(handleChangeAction).toEqual({type: HANDLE_CHANGE, newType, newAditional})
    })

  })
  describe('>>> visibilityFilter > actions > handleSearcChange', ()=>{
    const newType = 'Search'
    const searchQuery = 'searchQuery'

    it('handleSearcChange snapshot', () => {

      const handleSearcChangeAction = handleSearcChange(newType, searchQuery)
      expect(handleSearcChangeAction).toMatchSnapshot()
    })

    it('handleSearcChange', () => {


      const handleSearcChangeAction = handleSearcChange(newType, searchQuery)
      expect(handleSearcChangeAction).toEqual({type: HANDLE_SEARCH_CHANGE, newType, searchQuery})
    })
  })
})
