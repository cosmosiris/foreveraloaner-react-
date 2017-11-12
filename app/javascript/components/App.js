import React from "react";
import PropTypes from "prop-types";
import Categories from './Categories';
import SearchForm from './SearchForm';
import axios from 'axios';

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
      console.log(res)
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
            this.state.categories.map(category => <Categories key={category.id} id= {category.id} name={category.name} />)
          }
        </ul>
      </div>
    )
  }
}

export default App
