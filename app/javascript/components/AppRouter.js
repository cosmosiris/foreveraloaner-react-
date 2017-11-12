import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import MyProfile from './MyProfile'
import CreatePost from './CreatePost'
import Header from './Header'
import Footer from './Footer'


class AppRouter extends React.Component {
  render () {
    return(
    	<BrowserRouter>
        <div>
          <Header />
      		<Switch>
  	            <Route exact path="/" component={App} />
  	            <Route exact path="/user/show" component={MyProfile} />
  	            <Route exact path="/post/new" component={CreatePost} />     
  	        </Switch>   
            <Footer />  
        </div>      
    	</BrowserRouter>
    )
  }
}

export default AppRouter
