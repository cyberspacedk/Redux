import React, { Component } from 'react'; 
import Createcontact from '../Createcontact/Createcontact';
import {connect} from 'react-redux'; 
import showModalAction from '../../Redux/Actions/showModalAction';
import Usercard from '../Usercard/Usercard';
import getFromLocalStorageAction from '../../Redux/Actions/getFromLocalStorageAction';


import './App.css';

{/* 
 
Кнопка «Добавить контакт» в списке запускает масштабирование + анимацию непрозрачности всплывающей формы.

Все кнопки должны иметь анимацию реального нажатия, когда пользователь нажимает кнопку -
нижняя часть кнопки (10 пикселей) анимирует ее высоту до 0 пикселей, а вся кнопка перемещается вниз на 10 пикселей

Нажмите на любой существующий контакт, активируйте ту же анимацию масштаба и непрозрачности и откройте форму редактирования.

Храните все данные в локальном хранилище.

Добавьте перетаскивание для изменения порядка списка, сохраняйте порядок в локальном хранилище.

*/}



class App extends Component {


  componentDidMount(){
    this.props.getFromLocalStorageAction();
    
  }
  


  render() {

  const {modal, showModal} = this.props;
    return (
      <div className="contact-container"> 
        
        <div className="users-cards-container">
          <Usercard />
        </div>
        <button className="add-new-contact" onClick={showModal}>Add Contact</button>  

        {modal && <Createcontact />}

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  modal : state.modal, 

})

const mapDispatchToProps = (dispatch) => ({
  showModal : () => dispatch( showModalAction() ),
  getFromLocalStorageAction: () => dispatch( getFromLocalStorageAction() ),

})

export default connect(mapStateToProps,mapDispatchToProps)(App);  