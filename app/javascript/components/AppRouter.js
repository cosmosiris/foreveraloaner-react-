import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import MyProfile from './MyProfile'
import CreatePost from './CreatePost'
import Header from './Header'
import Post from './Post'
import Footer from './Footer'
import CategoriesContainer from './CategoriesContainer'
import Category from './Category'
import PostsContainer from './PostsContainer'
import SearchForm from './SearchForm'
import axios from 'axios'
import Registration from './Registration'


class AppRouter extends React.Component {

  render () {
    return(
    	<BrowserRouter>
        <div>
          <Header />
      		<Switch>
            <Route exact path="/" component={App} />
            <Route path="/categories/:id" component={Category} />
            <Route path="/posts/:id" component={Post} />
            <Route exact path="/api/user/:id" component={MyProfile} />
            <Route exact path="/post/new" component={CreatePost} />
            <Route exact path="/user/new" component={Registration} />
  	       </Switch>
            <SearchForm />
          <Footer />
          </div>
    	</BrowserRouter>
    )
  }
}

export default AppRouter
