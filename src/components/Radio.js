import React from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'

class Radio extends React.Component {

  onChange = () => {}

  onClick = (event) => {
    if (event.target.tagName !== 'INPUT'){
      this.props.handleRadioChange(this.props.value)
    }
  }

  render () {
    return (
      <div
        className="md-radio"
        onClick={this.onClick}
      >
        <input
          name={this.props.value}
          className={this.props.checked ? 'checked' : ''}
          type="radio"
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.onChange}
        />
        <label>
          {this.props.children || this.props.value}
        </label>
      </div>
    )
  }
}

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  handleRadioChange: PropTypes.func,
  labelClass: PropTypes.string,
  value: PropTypes.string
}

export default Radio
