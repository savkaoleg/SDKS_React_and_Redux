import { connect } from 'react-redux'
import Filter from './component'
import { handleChange, handleSearcChange } from '../store/visibilityFilter/actions'


export const getTags = arr => {
  const resultArr = []
  arr.map(item =>
    item.tags.map(tag => {
      if (resultArr.findIndex(i => i === tag) === -1){
        resultArr.push(tag)
      }
    })
  )

  return resultArr
}

const mapStateToProps = state => {
  return {
    tags: getTags(state.sdks),
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = disptach =>
  ({
    handleChange ({newType, newAditional}){
      disptach(
        handleChange(newType, newAditional)
      )
    },
    handleSearcChange ({newType, searchQuery}){
      disptach(
        handleSearcChange(newType, searchQuery)
      )
    }

  })

const Container = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default Container
