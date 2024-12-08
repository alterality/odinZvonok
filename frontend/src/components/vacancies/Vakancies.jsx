import React, {useEffect, useState} from 'react';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import vksimg1 from '../../assets/location bishkek icon.png';
import vksimg2 from '../../assets/location bishkek icon (1).png';
import vksimg3 from '../../assets/draw an icon of professionalism on a vector.png';
import vksimg4 from '../../assets/location bishkek icon (2).png';
import './Vakancies.css';
import {useDispatch, useSelector} from "react-redux";
import {getDetails, getPartnershipProgram, getVacancies} from "../../store/apiSlice";

const Vakancies = () => {
  const [section1, setSection1] = useState([])
  const [section2, setSection2] = useState([])
  const selectedLanguage = 'ru'
  const [visibleJobs, setVisibleJobs] = useState(6);
  const toMassive = (someObject, sectionNumber) =>{
    return Object.keys(someObject)
        .filter(
            key =>
                key.startsWith(`section${sectionNumber}_field`) &&
                key.includes("_") && // Оставляем только ключи с языковым суффиксом
                key.endsWith(`_${selectedLanguage}`) // Учитываем только выбранный язык
        )
        .sort() // Сортируем для предсказуемого порядка
        .map(key => someObject[key])
  }

  const loadMoreJobs = () => {
    setVisibleJobs((prev) => prev + 12);
  };

  const dispatch = useDispatch();
  const {partnershipProgram,details,vacancies} = useSelector(state => state.api);
  useEffect(() => {
    dispatch(getPartnershipProgram())
    dispatch(getDetails())
    dispatch(getVacancies())
  }, [dispatch]);
  useEffect(() => {
    setSection1(toMassive(details,1))
    setSection2(toMassive(details,2))
  }, [details]);
  return (
    <div>
      <div className="vakancies-page">
  <div className="overlay"></div>

  <div className="vakancies-vertical-line line2"></div>
  <div className="vakancies-vertical-line line3"></div>

  <div className="vakancies-horizontal-line line1"></div>
  <div className="vakancies-horizontal-line line2"></div>
  <div className="vakancies-horizontal-line line3"></div>



  <div className="vakancies-bottom-section">
    <h6 className="guarantee-title">ГАРАНТИРУЕМ</h6>
    <div className="vakancies-rectangles">
      <div className="vakancies-rectangle">
        <h6>Быстрый ремонт</h6>
        <div className="rectangle-content">
          <img src={vksimg1} alt="" className="rectangle-icon" />
          <p>Обслуживание и ремонт техники в кратчайшие сроки.</p>
        </div>
      </div>
      <div className="vakancies-rectangle">
        <h6>Питание</h6>
        <div className="rectangle-content">
          <img src={vksimg2} alt="" className="rectangle-icon" />
          <p>Комплексные обеды и питание для сотрудников.</p>
        </div>
      </div>
      <div className="vakancies-rectangle">
        <h6>Настройка оборудования</h6>
        <div className="rectangle-content">
          <img src={vksimg3} alt="" className="rectangle-icon" />
          <p>Настройка и обслуживание оборудования любого типа.</p>
        </div>
      </div>
      <div className="vakancies-rectangle">
        <h6>Контроль качества</h6>
        <div className="rectangle-content">
          <img src={vksimg4} alt="" className="rectangle-icon" />
          <p>Гарантия на все виды предоставляемых услуг.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="vakancies-center-square">
    <div className="invite-rectangle">
      <p className='invite-rectangleP'>
        {partnershipProgram.description}
      </p>
    </div>
  </div>

  <div className="icon-container">
    <FaInstagram className="social-icon" />
    <FaWhatsapp className="social-icon" />
    <FaTelegramPlane className="social-icon" />
  </div>

  <div className="vakancies-partner-program">
    <h2>ПАРТНЕРСКАЯ<br/> ПРОГРАММА</h2>
  </div>
</div>

      <div className="vakancies-open-jobs">
        <h2 className="vakancies-section-title">ОТКРЫТЫЕ ВАКАНСИИ В НАШЕЙ КОМПАНИИ</h2>
        <div className="vakancies-job-list">
          {vacancies.slice(0, visibleJobs).map((vacancy) => (
              <div key={vacancy.id} className="vakancies-job-card">
                <p style={{color:"gray", marginBottom:"15px"}}>{vacancy.specified_date}</p>
                <p className="vakancies-job-date">{vacancy.date}</p>
                <h5 className="vakancies-job-title">{vacancy.title}</h5>
                <p className="vakancies-job-description">{vacancy.description}</p>

              </div>
          ))}
        </div>
        {visibleJobs < vacancies.length && (
          <button className="vakancies-load-more" onClick={loadMoreJobs}>
            Загрузить ещё
          </button>
        )}
      </div>


      <div className="partnership-main">
  <h2 className="partnership-header">
    ПАРТНЕРСКАЯ ПРОГРАММА ПО УСЛУГАМ <br /> САНТЕХНИКИ, ЭЛЕКТРИКИ И РЕМОНТА <br /> БЫТОВОЙ ТЕХНИКИ
  </h2>

  <div className="partnership-content">
    <div className="vakancies-tables-container">
      <div className="vakancies-table">
        <h4>{details.section1_title}</h4>
        {section1.map((item, index) => (
            <div className="vakancies-table-row" key={index}>
              <span>{item}</span>
              <span className="vakancies-step-number">0{index+1}</span>
            </div>
        ))}
      </div>

      <div className="vakancies-table">
        <h4>{details.section2_title}</h4>
        {section2.map((item,index)=> (
            <div className="vakancies-table-row" key={index}>
              <span>{item}</span>
              <span className="vakancies-step-number">0{index+1}</span>
            </div>
        ))}
      </div>
    </div>

    <div className="vakancies-form-container">
      <div className="vakancies-right-text-form-container">
        <h2>Присоединиться к программе</h2>
        <p>Напишите нам для получения уникального промокода или ссылки.</p>
      </div>

      <div className="vakancies-form">
        <div className="vakancies-form-left">
          <input type="text" className="vakancies-input-field" placeholder="Имя*" />
          <input type="text" className="vakancies-input-field" placeholder="Номер телефона*" />
          <input type="email" className="vakancies-input-field" placeholder="Электронная почта*" />
        </div>

        <div className="vakancies-form-right">
          <textarea className="vakancies-textarea-field" placeholder="Сообщение*"></textarea>
        </div>
      </div>

      <div className="vakancies-agreement">
        <input type="checkbox" id="privacyPolicy" />
        <label htmlFor="privacyPolicy">
          Я прочитал и согласен с
          <a href="#" className="vakancies-policy-link">политикой конфиденциальности</a>
        </label>
      </div>

      <button className="vakancies-submit-button">Отправить</button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Vakancies;
