import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import {Route} from 'react-router-dom';
import './App.css';
import getNews from '../../Redux/Actions/newsAction'
import NewsItem from '../NewsItem/NewsItem'
import Loader from 'react-loader-spinner'

 

class App extends Component {




  componentDidMount(){

    this.props.getNews();
    
  }
  render() {

  const {news} = this.props;
  console.log(news);
    return (
      <div>
        {news.length ?  <Route path="/" component={NewsItem}/>  : <Loader />}  
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  news : state.news, 

})

const mapDispatchToProps = (dispatch) => ({
  getNews : ( )=> dispatch( getNews() )
})

export default connect(mapStateToProps,mapDispatchToProps)(App); 