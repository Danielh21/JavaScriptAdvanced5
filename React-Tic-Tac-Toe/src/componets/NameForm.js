import {Component} from 'react'


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange = (event) => {
     this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         Name: <input type="text" value={this.state.value}
                      onChange={this.handleChange} />
         <input type="submit" value="Submit" />
        <p>{JSON.stringify(this.state.value)}</p>
      </form>
    );
    }
}
  export default NameForm