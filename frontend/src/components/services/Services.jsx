import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import servicesimg from '../../assets/Designer (33) 1.png';
import privatehouses from '../../assets/частныедома.png';
import bisinessimg from '../../assets/бизнес.png';
import additionalimg from '../../assets/допуслуги.png'
import './Services.css';

const Services = () => {
  return (
            <div className="ServicesCont">

              {/* //! КВАРТИРЫ  */}

       <div className="services-container">
      {/* 1.1 секция */}
      <div className="section-middle">
        <h1 className="services-title header-font">ОКАЗЫВАЕМ СЛЕДУЮЩИЕ УСЛУГИ</h1>

        <div className="gray-container">
          <img src={servicesimg} alt="Service" className="service-image" />
          <div className="center-text">
            <hr className="divider" />
            <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой техники. Выполним работы быстро и качественно, чтобы ваш дом всегда оставался комфортным и безопасным.</p>
          </div>
          <div className="right-text">
            <hr className="divider" />
            <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по сантехнике, электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с вами для уточнения всех деталей.</p>
          </div>
        </div>
          
          {/* 1.2 секция  */}
        <div className="services-section">
         <hr />
          <h2 className='header-font'>КВАРТИРЫ</h2>
         <hr />

         <div className="service-item">
           <div className="service-left">
            <h3 className='header-font'>РЕМОНТ БЫТОВОЙ ТЕХНИКИ</h3>
             <p className='header-font'>(001)</p>
          </div>
          <div className="service-center">
            <p className='header-font'>(качественно, быстро, надежно)</p>
         </div>
         <div className="service-right">+</div>
        </div>
        <hr className="horizontal-divider" />

        <div className="service-item ">
          <div className="service-left">
           <h3 className='header-font'>БЫТОВЫЕ УСЛУГИ</h3>
            <p className='header-font'>(002)</p>
         </div>
       <div className="service-center">
          <p className='header-font'>(качественно, быстро, надежно)</p>
      </div>
       <div className="service-right">+</div>
      </div>
         <hr className="horizontal-divider" />

      <div className="service-item">
        <div className="service-left">
          <h3 className='header-font'>САНТЕХНИКА</h3>
           <p className='header-font'>(003)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(качественно, быстро, надежно)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>ЭЛЕКТРОНИКА</h3>
      <p className='header-font'>(004)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(качественно, быстро, надежно)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>КЛИНИНГОВЫЕ УСЛУГИ</h3>
      <p className='header-font'>(005)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(качественно, быстро, надежно)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>ТАРИФЫ</h3>
      <p className='header-font'>(006)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(по разумным ценам, быстро и с гарантией)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />
</div>

      </div>

      {/* Контейнер для иконок соц сетей */}
      <div className="social-icons-container">
        <FaInstagram className="icon" />
        <FaWhatsapp className="icon" />
        <FaTelegram className="icon" />
      </div>

      {/* Вертикальные линии */}
      <div className="vertical-line left"></div>
      <div className="vertical-line right"></div>
    </div>


       {/* //! ЧАСТНЫЕ ДОМА  */}
      

    <div className="services-container">
      
      {/* 1.1 секция */}
      <div className="section-middle">
          
          {/* 1.2 секция  */}
        <div className="services-section">
          <h2 className='header-font'>ЧАСТНЫЕ ДОМА </h2>
         <hr />

         <div className="white-container">
          <img src={privatehouses} alt="Service" className="service-image" />
          <div className="center-text">
            <hr className="divider-white" />
            <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой техники. Выполним работы быстро и качественно, чтобы ваш дом всегда оставался комфортным и безопасным.</p>
          </div>
          <div className="right-text">
            <hr className="divider-white" />
            <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по сантехнике, электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с вами для уточнения всех деталей.</p>
          </div>
        </div>

         <div className="service-item">
           <div className="service-left">
            <h3 className='header-font'>Ремонт бытовой техники</h3>
             <p className='header-font'>(001)</p>
          </div>
          <div className="service-center">
            <p className='header-font'>(качественно, быстро, надежно)</p>
         </div>
         <div className="service-right">+</div>
        </div>
        <hr className="horizontal-divider" />

        <div className="service-item">
          <div className="service-left">
           <h3 className='header-font'>Установка сантехники</h3>
            <p className='header-font'>(002)</p>
         </div>
       <div className="service-center">
          <p className='header-font'>(монтаж и замена оборудования)</p>
      </div>
       <div className="service-right">+</div>
      </div>
         <hr className="horizontal-divider" />

      <div className="service-item">
        <div className="service-left">
          <h3 className='header-font'>Электромонтажные работы</h3>
           <p className='header-font'>(003)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(проводка, установка розеток и освещения)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Косметический ремонт</h3>
      <p className='header-font'>(004)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(обновление стен и потолков)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Услуги по уборке</h3>
      <p className='header-font'>(005)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(генеральная уборка помещений)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Установка дверей и окон</h3>
      <p className='header-font'>(006)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(профессиональный монтаж)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />
</div>

      </div>



      {/* Вертикальные линии */}
      <div className="vertical-line left"></div>
      <div className="vertical-line right"></div>
    </div>


        
       {/* //! БИЗНЕС */}

    <div className="services-container">
      
      {/* 1.1 секция */}
      <div className="section-middle">
       
          
          {/* 1.2 секция  */}
        <div className="services-section">
          <h2 className='header-font'>БИЗНЕС</h2>
         <hr />

         <div className="bisiness-container">
          <img src={bisinessimg} alt="Service" className="service-image" />
          <div className="center-text">
            <hr className="divider" />
            <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой техники. Выполним работы быстро и качественно, чтобы ваш дом всегда оставался комфортным и безопасным.</p>
          </div>
          <div className="right-text">
            <hr className="divider" />
            <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по сантехнике, электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с вами для уточнения всех деталей.</p>
          </div>
        </div>

         <div className="service-item">
           <div className="service-left">
            <h3 className='header-font'>Ремонт бытовой техники</h3>
             <p className='header-font'>(001)</p>
          </div>
          <div className="service-center">
            <p className='header-font'>(качественно, быстро, надежно)</p>
         </div>
         <div className="service-right">+</div>
        </div>
        <hr className="horizontal-divider" />

        <div className="service-item">
          <div className="service-left">
           <h3 className='header-font'>Установка сантехники</h3>
            <p className='header-font'>(002)</p>
         </div>
       <div className="service-center">
          <p className='header-font'>(монтаж и замена оборудования)</p>
      </div>
       <div className="service-right">+</div>
      </div>
         <hr className="horizontal-divider" />

      <div className="service-item">
        <div className="service-left">
          <h3 className='header-font'>Электромонтажные работы</h3>
           <p className='header-font'>(003)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(проводка, установка розеток и освещения)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Косметический ремонт</h3>
      <p className='header-font'>(004)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(обновление стен и потолков)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Услуги по уборке</h3>
      <p className='header-font'>(005)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(генеральная уборка помещений)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Установка дверей и окон</h3>
      <p className='header-font'>(006)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(профессиональный монтаж)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />
</div>

      </div>

      {/* Вертикальные линии */}
      <div className="vertical-line left"></div>
      <div className="vertical-line right"></div>
    </div>



        {/* //! ДОП.УСЛУГИ */}


    <div className="services-container">
      
      {/* 1.1 секция */}
      <div className="section-middle">
          
          {/* 1.2 секция  */}
        <div className="services-section">
          <h2 className='header-font'> ДОП.УСЛУГИ</h2>
         <hr />

         <div className="white-container">
          <img src={additionalimg} alt="Service" className="service-image" />
          <div className="center-text">
            <hr className="divider-white" />
            <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой техники. Выполним работы быстро и качественно, чтобы ваш дом всегда оставался комфортным и безопасным.</p>
          </div>
          <div className="right-text">
            <hr className="divider-white" />
            <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по сантехнике, электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с вами для уточнения всех деталей.</p>
          </div>
        </div>

         <div className="service-item">
           <div className="service-left">
            <h3 className='header-font'>Ремонт бытовой техники</h3>
             <p className='header-font'>(001)</p>
          </div>
          <div className="service-center">
            <p className='header-font'>(качественно, быстро, надежно)</p>
         </div>
         <div className="service-right">+</div>
        </div>
        <hr className="horizontal-divider" />

        <div className="service-item">
          <div className="service-left">
           <h3 className='header-font'>Установка сантехники</h3>
            <p className='header-font'>(002)</p>
         </div>
       <div className="service-center">
          <p className='header-font'>(монтаж и замена оборудования)</p>
      </div>
       <div className="service-right">+</div>
      </div>
         <hr className="horizontal-divider" />

      <div className="service-item">
        <div className="service-left">
          <h3 className='header-font'>Электромонтажные работы</h3>
           <p className='header-font'>(003)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(проводка, установка розеток и освещения)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Косметический ремонт</h3>
      <p className='header-font'>(004)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(обновление стен и потолков)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Услуги по уборке</h3>
      <p className='header-font'>(005)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(генеральная уборка помещений)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />

  <div className="service-item">
    <div className="service-left">
      <h3 className='header-font'>Установка дверей и окон</h3>
      <p className='header-font'>(006)</p>
    </div>
    <div className="service-center">
      <p className='header-font'>(профессиональный монтаж)</p>
    </div>
    <div className="service-right">+</div>
  </div>
  <hr className="horizontal-divider" />
</div>

      </div>

      {/* Вертикальные линии */}
      <div className="vertical-line left"></div>
      <div className="vertical-line right"></div>
    </div>

    
     {/*//! форма зявки */}
     <div className="serviceform-formcomt">
    <div className="serviceform-wrapper">
  <h2 className='header-font'>Оставить заявку</h2>

  <div className="serviceform-container">
    {/* Левая колонка с полями ввода */}
    <div className="serviceform-left">
      <input type="text" className="serviceform-input" placeholder="Имя*" />
      <input type="text" className="serviceform-input" placeholder="Номер телефона*" />
      <input type="email" className="serviceform-input" placeholder="Электронная почта*" />
    </div>

    {/* Правая колонка с полем сообщения */}
    <div className="serviceform-right">
      <textarea className="serviceform-textarea" rows="4" placeholder="Сообщение*"></textarea>
    </div>
  </div>

  <div className="serviceform-agreement">
    <input type="checkbox" id="aboutcompPrivacyPolicy" />
    <label htmlFor="aboutcompPrivacyPolicy">
      Я прочитал и согласен с 
      <a href="#" className="serviceform-policy-link">политикой конфиденциальности</a>
    </label>
  </div>

  <button className="serviceform-button">Отправить</button>
</div>

    </div>


            </div>
  );
};

export default Services;
