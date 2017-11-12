import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Categories from './Categories'
import SearchForm from './SearchForm'


class App extends React.Component {
  render () {
    return(
    	<div>
        <SearchForm />
    		<Header />
    		<Main />
    		<Footer />
    		<Categories />
    	</div>
    )
  }
}

export default App
