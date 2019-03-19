import React, { Component , Fragment} from 'react'
import {connect} from 'react-redux'; 



class Usercard extends Component {

  render() {

    const {data}=this.props;


    return (
      <Fragment>
        {data.map(elem=> (
          <div className="user-card-item" key={elem.phone}>
            <p> <span>Name:</span>{elem.firstname} {elem.lastname}</p>
            <p> <span>Phone:</span>{elem.phone}</p>
            <p> <span>Email:</span>{elem.email}</p>
          </div>
        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({ 
  data: state.userCards,
})

 

export default connect(mapStateToProps,null)(Usercard);  