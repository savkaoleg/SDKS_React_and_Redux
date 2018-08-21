import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = (state) => {
  return {
    sdks: state.sdks,
    visibilityFilter: state.visibilityFilter
  }
}

const Container = connect(mapStateToProps)(Component)

export default Container
