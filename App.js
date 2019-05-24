import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Zeca', age: 34},
            {name: 'Peata', age: 33},
        ],
        otherState: 'some value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was Clicked');  
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Zeca', age: 34},
                {name: 'Peata', age: 66},
            ]
        })  
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 28},
                {name: 'Zeca', age: 34},
                {name: 'Peata', age: 33},
            ]
        })    
    }

    togglePersonsHandler = () => {

    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
          <div className="App">
            <h1>"Hi I'm a React App"</h1>
            <button 
                style={style}
                onClick={this.togglePersonsHandler()}>Switch Name</button>
            { this.showPersons ?
                <div>
                <Person 
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler. bind(this, 'Peter')}
                changed={this.nameChangeHandler}/>
                <Person 
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>My Hobies : Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>

                </div>
            }
            
          </div>
        );
    }
}

export default App;
