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
      const categories = res.data.categories.map( (category) =>
        ({id: category.id, name: category.name }))
      this.setState( {categories} )
    })
  }

  render () {
    return(
      <ul className="category-list">
        { this.state.categories.map(category => <Category key={category.id} id={category.id} name={category.name} />) }
      </ul>
    )
  }
}

export default CategoriesContainer
