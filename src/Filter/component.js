import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Radio from '../components/Radio'
import Input from '../components/Input'

class Filter extends Component {

  handleSearchChange = () => {
    this.props.handleChange({
        newType: 'Search',
        newAditional: ''
    })
  }

  handleSearchFieldChange = event => {
    this.props.handleSearcChange({
        newType: 'Search',
        searchQuery: event.target.value
    })
  }

  handleAllChange = () => {
    this.props.handleChange({
        newType: 'All',
        newAditional: ''
    })
  }

  handleTagChange = newAditional => {
    this.props.handleChange({
        newType: 'Tag',
        newAditional
    })
  }

  render (){

    const { tags, visibilityFilter } = this.props
      return (
      <aside className = 'filters'>
        <Radio
          value="Input"
          checked={visibilityFilter.type === 'Search'}
          handleRadioChange={this.handleSearchChange}
        >
          <div className="InputWrap">
            <Input
              placeholder="search"
              value={visibilityFilter.search}
              onChange={this.handleSearchFieldChange}
            />
          </div>
        </Radio>
        <Radio
          value="All"
          checked={visibilityFilter.type === 'All'}
          handleRadioChange={this.handleAllChange}
        />
        {(
          () => {
            return tags.map((tag, idx)=>{
              return (
                <Radio
                  key={idx}
                  value={tag}
                  checked={visibilityFilter.type === 'Tag' && visibilityFilter.aditional === tag}
                  handleRadioChange={this.handleTagChange}
                />
              )
            })
          }
        )()}
      </aside>
    )
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func,
  handleSearcChange: PropTypes.func,
  tags: PropTypes.array,
  visibilityFilter: PropTypes.object
}

export default Filter

