import React, { useState } from 'react';
import logopng from '../../assets/logonew.png';
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import closeIcon from '../../assets/closeIcon.png'

const Navbar = () => {
  const [language, setLanguage] = useState('Русский');
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setAccordionOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link to={'/'}>
            <div className="logo">
              <img src={logopng} alt="Логотип" className="logo-image"/>
            </div>
          </Link>

        </div>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <img src={closeIcon} className='close-btn' onClick={toggleMenu}/>
          <div className='menu-block'>
            <div className="links">
              <Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link>
              <Link to="/aboutcompany" onClick={() => setMenuOpen(false)}>О нас</Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Услуги и Тарифы</Link>
              <Link to="/aboutusfiz" onClick={() => setMenuOpen(false)}>Физ.Лицам</Link>
              <Link to="/aboutusur" onClick={() => setMenuOpen(false)}>Юр.Лицам</Link>
              <Link to="/capremont" onClick={() => setMenuOpen(false)}>Капитальный ремонт</Link>
              <Link to="/vacancies" onClick={() => setMenuOpen(false)}>Вакансии</Link>
              <Link to="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
            </div>
            <div>
              <div className="language-switcher">
                <button onClick={toggleLanguage} className="accordion-button">
                  {language}
                </button>
                {isAccordionOpen && (
                    <div className="language-options">
                      <button onClick={() => changeLanguage('Русский')}>Русский</button>
                      <button onClick={() => changeLanguage('Кыргызский')}>Кыргызский</button>
                      <button onClick={() => changeLanguage('Английский')}>Английский</button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <button className="contact-button">Связаться</button>
          <button className="burger-menu" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
