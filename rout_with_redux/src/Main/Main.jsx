import React from 'react';
import {Switch, Route} from 'react-router-dom';
import All from '../All/All';
import {connect} from 'react-redux';
import SinglePage from '../SinglePage/SinglePage';


const Main = ({news}) => {

  return (
    <Switch>
      <Route exact path='/' component={All}/>
      <Route exact path='' component={All}/>
      {/* <Route path="/:id" render={ ((props) => <SinglePage {...props}/>)}/> */}
      <Route  path='/:id' component={SinglePage} /> 
    </Switch>
  )
}


const mstp = (state)=>({
  news : state.news
})


export default connect(mstp,null)(Main);
