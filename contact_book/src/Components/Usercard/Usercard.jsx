import React, { Component , Fragment} from 'react'
import {connect} from 'react-redux'; 
import userpic from '../Createcontact/image.jpg';
import {editModeAction} from '../../Redux/Actions/userDataAction';
import showModalAction from '../../Redux/Actions/showModalAction'; 



class Usercard extends Component {

  render() {

    const {data, editMode,show}=this.props;


    return (
      <Fragment>
        {data.map(elem=> (
          <div className="user-card-item" key={elem.id}>
            <div>
              <p><span>Name:</span>{elem.firstname} {elem.lastname}</p>
              <p><span>Phone:</span>{elem.phone}</p>
              <p><span>Email:</span>{elem.email}</p> 
            </div> 
            <img className="user-avatar" src={userpic} alt="avatar"/>
            <div className="edit-card" data-edit={elem.id} onClick={(evt)=> {editMode(evt,data); show();} }></div>
          </div>
        ))}

      </Fragment>
    )
  }
}

const mstp = (state) => ({ 
  data: state.userCards,
})

const mdtp = (dispatch) => ({
  editMode : (evt,arr)=> dispatch(editModeAction(evt, arr)),
  show: ()=>dispatch(showModalAction())
}) 

export default connect(mstp,mdtp)(Usercard);  