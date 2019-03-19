import React, { Component } from "react";
import {connect} from 'react-redux'; 
import hideModalAction from '../../Redux/Actions/hideModalAction';
import * as inp from '../../Redux/Actions/userDataAction';
import userCardsAction from '../../Redux/Actions/userCardsAction';

import userpic from './image.jpg';

class Createcontact extends Component {


  render() {
  const {
    showModal, 
    userDataActionFname, 
    userDataActionLname,
    userDataActionPhone,
    userDataActionEmail,
    userDataActionDate,
    userDataActionClear,
    userCardsAction,
    userData,
  } = this.props;

    return (
      <div className="create-contact-wrapper">
        <form className="create-contact-form"
            onSubmit={(evt)=> {
                              showModal();
                              userCardsAction(evt,userData);
                              userDataActionClear();
                            }}>

          <div className="left-section">
            <div>
              <span>First Name</span><input type="text" name="firstname" value={userData.firstname}onChange={userDataActionFname} required/>
            </div>
            <div>
              <span>Last Name</span><input type="text" name="lastname" value={userData.lastname}onChange={userDataActionLname} required/>
            </div>
            <div>
              <span>Phone Number</span><input type="number" name="phone" value={userData.phone}onChange={userDataActionPhone} required/>
            </div>
            <div>
              <span>Email Adress</span><input type="email" name="email" value={userData.email}onChange={userDataActionEmail} required/>
            </div>
            <div>
              <span>Date of birth</span><input type="date" name="date" value={userData.date}onChange={userDataActionDate} required/>
            </div>  
          </div>
           

          <div className="right-section">
            <img src={userpic} alt="avatar" className="avatar" />
          </div>
          
          <button className="submit-button">
            Save Contact</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(hideModalAction()),
  userDataActionFname: (evt)=> dispatch(inp.userDataActionFname(evt)),
  userDataActionLname: (evt)=> dispatch(inp.userDataActionLname(evt)),
  userDataActionPhone: (evt)=> dispatch(inp.userDataActionPhone(evt)),
  userDataActionEmail: (evt)=> dispatch(inp.userDataActionEmail(evt)),
  userDataActionDate: (evt)=> dispatch(inp.userDataActionDate(evt)),
  userDataActionClear: ()=>dispatch(inp.userDataActionClear()),
  userCardsAction: (evt,data) => {
                      evt.preventDefault();
                      dispatch( userCardsAction(data) )}

});
 




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Createcontact);
