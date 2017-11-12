import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

class Categories extends React.Component {

  render () {
    return(
    	<div>
        <div className="category-list">
          <li><Link to={`/categories/${this.props.id}`}>{this.props.name}</Link></li>
        </div>
    	</div>
    )
  }
}

export default Categories
