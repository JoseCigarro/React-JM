import React, { useEffect } from 'react';

import style from './Cockpit.module.css'

const Cockpit =  props  => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // http request...
      setTimeout(() =>{
        alert('Save data to cloud');
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);

    useEffect(() =>{
      console.log('[Cockpit.js] 2nd udeEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    });

    // useEffect
  
    const classes = [];
    let btnClass = '';
    if(props.showPersons){
      btnClass = style.Red;
    }

    if (props.persons.length <= 2) {
      classes.push(style.red); // classes = ['red']
    }

    if (props.persons.length <=1) {
      classes.push(style.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={style.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>

    );
};

export default Cockpit;