import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from 'react-router-dom'
import MyProfile from './MyProfile'
import CreatePost from './CreatePost'
import App from './App'


class Main extends React.Component {
  render () {
    return(
    	<div className="main-content" style={{height: '100%'}}>
    		<Switch>
    			<Route exact path="/" component={App} />
    			<Route exact path="/user/show" component={MyProfile} />
    			<Route exact path="/post/new" component={CreatePost} />		
    		</Switch>    		
    	</div>
    )
  }
}

export default Main
