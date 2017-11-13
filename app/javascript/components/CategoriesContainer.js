import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import axios from 'axios'

class CategoriesContainer extends React.Component {
  constructor() {
    super();
  }

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

export default CategoriesContainer
