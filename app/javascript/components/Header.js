import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return(
    	<div className="header" style={{height: '200px', backgroundColor: 'honeydew'}}>
    		<h2>I am the header</h2>
    		<ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/user/show">My Profile</Link></li>
    			<li><Link to="/post/new">Create Post</Link></li>
    		</ul>
    	</div>
    )
  }
}

export default Header
