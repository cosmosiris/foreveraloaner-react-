import React from "react"
import PropTypes from "prop-types"
import Navbar from './Navbar'
import Categories from './Categories'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: { }
    }
  }
  render () {
    return(
    	<div>
    		<Navbar />
    		<Categories />
    	</div>
    )
  }
}

export default App
