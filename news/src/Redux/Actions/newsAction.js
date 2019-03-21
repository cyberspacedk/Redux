import axios from 'axios';



const news = (data) => ({
  type : "GETALLNEWS",
  payload: data,
})

const getData =()=> axios.get('https://jsonplaceholder.typicode.com/posts'); 

const getNews = ()=> (dispatch)=> getData().then(({data})=> dispatch(news(data))); 


export default getNews;