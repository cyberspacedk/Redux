import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "./redux/actions/getNewsActions";
import Loader from "react-loader-spinner";
import "./App.css";
import Main from "./Main/Main";

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { news } = this.props;

    return (
      <div className="App">
        <header />
        {news.length ? (
          <Main />
        ) : (
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        )}
      </div>
    );
  }
}

const mstp = state => ({
  news: state.news
});

const mdtp = dispatch => ({
  fetch: () => dispatch(asyncData())
});

export default connect(
  mstp,
  mdtp
)(App);
