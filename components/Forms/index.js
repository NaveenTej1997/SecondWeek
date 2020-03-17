import React, { Component } from 'react';
import './style.css';

class Form extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                firstName: "",
                lastName: "",
                email: "",
                course: "",
    
    
            }
            this.handleSubmit=this.handleSubmit.bind(this)
        }
    
        firsthandler = (event) => {
            this.setState({
                firstName: event.target.value
            })
        }
        lasthandler = (event) => {
            this.setState({
                lastName: event.target.value
            })
        }
        emailhandler = (event) => {
            this.setState({
                email: event.target.value
            })
        }
    
        coursehandler = (event) => {
            this.setState({
                course: event.target.value
            })
        }
    
        handleSubmit = (event) => {
            alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
            console.log(this.state);
            this.setState({
                firstName: "",
                lastName: "",
                email: '',
                course: "",
            })
         event.preventDefault()
            
        }
    
    
    
    
        render() {
            return (
                <div className="forms">
    
                    <form onSubmit={this.handleSubmit}>
                        
                        <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                        <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                        <label>Email :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="email..." /><br />
                        <label>Course :</label><select onChange={this.coursehandler} defaultValue="Course">
                            <option defaultValue>AWS</option>
                            <option value="aws">React</option>
                            <option value="html">HTML</option>
                        </select><br />
                        <input type="submit" value="Submit" />
                    </form>
    
                </div>
                
            )
        }
    }
    
    export default Form;