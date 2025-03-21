import React from 'react';
import logo from '../../assets/logonew.png';
import './Footer.css';
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import {Link} from "react-router-dom";
// import LazyImage from "../LazyImage/LazyImage";

const Footer = () => {
  return (
      <div className="footer">
        {/* Верхняя часть с логотипом и телефоном */}
        <div className="footer-header">
          <div className="footer-logo">
            <img src={logo} alt="Logo" style={{width:'100px', height:'auto'}}/>
          </div>
          <div className="footer-phone-icons">
            <p className="footer-phone">+996–777-888-666</p>
          </div>
        </div>

        {/* Основное содержимое */}
        <div className="footer-content">
          <div className="footer-column 1">
              <Link to='/' style={{ textDecoration: 'none' }}><p>Главная</p></Link>
              <Link to='/aboutcompany' style={{ textDecoration: 'none' }}><p>О нас</p></Link>
              <Link to='/services' style={{ textDecoration: 'none' }}><p style={{whiteSpace: 'nowrap'}}>Услуги и Тарифы</p></Link>
              <Link to='/aboutusfiz' style={{ textDecoration: 'none' }}><p>Физ.лицам</p></Link>
              <Link to='/aboutusur' style={{ textDecoration: 'none' }}><p>Юр.лицам</p></Link>
              <Link to='/capremont' style={{ textDecoration: 'none' }}><p>Кап.ремонт</p></Link>
              <Link to='/vacancies' style={{ textDecoration: 'none' }}><p>Вакансии</p></Link>
          </div>

          <div className="footer-column 2">
            <p>Контакты</p>
            <p>Адрес:</p>
            <p style={{ whiteSpace: 'nowrap' }}>ул. Чынгыза Айтматова <br/> 47а, 2эт.к.№3</p>
            <p>График работы:</p>
            <p>С 08:00 до 23:00 <br/> Без выходных</p>
          </div>

          <div className="footer-column 3">
            <p>Электронная почта:</p>
            <p className='emailfooter'>odinzvonok@Gmail.Com</p>
          </div>
        </div>

        {/* Иконки соцсетей в правом нижнем углу */}
        <div className="footer-icons">
          <FaInstagram className="footer-icon" />
          <FaTelegramPlane className="footer-icon" />
          <FaWhatsapp className="footer-icon" />
        </div>

        {/* Нижняя часть */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2024 Один Звонок. Политика конфиденциальности</p>
        </div>
      </div>
  );
};

export default Footer;
