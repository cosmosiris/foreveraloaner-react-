import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import MyProfile from './MyProfile'
import CreatePost from './CreatePost'


class AppRouter extends React.Component {
  render () {
    return(
    	<BrowserRouter>
    		<Switch>
	            <Route exact path="/" component={App} />
	            <Route exact path="/user/show" component={MyProfile} />
	            <Route exact path="/post/new" component={CreatePost} />     
	        </Switch>           
    	</BrowserRouter>
    )
  }
}

export default AppRouter
