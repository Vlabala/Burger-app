import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {id: '0', name: 'Max', age: 28},
            {id: '1', name: 'Manu', age: 29},
            {id: '2', name: 'Vlad', age: 23}
        ],
        showPersons: false,
    };
    deletePersonHandler = index => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons})
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;
        this.setState({persons: persons});

    };
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            color: 'black',
            padding: '8px',
            cursor: 'pointer',
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }
        return (
                <div className="App">
                    <h1>Hi, i'm a React App</h1>
                    <p>This is really working!</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                    </button>
                    {persons}
                </div>
        );

    }
}

export default App;
