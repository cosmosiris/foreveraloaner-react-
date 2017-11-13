import React from "react"
import PropTypes from "prop-types"
import CategoriesContainer from './CategoriesContainer'
import Category from './Category'
import SearchForm from './SearchForm'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      categories:[],
      posts: [],
      reviews: [],
      transactions: [],
      tags: []
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
    	<div>
        <SearchForm />
        <ul className="category-list">
          {
            this.state.categories.map(category => <CategoriesContainer key={category.id} id={category.id} name={category.name} />)
          }
        </ul>
      </div>
    )
  }
}

export default App
