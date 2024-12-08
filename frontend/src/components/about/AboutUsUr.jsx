import React, {useEffect, useState} from 'react'
import AdvantagesUr from '../../assets/section right top (1).png';
import helpimgright from '../../assets/plumbing.png'
import blackcontimg from '../../assets/ремонт.png'
import rekvisitImage from '../../assets/сертификатодинзвонок.png'
import './AboutUsUr.css';
import {useDispatch, useSelector} from "react-redux";
import {getAdvantages, getAssistances, getLegalEntities, getServices, getWorkStages} from "../../store/apiSlice";

const AboutUsUr = () => {
  const dispatch = useDispatch();
  const [stages,setStages] = useState([])
  const [goods,setGoods] = useState([])
  const [whyUs,setWhyUs] = useState([])
  const selectedLanguage = 'ru'
  const [servicesForWhom, setServicesForWhom] = useState([])
  const {legalEntities,services,advantages, assistances,workStages} = useSelector(state => state.api)
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
  useEffect(() => {
    dispatch(getLegalEntities());
    dispatch(getServices())
    dispatch(getAdvantages())
    dispatch(getAssistances())
    dispatch(getWorkStages())
  }, [dispatch]);
  useEffect(() => {
    setServicesForWhom(Object.keys(services)
        .filter(key => key.startsWith("field") && key.includes("_image")) // Находим все ключи с изображениями
        .map(key => {
          const baseKey = key.replace("_image", ""); // Определяем базовый ключ (например, "field1")
          const textKey = `${baseKey}_text_${selectedLanguage}`; // Формируем ключ текста для выбранного языка
          return {
            image: services[key],
            text: services[textKey] || services[`${baseKey}_text`] // Берем текст для выбранного языка или общий текст
          };
        }))
  }, [services]);
  useEffect(() => {
    setWhyUs(toMassive(advantages))
  }, [advantages]);
  useEffect(() => {
    setGoods(toMassive(assistances))
  }, [assistances]);
  useEffect(() => {
    setStages(toMassive(workStages))
  }, [workStages]);
  return (
    <div>
    {/* Первый контейнер */}
    <div className="advantages-container-ur">
      <div className="content-wrapper-ur">
        <div className="text-container-ur">
          <h3 className="heading-ur">{legalEntities.title}</h3>
          <p className="text-ur">{legalEntities.description}</p>
        </div>
        <div className="image-container-ur">
          <img src={AdvantagesUr} alt="Advantages" className="image-ur" />
        </div>
      </div>
    </div>

    {/* Второй контейнер */}
    <div class="services-container">
  <div class="services-text">
    <h2>{services.title}</h2>
  </div>
  <div class="services-images">
      {servicesForWhom.map((service ,index) => (
          <div key={index}>
            <img src={service.image} alt="Service 1"/>
            <p>{service.text}</p>
          </div>
      ))}
  </div>
</div>


<div className="black-container">
        <h3 className="black-heading">{advantages.title}</h3>
        <div className="squares-container">
          {whyUs.map((item, index) => (
              <div className="square" key={index}>
                <p className="square-text">{item}</p>
              </div>
          ))}
        </div>
</div>


      {/* New Gray Container */}
      <div className="gray-container-ur">
        <div className="gray-content-ur">
          <div className="gray-text-ur">
          <h3 className="gray-heading-ur">{assistances.title}</h3>
            {goods.map((good, index) => (
                <div key={index}>
                  <p className="gray-paragraph-ur" >{good}</p>
                  <hr className="gray-divider-ur"/>
                </div>
            ))}

          </div>
          <div className="gray-image-ur">
            <img src={helpimgright} alt="Service Illustration" className="gray-img-ur" />
        </div>
      </div>
    </div>

    <div class="helpblack-main-content-container-ur">
<div class="helpblack-text-section-wrapper-ur">
  <div class="helpblack-section-heading-title-ur">{workStages.title}</div>
  {stages.map((stage,index)=> (
      <div className="helpblack-text-item-container-ur" key={index}>
        <p className="helpblack-text-block-content-ur">{stage}</p>
        <div className="helpblack-text-item-number-ur">0{index+1}</div>
        <hr className="helpblack-horizontal-separator-line-ur"/>
      </div>
  ))}
</div>

      <div class="helpblack-image-section-wrapper-ur">
        <img src={blackcontimg} alt="Картинка" class="helpblack-image-container-ur"/>
      </div>
    </div>


      {/* Новый контейнер с реквизитами */}
      <div className="rekvizit-container-ur">
        <h3 className="rekvizit-heading-ur">Реквизиты</h3>

        <div className="rekvizit-content-ur">
        {/* Картинка слева */}
        <div className="rekvizit-left-image-ur">
          <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image-ur" />
        </div>

        {/* Текст по центру */}
        <div className="rekvizit-text-ur">
          <h5 className="rekvizit-subheading-ur">Реквизиты ООО «Один Звонок»</h5>
          <div className="rekvizit-info-box-ur">
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
        <div className="rekvizit-right-image-ur">
          <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image-ur" />
        </div>
      </div>
    </div>

     


    <div className="AboutUsFiz-form-container-ur">
<h3 className="AboutUsFiz-form-heading-ur">Форма заявки</h3>
<div className="AboutUsFiz-form-content-ur">
  {/* Левый контейнер с текстом */}
  <div className="AboutUsFiz-form-left-ur">
    <h4 id='right-headingob' className="AboutUsFiz-form-right-heading-ur">Общая информация</h4>
    <p className="AboutUsFiz-form-left-subheading-ur">
      Пожалуйста, заполните общую информацию о себе, чтобы мы могли связаться с вами и предложить оптимальные решения вашей задачи.
    </p>
    <div className="AboutUsFiz-form-left-space-ur"></div>
  </div>
  {/* Правый контейнер с полями формы */}
  <div className="AboutUsFiz-form-right-ur">
    <h4 className="AboutUsFiz-form-left-heading-ur">
      Заполните форму <br />мы могли подготовить предложение и отправить , <br /> его вам в течении нескольких дней.
    </h4>
    <div className="AboutUsFiz-form-inputs-ur">
      <div className="AboutUsFiz-form-input-ur">
        <input type="text" placeholder="Имя*" className="AboutUsFiz-input-field" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <input type="text" placeholder="Укажите адрес или название района*" className="AboutUsFiz-input-field-ur" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <input type="tel" placeholder="Номер телефона*" className="AboutUsFiz-input-field-ur" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <input type="email" placeholder="Электронная почта* (если есть)" className="AboutUsFiz-input-field-ur" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <textarea placeholder="Опишите проблему или добавьте пожелания*" className="AboutUsFiz-textarea-field-ur"></textarea>
      </div>
      <div className="AboutUsFiz-form-checkbox-ur">
        <input type="checkbox" id="privacy-policy" className="AboutUsFiz-form-checkbox-input-ur" />
        <label htmlFor="privacy-policy" className="AboutUsFiz-form-checkbox-label-ur">
          Я прочитал и согласен с политикой конфиденциальности
        </label>
      </div>
      <button type="submit" className="AboutUsFiz-form-submit-button-ur">Отправить заявку</button>
    </div>
  </div>
</div>
</div>


    
  </div>
  )
}

export default AboutUsUr
