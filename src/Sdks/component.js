import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getVisibleSdks = (sdks, filter) => {
  switch (filter.type) {
    case 'Search':
      return sdks.filter(s =>
        s.title.toLowerCase().includes(filter.search.toLowerCase())
      )
    case 'Tag':
      return sdks.filter(s => s.tags.includes(filter.aditional))
    case 'All':
    default:
      return sdks
  }
}

class Sdks extends Component {
  render() {
    const { visibilityFilter, sdks } = this.props
    const visibleSdks = getVisibleSdks(sdks, visibilityFilter)

    if (visibleSdks.length > 0) {
      return (
        <main className="results">
          {(() => {
            return visibleSdks.map(item => {
              return (
                <div className="card" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>
                    &nbsp;
                    {(() => {
                      return item.tags.map((tag, idx) => {
                        let delimiter = ''
                        if (
                          item.tags.length > 1 &&
                          idx + 1 !== item.tags.length
                        ) {
                          delimiter = ','
                        }
                        return (
                          <span key={idx}>
                            {tag}
                            {delimiter}{' '}
                          </span>
                        )
                      })
                    })()}
                  </p>
                </div>
              )
            })
          })()}
        </main>
      )
    } else {
      return (
        <main className="results">
          <div className="card">
            <h2>No results with your filter</h2>
            <p>&nbsp;</p>
          </div>
        </main>
      )
    }
  }
}

Sdks.propTypes = {
  sdks: PropTypes.array,
  visibilityFilter: PropTypes.object
}

export default Sdks
