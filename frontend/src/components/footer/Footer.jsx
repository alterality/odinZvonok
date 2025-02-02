import React from 'react';
import logo from '../../assets/logonew.png';
import './Footer.css';
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
// import LazyImage from "../LazyImage/LazyImage";

const Footer = () => {
  return (
      <div className="footer">
        {/* Верхняя часть с логотипом и телефоном */}
        <div className="footer-header">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-phone-icons">
            <p className="footer-phone">+996–777-888-666</p>
          </div>
        </div>

        {/* Основное содержимое */}
        <div className="footer-content">
          <div className="footer-column 1">
            <p>Главная</p>
            <p>О нас</p>
            <p style={{ whiteSpace: 'nowrap' }}>Услуги и Тарифы</p>
            <p>Физ.лицам</p>
            <p>Юр.лицам</p>
            <p>Вакансии</p>
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
