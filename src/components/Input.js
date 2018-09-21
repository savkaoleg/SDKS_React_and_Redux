import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

class Input extends React.Component {
  onChange = event => {
    this.props.onChange(event)
  }

  render() {
    return (
      <div className="form-input">
        <label>
          <input
            name="search"
            value={this.props.value}
            onChange={this.onChange}
          />
          <span className="placeholder">{this.props.placeholder}</span>
        </label>
      </div>
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default Input
