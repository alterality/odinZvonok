import React, {useEffect, useState} from 'react';
import Advantages from '../../assets/section right top.png';
import helpimgright from '../../assets/plumbing.png'
import blackcontimg from '../../assets/ремонт.png'
import rekvisitImage from '../../assets/сертификатодинзвонок.png'
import './AboutUsFiz.css';
import {useDispatch, useSelector} from "react-redux";
import {
  getAdvantages, getAssistance,
  getIndividualAdvantages,
  getIndividualEntities, getIndividualWorkStages,
  getOurServices,
  getWorkStages
} from "../../store/apiSlice";

const AboutUsFiz = () => {
  const [stages,setStages] = useState([])
  const [advantages, setAdvantages] = useState([])
  const [helps,setHelps] = useState([])
  const selectedLanguage = 'ru'
  const [servicesOur,setServicesOur] = useState([])
  const dispatch = useDispatch();
  const toMassive = (someObject) =>{
    return Object.keys(someObject)
        .filter(
            key =>
                key.startsWith("field") &&
                key.includes("_") && // Оставляем только ключи с языковым суффиксом
                key.endsWith(`_${selectedLanguage}`) // Учитываем только выбранный язык
        )
        .sort() // Сортируем для предсказуемого порядка
        .map(key => someObject[key])
  }
  const {individualEntities,workStages,ourServices, advantagesIvidual,assistance, workStagesIndividual} = useSelector(state => state.api);
  useEffect(() => {
    dispatch(getIndividualEntities())
    dispatch(getIndividualWorkStages())
    dispatch(getOurServices())
    dispatch(getIndividualAdvantages())
    dispatch(getAssistance())

  }, [dispatch]);
  useEffect(() => {
    console.log(advantagesIvidual)
  }, [advantagesIvidual]);
  useEffect(() => {
    setServicesOur(toMassive(ourServices))
  }, [ourServices]);
  useEffect(() => {
    setStages(toMassive(workStagesIndividual))
  }, [workStagesIndividual]);
  useEffect(() => {
    setHelps(toMassive(assistance))
  }, [assistance]);
  useEffect(() => {
    setAdvantages(toMassive(advantagesIvidual))
  }, [advantagesIvidual]);

  return (
    <div>
      {/* Первый контейнер */}
      <div className="advantages-container">
        <div className="content-wrapper">
          <div className="text-container">
            <h3 className="heading header-font" >{individualEntities.title}</h3>
            <p className="text">{individualEntities.description}</p>
          </div>
          <div className="image-container">
            <img src={Advantages} alt="Advantages" className="image" />
          </div>
        </div>
      </div>

      {/* Второй контейнер */}
      <div className="additional-container">
        <h3 className="additional-heading header-font">{ourServices.title}</h3>
        {servicesOur.map((service, index) => (
            <div key={index}>
              <p className="additional-text">{service}</p>
              <hr className="divider"/>
            </div>
        ))}
      </div>

      <div className="black-container">
        <h3 className="black-heading header-font">{advantagesIvidual.title}</h3>
        <div className="squares-container">
          {advantages.map((advantage,index)=> (
              <div className="square" key={index}>
                <p className="square-text header-font">{advantage}</p>
              </div>
          ))}
        </div>
      </div>

      {/* 3 Container */}
      <div className="gray-container">
        <div className="gray-content">
          <div className="gray-text">
            <h3 className="gray-heading header-font">{assistance.title}</h3>
            {helps.map((help, index) =>(
                <div key={index}>
                  <p className="gray-paragraph">{help}</p>
                  <hr className="gray-divider"/>
                </div>
            ))}
          </div>
          <div className="gray-image">
            <img src={helpimgright} alt="Service Illustration" className="gray-img" />
          </div>
        </div>
      </div>
      
      {/* 4 */}

      <div className="helpblack-main-content-container">
  <div className="helpblack-text-section-wrapper">
    <div className="helpblack-section-heading-title header-font">{workStagesIndividual.title}</div>
    {stages.map((stage, index) => (
        <div className="helpblack-text-item-container" key={index}>
          <p className="helpblack-text-block-content">{stage}</p>
          <div className="helpblack-text-item-number">0{index+1}</div>
          <hr className="helpblack-horizontal-separator-line"/>
        </div>
    ))}

  </div>

        <div class="helpblack-image-section-wrapper">
          <img src={blackcontimg} alt="Картинка" class="helpblack-image-container"/>
        </div>
      </div>


      {/* Новый контейнер с реквизитами */}
      <div className="rekvizit-container">
      <h3 className="rekvizit-heading header-font">Реквизиты</h3>

        <div className="rekvizit-content">
          {/* Картинка слева */}
          <div className="rekvizit-left-image">
            <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image" />
          </div>

          {/* Текст по центру */}
          <div className="rekvizit-text">
            <h5 className="rekvizit-subheading">Реквизиты ООО «Один Звонок»</h5>
            <div className="rekvizit-info-box">
              <p>ИП Айтматов Н.Н. 620131,</p>
              <p>Бишкек, ул. Ч.Айтматова 47а, 2 эт. к. № 3</p>
              <p>ИНН 665840178949 ОГРНИП 316965800190501</p>
              <p>ОКПО 0107604604</p>
              <p>р/счёт № 40802810900000111539</p>
              <p>К/С 30101810145250000974</p>
              <p>ОАО «Коммерческий банк КЫРГЫЗСТАН»</p>
              <p>в г. Бишкек БИК 044525974</p>
              <p>БИК 044525974</p>
            </div>
          </div>

          {/* Картинка справа */}
          <div className="rekvizit-right-image">
            <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image" />
          </div>
        </div>
      </div>

       


      <div className="AboutUsFiz-form-container">
  <h3 className="AboutUsFiz-form-heading header-font">Форма заявки</h3>
  <div className="AboutUsFiz-form-content">
    {/* Левый контейнер с текстом */}
    <div className="AboutUsFiz-form-left">
      <h4 id='right-headingob' className="AboutUsFiz-form-right-heading">Общая информация</h4>
      <p className="AboutUsFiz-form-left-subheading">
        Пожалуйста, заполните общую информацию о себе, чтобы мы могли связаться с вами и предложить оптимальные решения вашей задачи.
      </p>
      <div className="AboutUsFiz-form-left-space"></div>
    </div>
    {/* Правый контейнер с полями формы */}
    <div className="AboutUsFiz-form-right">
      <h4 className="AboutUsFiz-form-left-heading">
        Заполните форму <br /> чтобы мы могли связаться с вами, <br /> уточните детали <br /> и прибыть в удобное для вас время
      </h4>
      <div className="AboutUsFiz-form-inputs">
        <div className="AboutUsFiz-form-input">
          <input type="text" placeholder="Имя*" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <input type="text" placeholder="Укажите адрес или название района*" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <input type="tel" placeholder="Номер телефона*" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <input type="email" placeholder="Электронная почта* (если есть)" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <textarea placeholder="Опишите проблему или добавьте пожелания*" className="AboutUsFiz-textarea-field"></textarea>
        </div>
        <div className="AboutUsFiz-form-checkbox">
          <input type="checkbox" id="privacy-policy" className="AboutUsFiz-form-checkbox-input" />
          <label htmlFor="privacy-policy" className="AboutUsFiz-form-checkbox-label">
            Я прочитал и согласен с политикой конфиденциальности
          </label>
        </div>
        <button type="submit" className="AboutUsFiz-form-submit-button">Отправить заявку</button>
      </div>
    </div>
  </div>
</div>


      
    </div>
  );
};

export default AboutUsFiz;
