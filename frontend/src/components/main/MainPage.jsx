// Import React and necessary icons
import React, {useEffect} from 'react';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import './MainPage.css';
import {useDispatch, useSelector} from "react-redux";
import {getHomePage} from "../../store/apiSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const {homePage} = useSelector(state => state.api);
    useEffect(() => {
        dispatch(getHomePage())
    }, [dispatch]);
  return (
      <div className="main-page">
          <div className="main-page-conteiner">
              <div className="vertical-line line1"></div>
              <div className="vertical-line line2"></div>
              <div className="vertical-line line3"></div>
              <div className="horizontal-line line2"></div>
              <div className="horizontal-line line3"></div>

              <div className="center-text top-text">
                  {/*Один Звонок – и ваши проблемы решены!*/}
                  {homePage.title}
              </div>

              <div className="center-text bottom-text">
                  {homePage.description}
                  {/*Комплексное обслуживание и решение мелких технических проблем для предприятий (швейные цеха, кафе, рестораны и другие организации).*/}
              </div>

              <div className="center-square">
                  <h2 className='form-container-h2'>Оставить заявку</h2>

                  <div className="form-container">
                      <div className="form-left">
                          <input type="text" className="input-field" placeholder="Имя*"/>
                          <input type="text" className="input-field" placeholder="Номер телефона*"/>
                          <input type="email" className="input-field" placeholder="Электронная почта*"/>
                      </div>

                      <div className="form-right">
                          <textarea className="textarea-field" rows="4" placeholder="Сообщение*"></textarea>
                      </div>
                  </div>

                  <button className="submit-button">Отправить</button>
              </div>

              <div className="icon-container">
                  <FaInstagram className="social-icon"/>
                  <FaWhatsapp className="social-icon"/>
                  <FaTelegramPlane className="social-icon"/>
              </div>
          </div>


      </div>
  );
};

export default MainPage;
