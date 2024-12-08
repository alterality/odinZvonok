import React from 'react';
import logo from '../../assets/logo.png';
import './Footer.css';
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <p>Главная</p>
          <p>О нас</p>
          <p style={{ whiteSpace: 'nowrap' }}>Услуги и Тарифы</p>
          <p>Физ.лицам</p>
          <p>Юр.лицам</p>
          <p>Вакансии</p>
        </div>

        <div className="footer-column">
          <p>Контакты</p>
          <p>Адрес:</p>
          <p style={{ whiteSpace: 'nowrap' }}>ул. Чынгыза Айтматова 47а, 2эт.к.№3</p>
          <p>График работы:</p>
          <p>С 08:00 до 23:00 Без выходных</p>
        </div>
        <div className="footer-column">
          <p>Электронная почта:</p>
          <p>Odinzvonok@Gmail.Com</p>
        </div>

        <div className="footer-column footer-phone-icons">
          <p className="footer-phone">+996–777-888-666</p>
          <div className="footer-icons">
            <FaInstagram className="footer-icon" />
            <FaTelegramPlane className="footer-icon" />
            <FaWhatsapp className="footer-icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2024 Один Звонок. Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Footer;
