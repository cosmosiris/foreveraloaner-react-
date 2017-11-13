import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Registration extends React.Component {
    constructor(){
        super();
        this.state = {formData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        // this.submitFormData = this.submitFormData.bind(this);
    }

    updateFirstName(event){
        const formData = this.state.formData
        formData.firstName = event.target.value
        this.setState({ formData })
    }

    updateLastName(event){
        const formData = this.state.formData
        formData.lastName = event.target.value
        this.setState({ formData })
    }

    updateEmail(event){
        const formData = this.state.formData
        formData.email = event.target.value
        this.setState({ formData })
    }

    updatePassword(event){
        const formData = this.state.formData
        formData.password = event.target.value
        this.setState({ formData })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);

         axios.post('/api/users', { 
            user: {
                first_name: this.state.formData.firstName, 
                last_name: this.state.formData.lastName,
                email: this.state.formData.email,
                password: this.state.formData.password 
            }
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.formData.firstName} placeholder="first name" onChange={this.updateFirstName} />
                    <input type="text" value={this.state.formData.lastName} placeholder="last name" onChange={this.updateLastName} />
                    <input type="email" value={this.state.formData.email} placeholder="email" onChange={this.updateEmail} />
                    <input type="password" value={this.state.formData.password} placeholder="password" onChange={this.updatePassword} />
                    <input type="submit"/>
                </form>
        	</div>
        )
      }
}

export default Registration
