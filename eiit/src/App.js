import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Arnas", age: 100},
      {name: "not Arnas", age: 1000},
      {name: "not not Arnas", age: 100000}
    ],
    otherState: "some other value"
  }

  switchNameHandler = () => {

    this.setState ({
      persons: [
        {name: "Arnas", age: 100},
        {name: "not Arnas", age: 1000},
        {name: "a GOD", age: 1000000000}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I like React</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I not like React</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I not not like React</Person>
      </div>
    );
  }
}

export default App;

