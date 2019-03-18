import React, { Component } from "react";
import { connect } from "react-redux";
import { change , clear} from "../Redux/Actions/inputAction";
import {submitAction} from '../Redux/Actions/submitAction';

class Form extends Component {
  render() {
    const { input, change ,submit, clear } = this.props;

    return (
      <form className="form" onSubmit={ (evt)=> { submit(evt, input); clear() } }>
        <input type="text" value={input} onChange={change} />
        <button type="submit" > Save </button>
      </form>
    );
  }
}

const MSTP = state => ({ 
    input: state.input 
});

const MDTP = dispatch => ({ 
    change: evt => dispatch(change(evt)),
    submit:  (evt,text) => {
        evt.preventDefault();
        dispatch( submitAction(text) )
    }, 
    clear : () => dispatch( clear() ),

});

export default connect(
  MSTP,
  MDTP
)(Form);
