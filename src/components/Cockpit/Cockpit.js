import React, { useEffect, useRef } from "react";

import style from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toogleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request...
    // setTimeout(() =>{
    //     alert('Save data to cloud');
    // }, 1000);
    toogleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd udeEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // useEffect

  const classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = style.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(style.red); // classes = ['red']
  }

  if (props.personsLength <= 1) {
    classes.push(style.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={style.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button ref={toogleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {() => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>

      
    </div>
  );
};

export default React.memo(Cockpit);
