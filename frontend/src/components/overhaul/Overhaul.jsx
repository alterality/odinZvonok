import React from 'react'
import Advantages from '../../assets/c7ad060e4599347affa1e8cef879597f.png'
import addimg from '../../assets/Group 5.png'
import './Overhaul.css'

const Overhaul = () => {
    const services = [
        { name: "РАБОТА ПО ПОЛУ", number: "001" },
        { name: "РАБОТЫ ПО СТЕНАМ", number: "002" },
        { name: "ПЛИТОЧНЫЕ РАБОТЫ", number: "003" },
        { name: "САНТЕХНИЧЕСКИЕ РАБОТЫ", number: "004" },
        { name: "ДЕМОНТАЖНЫЕ РАБОТЫ", number: "005" },
        { name: "ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ", number: "006" }
      ];
  return (
    <div className='overhaul-container'>
       <div className="overhaul-textcontainer">
        <div className="overhaul-content-wrapper">
          <div className="overhaul-text-container">
            <h3 className="overhaul-heading">КАПИТАЛЬНЫЙ РЕМОНТ — НОВЫЙ УРОВЕНЬ ВАШЕГО КОМФОРТА</h3>
            <p className="text">Капитальный ремонт — это возможность создать пространство, которое полностью соответствует вашим потребностям и стилю. Мы помогаем воплотить в жизнь самые смелые идеи, обновляя не только внешний вид, но и функциональность вашего помещения.</p>
          </div>
          <div className="overhaul-image-container">
            <img src={Advantages} alt="Advantages" className="overhaul-image" />
          </div>
        </div>
      </div>

      <div className="overhaul-services-container">
      <h2 className="overhaul-services-header">Список услуг</h2>
      <div className="overhaul-services-list">
        {services.map((service, index) => (
          <div key={index} className="overhaul-service-item">
            <div className="overhaul-service-info">
              <div className="overhaul-service-name">{service.name}</div>
              <div className="overhaul-service-number">{service.number}</div>
            </div>
            <div className="overhaul-service-description">(качественно, быстро, надежно)</div>
            <div className="overhaul-add-service"><img src={addimg} alt="" /></div>
          </div>
        ))}
      </div>
    </div>

    <div className="overhaul-form-formcomt">
    <div className="overhaul-form-wrapper">
  <h2>Остались вопросы? Напишите нам</h2>

  <div className="overhaul-form-container">
    {/* Левая колонка с полями ввода */}
    <div className="overhaul-form-left">
      <input type="text" className="overhaul-form-input" placeholder="Имя*" />
      <input type="text" className="overhaul-form-input" placeholder="Номер телефона*" />
      <input type="email" className="overhaul-form-input" placeholder="Электронная почта*" />
    </div>

    {/* Правая колонка с полем сообщения */}
    <div className="overhaul-form-right">
      <textarea className="overhaul-form-textarea" rows="4" placeholder="Сообщение*"></textarea>
    </div>
  </div>

  <div className="overhaul-form-agreement">
    <input type="checkbox"  />
    <label htmlFor="overhaulPrivacyPolicy">
      Я прочитал и согласен с 
      <a href="#" className="overhaul-form-policy-link">политикой конфиденциальности</a>
    </label>
  </div>

  <button className="overhaul-form-button">Отправить</button>
</div>

    </div>

    </div>
  )
}

export default Overhaul
