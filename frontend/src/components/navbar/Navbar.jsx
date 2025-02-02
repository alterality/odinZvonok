import React, {useEffect, useState} from 'react';
import logopng from '../../assets/logonew.png';
import './Navbar.css';
import {useNavigate, Link, useLocation} from 'react-router-dom';
import closeIcon from '../../assets/closeIcon.png'

const Navbar = () => {
  const [language, setLanguage] = useState('Русский');
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClientsOpen,setIsClientsOpen] = useState(false)
  const location = useLocation()
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
  const toggleClients = () =>{
    setIsClientsOpen(!isClientsOpen)
  }
  const clickOnMenuOption = () =>{
    setMenuOpen(false)
    setIsClientsOpen(false);
  }
  const navigate = useNavigate();
  const navigateToAppclication = (locationPath) => {
    navigate(`${locationPath}#application_form`)
  }



  return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link to={'/'}>
            <div className="logo">
              <img src={logopng} alt="Логотип" className="logo-image"/>
            </div>
          </Link>

        </div>

        <div className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
          <img src={closeIcon} className='close-btn' onClick={toggleMenu}/>
          <div className='menu-block'>
            <div className="links">

              <Link to="/aboutcompany" onClick={clickOnMenuOption}><p>О нас</p></Link>
              <Link to="/services" onClick={clickOnMenuOption}><p>Услуги и Тарифы</p></Link>
              <div className='clients-accordion'>
                <button onClick={toggleClients} className="clients-accordion-button">
                  <p>Клиентам</p>
                </button>
                {isClientsOpen && <div className="clients-options">
                  <Link to="/aboutusfiz" onClick={clickOnMenuOption}><p>Физ.Лицам</p></Link>
                  <Link to="/aboutusur" onClick={clickOnMenuOption}><p>Юр.Лицам</p></Link>
                </div>}
              </div>
              <Link to="/capremont" onClick={clickOnMenuOption}><p>Капитальный ремонт</p></Link>
              <Link to="/vacancies" onClick={clickOnMenuOption}><p>Вакансии</p></Link>
              <Link to="/contacts" onClick={clickOnMenuOption}><p>Контакты</p></Link>
            </div>
            <div>
              <div className="language-switcher">
                <button onClick={toggleLanguage} className="accordion-button">
                  {language}
                </button>
                {isAccordionOpen && (
                    <div className={`language-options ${isAccordionOpen ? 'open' : ''}`}>
                      <button onClick={() => changeLanguage('Русский')}>Русский</button>
                      <button onClick={() => changeLanguage('Кыргыз')}>Кыргыз</button>
                      <button onClick={() => changeLanguage('English')}>English</button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <button className="contact-button" onClick={() => navigateToAppclication(location.pathname)}>Связаться</button>
          <button className="burger-menu" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
