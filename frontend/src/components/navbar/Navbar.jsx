import React, { useState } from 'react';
import logopng from '../../assets/logo.png';
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('Русский');
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleLanguage = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setAccordionOpen(false);
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logopng} alt="Логотип" className="logo-image" />
        </div>
        <div className="links">
          <Link to="/">Главная</Link>
          <Link to="/aboutcompany">О нас</Link>
          <Link to="/services">Услуги и Тарифы</Link>
          <Link to="/aboutusfiz">Физ.Лицам</Link>
          <Link to="/aboutusur">Юр.Лицам</Link>
          <Link to="/vacancies">Вакансии</Link>
          <Link to="/contacts">Контакты</Link>
          <div className="language-switcher">
            <button onClick={toggleLanguage} className="accordion-button">
              {language}
            </button>
            {isAccordionOpen && (
              <div className="language-options">
                <button onClick={() => changeLanguage('Русский')}>Русский</button>
                <button onClick={() => changeLanguage('Кыргызский')}>Кыргызский</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="contact-button">Связаться</button>
      </div>
    </nav>
  );
};

export default Navbar;
