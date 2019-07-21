import React from 'react';

import style from './Cockpit.module.css'

const cockpit = ( props ) => {
     let classes = [];
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

export default cockpit;