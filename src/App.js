import React, { Component } from 'react';

class App extends Component {
  state = {
    employee: [
      {
        name: "Karlo",
        age: 24,
        department: "IT"
      },
      {
        name: "John",
        age: 20,
        department: "HR"
      },
      {
        name: "Harry",
        age: 29,
        department: "IT"
      },
    ]
  }

  render() {
    return (
      <div>
        <h2>Employee list</h2>
        {this.state.employee.map(item => {
          return (
            <div>
              <b>Name:</b> {item.name} <b>Age:</b> {item.age} <b>Department:</b> {item.department}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;