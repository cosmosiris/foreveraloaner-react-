import React from "react"
import PropTypes from "prop-types"
import Categories from './Categories'
import SearchForm from './SearchForm'



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      posts: {},
      reviews: {},
      transactions: {},
      tags: {}
    }
  }

  render () {
    return(
    	<div>
            <SearchForm />

            <Categories />
        </div>
    )
  }
}

export default App
