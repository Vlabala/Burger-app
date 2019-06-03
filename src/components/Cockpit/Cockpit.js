import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const toggleBtn = useRef(null);


    useEffect(() => {
       console.log('[Cockpit.js] useEffect');
       // HTTP request
        /*setTimeout(() => {
            alert('Saved data to cloud!');
        },1000);*/
        toggleBtn.current.click();
        return () => {
            console.log('[Cockpit.js] cleanUpWork in cockpit');
        }
    },[]);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect2');
        return () => {
            console.log('[Cockpit.js] cleanUpWork in cockpit');
        }
    });
    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}
                ref={toggleBtn}>
                Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
};
export default React.memo(cockpit);