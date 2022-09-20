import { Component } from 'react';

class GreetingClass extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default GreetingClass;