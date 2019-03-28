import React from 'react';
import './SinglePage.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


const SinglePage = ({news,match}) => {

// find the same article throught params id written in NavLink
const data = news.find(el=> el.publishedAt === match.params.id)

    return (
        <div className='article'>

        <NavLink to="/"> На главную </NavLink> 

            <img src={data.urlToImage} alt={data.title} className='article-img'/>
            <h2 className='article-title'>{data.title}</h2>
            <p className='article-text'>{data.description}</p>
            
            <a href={data.url} target='_blank' className='article-link'>Читати на сайті</a> 
        </div>
    );
};


const mstp = (state) => ({
    news: state.news,
})

export default connect(mstp,null)(SinglePage);