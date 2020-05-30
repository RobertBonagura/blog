import React from "react"
import axios from "axios"

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          phone: '',
          email: '',
          desc: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        const inputValue = event.target.value;
        const stateField = event.target.name;
        this.setState({
          [stateField]: inputValue,
        });
      }

    async handleSubmit(event) {
      event.preventDefault();
      const {name, phone, email, desc} = this.state;

      await axios.post(
        'https://yu6miy0xz4.execute-api.us-east-1.amazonaws.com/test/submit',
        {
            name: name,
            phone: phone,
            email: email,
            desc: desc,
        } 
      );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h4>Name:</h4>
            <input type="text" style={{height:`35px`, width:`100%`}} id="name" name="name" placeholder="Enter name here…" onChange={this.handleChange}
            value={this.state.name}/><br/>
          <h4>Phone:</h4>
            <input type="phone" style={{height:`35px`, width:`100%`}} id="phone" name="phone" placeholder="Enter phone number" onChange={this.handleChange}
            value={this.state.phone}/><br/>
          <h4>Email:</h4>
            <input type="email" style={{height:`35px`, width:`100%`}} id="email" name="email" placeholder="Enter email here…" onChange={this.handleChange}
            value={this.state.email}/><br/>
          <h4>How can we help you?</h4>
            <textarea id="desc" name="desc" rows="3" placeholder="Enter your message…" onChange={this.handleChange}
            value={this.state.desc}></textarea><br/>
            <button type="submit" class="btn btn-primary">Submit</button> 
        </form>
      );
    }
  }

  export default Form;