import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                {id: '0', name: 'Max', age: 28},
                {id: '1', name: 'Manu', age: 29},
                {id: '2', name: 'Vlad', age: 23}
            ],
            showPersons: false,
            showCockpit: true
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

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
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }
        return (
            <div>
                <button onClick={() => {
                    this.setState({showCockpit: !this.state.showCockpit})
                }}>Remove button
                </button>
                {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    clicked={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}/> : null}
                {persons}
            </div>
        );

    }
}

export default App;
