import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import searchAction from "../../Redux/Actions/searchAction";
import resetAction from '../../Redux/Actions/resetAction';

const NewsItem = ({ news, filter, filterAction , reset}) => {

  const theSameArticle = news.filter(el=> el.title.includes(filter));

  return (
    <div>
      <div className="panel">
        <input
          type="text"
          className="search"
          value={filter}
          onChange={filterAction}
        />
        {/* <NavLink to="/" className="goback">
          GO BACK{" "}
        </NavLink> */}
        <button className="goback" onClick={reset}>GO BACK</button>
      </div>

      {theSameArticle.map(el => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  news: state.news,
  filter: state.filter
});
const mdtp = dispatch => ({
  filterAction: evt => dispatch(searchAction(evt)),
  reset: function(){
    return dispatch(resetAction());
  },
});

export default connect(
  mapStateToProps,
  mdtp
)(NewsItem);
