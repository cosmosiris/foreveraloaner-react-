import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Category from './Category'

class CategoriesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/categories')
    .then(res => {
      const categories = res.data.categories
      this.setState( {categories} )
    })
  }

  render () {
    return(
      <ul className="category-list">
        { this.state.categories.map(category => <li key={category.name}><Link to={`/categories/${category.id}`}>{category.name}</Link></li>) }
      </ul>
    )
  }
}

export default CategoriesContainer
