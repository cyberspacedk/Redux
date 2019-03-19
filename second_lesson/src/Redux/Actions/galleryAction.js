import axios from 'axios';

// создаем экшн 
const galleryAction = (data)=> ({
  type: 'DOWNLOADED',
  data,
})
 
// создадим строку запросы
const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

// запросим данные, которые возвратим в переменную 
const getImg = () => axios.get(`${END_POINT}${API_KEY}&category=food&order=popular&per_page=10`); 

// вызовем асинхронную функцию в которой передадим данные в ЭКШН
export const asyncGalleryAction = () => dispatch => {
    getImg()
      .then(data=>  dispatch( galleryAction(data.data.hits) ))
}
 