import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
// actions
import getCurrencyRateAction from '../../Redux/Actions/getCurrencyRateAction';

// components & style
import Header from '../Header/Header';
import CurrencyList from '../CurrencyList/CurrencyList';
import Converter from '../Converter/Converter';
import './App.css';

 

class App extends Component {


  componentDidMount(){
    this.props.getRate();
  }

  render() { 

    return (
       <div className="wrapper">
          <div className="container">
            <Header />
            <CurrencyList />
            <Converter />
          </div> 
       </div>
        

    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  getRate : () => dispatch( getCurrencyRateAction())
})

export default connect(null,mapDispatchToProps)(App); 