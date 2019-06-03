import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    /*    static getDerivedStateFromProps(props, state) {
            console.log('[Persons.js] getDerivedStateFromProps');
            return state;
        }*/

    /*    componentWillReceiveProps(nextProps, nextContext) {
            console.log('[Persons.js] componentWillReceiveProps', nextProps)
        }*/


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Spanshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}/>
            );
        });
    }
}

export default Persons;