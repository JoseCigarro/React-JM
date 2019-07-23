import React, { Component } from 'react';
import Style from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }


   state = {
    persons: [
      {id: 'qwewe', name: 'Saruga', age: 28},
      {id: 'qwe23', name: 'Julia', age: 21},
      {id: 'qwe12', name: 'Cátia', age: 31 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
   }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');   
  // }

  componentDidMount( ) {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }
  

  nameChangedHandler = ( event, id ) => {

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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render(){
    console.log('[App.js] render');
    let persons = null;
    
    
    if(this.state.showPersons){
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    
      return (
        <div className={Style.App}>
          <button onClick={() =>{
            this.setState({ showCockpit: false });
          }}>
            Remove Cockpit
            </button>
          {this.state.showCockpit ? ( 
              <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonHandler} 
              /> 
            ) : null}
          {persons}
        </div>
      );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }  
}

export default App;
