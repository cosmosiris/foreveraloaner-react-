import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
import Footer from './Footer'
import Categories from './Categories'
import SearchForm from './SearchForm'



class App extends React.Component {
  render () {
    return(
    	<div>
            <SearchForm />
            <Header />
            <Footer />
            <Categories />
        </div>
    )
  }
}

export default App
