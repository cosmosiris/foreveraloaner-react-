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

  render () {
    return(
    	<div>
        <CategoriesContainer />
      </div>
    )
  }
}

export default App
