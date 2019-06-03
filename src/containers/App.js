import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxs';
import withClass from '../hoc/withClass';
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
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
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
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter+1
            };
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };
    loginHandler = () =>{
        this.setState({authenticated:true})
    };
    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                isAuthenticated={this.state.authenticated}/>;
        }
        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: !this.state.showCockpit})
                }}>Remove button
                </button>
                {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    clicked={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    login={this.loginHandler}/> : null}
                {persons}
            </Aux>
        );

    }
}

export default withClass(App, classes.App);
