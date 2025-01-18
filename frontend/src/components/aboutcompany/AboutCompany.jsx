import React, {useEffect} from 'react';
import aboutconpimg1 from '../../assets/aboutcomp.png';

import './AboutCompany.css';
import {useDispatch, useSelector} from "react-redux";
import {getAboutCompany, getClients, getHomeAboutCompany, getTeam, resetIsLoaded} from "../../store/apiSlice";
import LazyImage from "../LazyImage/LazyImage";

const AboutCompany = () => {
  const dispatch = useDispatch();
  const {aboutCompany, team, clients} = useSelector(state => state.api);
  useEffect(() => {
    dispatch(getAboutCompany())
    dispatch(getTeam())
    dispatch(getClients())
    return () => {
      dispatch(resetIsLoaded());
    };
  }, [dispatch]);
  return (
    <div className="about-company">
      {/* Первый контейнер */}
      <div className="first-container">
        {/* Текстовая часть */}
        <div className="text-section">
          <h1 className="header-font">О нашей компании</h1>
          <p>
            {aboutCompany.body}
          </p>
        </div>

        {/* Изображение */}
        <div className="image-section">
          <LazyImage src={aboutconpimg1} alt="Company" />
          <div className="image-caption">
          Свяжитесь с нами, чтобы узнать больше <br/> о наших услугах и получить консультацию <br/> от нашего эксперта.
          </div>
        </div>
      </div>

      {/* Контейнер с членами команды */}
      <div className="team-container">
        <div className="team-box black-box">
          <p className="header-font">Наша команда</p>
        </div>
        {team.map((employee, index) => (
          <div key={index} className="team-box employee-box">
            <div className="employee-name">{employee.name}</div>
            <LazyImage src={employee.image} alt={employee.name} />
            <div className="employee-position">{employee.position}</div>
          </div>
        ))}
      </div>

       

      <div className="black-container">
        <h3 className="black-heading header-font">КЛИЕНТЫ И ПАРТНЕРЫ</h3>
        <div className="squares-container">
          {clients.map((client, index) => (
            <div className="square" key={index}>
              <p className="square-text">{client.name}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="aboutcomp-formcomt">
        <div className="aboutcomp-wrapper">
  <h2 className="header-font">Оставить заявку</h2>

  <div className="aboutcomp-container">
    {/* Левая колонка с полями ввода */}
    <div className="aboutcomp-left">
      <input type="text" className="aboutcomp-input" placeholder="Имя*" />
      <input type="text" className="aboutcomp-input" placeholder="Номер телефона*" />
      <input type="email" className="aboutcomp-input" placeholder="Электронная почта*" />
    </div>

    {/* Правая колонка с полем сообщения */}
    <div className="aboutcomp-right">
      <textarea className="aboutcomp-textarea" rows="4" placeholder="Сообщение*"></textarea>
    </div>
  </div>


  <button className="aboutcomp-button">Отправить</button>
</div>

    </div>



    </div>
  );
};

export default AboutCompany;
