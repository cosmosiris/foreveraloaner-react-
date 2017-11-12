import React from "react"
import PropTypes from "prop-types"
import Navbar from './Navbar'
import Categories from './Categories'
import SearchForm from './SearchForm'


class App extends React.Component {
  render () {
    return(
    	<div>
    		<Navbar />
        <SearchForm />
    		<Categories />
    	</div>
    )
  }
}

export default App
