import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import {testAction} from '../../Redux/Actions/testAction'

import './App.css';

 

class App extends Component {
  render() {

  const {testInputValue, testInputChange} = this.props;
    return (
      <div>
        <h2>REACT REDUX STARTER KIT</h2>
        <p>Test : {testInputValue}</p>
        <input type="text" 
              name="test"  
              value={testInputValue}
              onChange={testInputChange}
              />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  testInputValue : state.testValue, 

})

const mapDispatchToProps = (dispatch) => ({
  testInputChange : (evt)=> dispatch( testAction(evt) )
})

export default connect(mapStateToProps,mapDispatchToProps)(App); 