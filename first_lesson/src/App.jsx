import React, { Component } from 'react'; 
import './App.css';
import {connect} from 'react-redux';
import * as actions from './Redux/Actions/counterActions'; 
import Form from './Form/Form';
class App extends Component {

  render() {
    
    const{value, plus,minus,reset}=this.props; 

    return (
      <div className="counter">  

        <p>{value}</p>
        <button onClick={plus}>+ 1</button>
        <button onClick={reset}>reset</button>
        <button onClick={minus}>- 1</button>
        <Form />
      </div>
     
    );
  }
}



const mapStateToProps = (state) => ({value: state.counter, inputValue: state.inputValue}) ;

const mapDispatchToProps = (dispatch)=> ({
  plus :() => dispatch( actions.plus(5)),
  minus :() => dispatch( actions.minus(5)),
  reset :() => dispatch( actions.reset()), 
})
 
 

export default connect(mapStateToProps,mapDispatchToProps)(App);
