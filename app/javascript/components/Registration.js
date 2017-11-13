import React from "react"
import PropTypes from "prop-types"

class Registration extends React.Component {
    constructor(){
        super();
        this.state={
            firstName: 'My realname',
            lastName: '',
            email: '',
            password: ''
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitFormData = this.submitFormData.bind(this);
    }

    handleChange(event){
        this.setState({firstName: event.target.firstName});
    }

    handleSubmit(event){
        alert('a name was submitted: ' + this.state.firstName);
        event.preventDefault();
    }

    submitFormData(){
        axios.post('/user', {
        firstName: this.state.firstName
        }).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error)
        })
    }

    render () {
        return(
        	<div className="Registration" style={{height: '200px', backgroundColor: 'honeydew'}}>
        		<h2>Registration COMPONENT</h2>
                <form onSubmit={this.submitFormData()}>
                    <input type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="first name"/>
                    <input type="submit"/>
                </form>
                <p>{this.state.firstName}</p>
        	</div>
        )
      }
}

export default Registration
