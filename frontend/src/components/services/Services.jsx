import React from 'react';
import {FaInstagram, FaWhatsapp, FaTelegram} from 'react-icons/fa';
import servicesimg from '../../assets/Designer (33) 1.png';
import privatehouses from '../../assets/частныедома.png';
import bisinessimg from '../../assets/бизнес.png';
import additionalimg from '../../assets/допуслуги.png'
import servicesPNG from '../../assets/servicesPNG.png'
import './Services.css';

const Services = () => {
    return (
        <div className="ServicesCont">
            <div className='header-block'><h1 className="services-title header-font">ОКАЗЫВАЕМ СЛЕДУЮЩИЕ УСЛУГИ</h1></div>
            {/* //! КВАРТИРЫ  */}
            <div className="services-container apartment-container">
                <div className="section-middle">
                    <div className='container-info'>
                        <img src={servicesimg} alt="Service" className="service-image"/>
                        <div className='infoBlock'>
                            <h2 className='header-font'>КВАРТИРЫ</h2>
                            <div className="info-container">
                                <div className="center-text">
                                    <hr className="divider"/>
                                    <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой техники.
                                        Выполним работы быстро и качественно, чтобы ваш дом всегда оставался комфортным
                                        и
                                        безопасным.</p>
                                </div>
                                <div className="right-text">
                                    <hr className="divider"/>
                                    <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по
                                        сантехнике,
                                        электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с вами
                                        для
                                        уточнения всех деталей.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1.2 секция  */}
                    <div className="tarifs-section">
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «СТАНДАРТ»</h2>
                            <div>
                                <div className='tarif-plan-item'>
                                    <p>Сантехника</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Электрика</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Плотницкие работы</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>

                            </div>
                            <ul>
                            <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h2>Стоимость тарифа 1500 сом в месяц</h2>
                        </div>
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «ПРЕМИУМ»</h2>
                            <div>
                                <div className='tarif-plan-item'>
                                    <p>Сантехника</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Электрика</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Плотницкие работы</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Ремонт бытовой техники</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Установка межкомнатных дверей и замена замков </p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                            </div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h2>Стоимость тарифа 2500 сом в месяц</h2>
                        </div>
                    </div>
                </div>
            </div>


            {/* //! ЧАСТНЫЕ ДОМА  */}


            <div className="services-container house-container">

                {/* 1.1 секция */}
                <div className="section-middle">

                    {/* 1.2 секция  */}
                    <div className="container-info">
                        <img src={privatehouses} alt="Service" className="service-image"/>
                        <div className='infoBlock'>
                            <h2 className='header-font house-header'>ЧАСТНЫЕ ДОМА </h2>
                            <div className="info-container blackText">
                                <div className="center-text">
                                    <hr className="divider-white"/>
                                    <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой техники.
                                        Выполним
                                        работы быстро и качественно, чтобы ваш дом всегда оставался комфортным и
                                        безопасным.</p>
                                </div>
                                <div className="right-text">
                                    <hr className="divider-white"/>
                                    <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по
                                        сантехнике,
                                        электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с вами
                                        для
                                        уточнения всех деталей.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarifs-section">
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «СТАНДАРТ»</h2>
                            <div>
                                <div className='tarif-plan-item'>
                                    <p>Сантехника</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Электрика</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Плотницкие работы</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                            </div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h2>Стоимость тарифа 1500 сом в месяц</h2>
                        </div>
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «ПРЕМИУМ»</h2>
                            <div>
                                <div className='tarif-plan-item'>
                                    <p>Сантехника</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Электрика</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Плотницкие работы</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Ремонт бытовой техники</p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Установка межкомнатных дверей и замена замков </p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                                <div className='tarif-plan-item'>
                                    <p>Установка межкомнатных дверей и замена замков </p>
                                    <img src={servicesPNG} alt="include"/>
                                </div>
                            </div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h2>Стоимость тарифа 2500 сом в месяц</h2>
                        </div>
                    </div>
                </div>
            </div>


            {/* //! БИЗНЕС */}

            <div className="services-container business-container">

                {/* 1.1 секция */}
                <div className="section-middle">


                    {/* 1.2 секция  */}
                    <div className="services-section">


                        <div className="container-info">
                            <img src={bisinessimg} alt="Service" className="service-image"/>
                            <div className="infoBlock">
                                <h2 className='header-font business-header'>БИЗНЕС</h2>
                                <div className="info-container">

                                    <div className="center-text">
                                        <hr className="divider"/>
                                        <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой
                                            техники.
                                            Выполним работы быстро и качественно, чтобы ваш дом всегда оставался
                                            комфортным
                                            и безопасным.</p>
                                    </div>
                                    <div className="right-text">
                                        <hr className="divider"/>
                                        <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по
                                            сантехнике,
                                            электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с
                                            вами
                                            для
                                            уточнения всех деталей.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='services-business-form'>
                            <h1 className='services-business-form-header'>ФОРМА ЗАЯВКИ</h1>
                            <div>
                                <h1 className="services-business-form-underheader">
                                    Заполните заявку,чтобы мы могли подготовить предложение и отправить его вам в
                                    течении нескольких дней.
                                </h1>
                            </div>
                            <div className='services-business-form-mainInfo'>
                                <div className='services-business-form-leftBlock'>
                                    <h3>
                                        Общая информация.
                                    </h3>
                                </div>
                                <div className='services-business-form-mainInfo-rightBlock'>
                                    <p>
                                        Пожалуйста, обязательно заполните общую информацию о вас и о вашей компании,
                                        чтобы мы могли связаться с вами и выслать наше предложение.
                                    </p>
                                    <div className="services-business-form-inputs">
                                        <input type="text" className="services-business-form-input"
                                               placeholder="Название компании*"/>
                                        <input type="text" className="services-business-form-input"
                                               placeholder="Тип компании (общепит, офис, барбершоп, и т. д.)*"/>
                                        <input type="text" className="services-business-form-input"
                                               placeholder="Контактное лицо*"/>
                                        <input className="services-business-form-input" type="tel"
                                               placeholder="Номер телефона*"/>
                                        <input className="services-business-form-input" type="text"
                                               placeholder="Сайт (если есть)"/>
                                    </div>
                                </div>
                            </div>
                            <div className="services-business-form-application">
                                <div className="services-business-form-leftBlock">
                                    <h3>Вас интересует.</h3>
                                </div>
                                <div className='services-business-form-application-rightBlock'>
                                    <div className="services-business-form-inputs">
                                    <textarea className="services-business-form-textarea" rows="8"
                                              placeholder="Сообщение*"></textarea>
                                        <div className="serviceform-agreement">
                                            <input type="checkbox" id="aboutcompPrivacyPolicy"/>
                                            <label htmlFor="aboutcompPrivacyPolicy">
                                                Я прочитал и согласен с
                                                <a href="#" className="serviceform-policy-link">политикой
                                                    конфиденциальности</a>
                                            </label>
                                        </div>
                                        <button className="services-business-form-button">Отправить</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Вертикальные линии */}

            </div>


            {/* //! ДОП.УСЛУГИ */}


            <div className="services-container add-services-container">

                {/* 1.1 секция */}
                <div className="section-middle">

                    {/* 1.2 секция  */}
                    <div className="services-section">
                        <div className='container-info'>
                            <img src={additionalimg} alt="Service" className="service-image"/>
                            <div className='infoBlock'>
                                <h2 className='header-font add-services-header'> ДОП.УСЛУГИ</h2>

                                <div className="info-container blackText">

                                    <div className="center-text">
                                        <hr className="divider-white"/>
                                        <p>Надёжные мастера для вашего дома: сантехника, электрика и ремонт бытовой
                                            техники.
                                            Выполним работы быстро и качественно, чтобы ваш дом всегда оставался
                                            комфортным
                                            и
                                            безопасным.</p>
                                    </div>
                                    <div className="right-text">
                                        <hr className="divider-white"/>
                                        <p>От мелкого ремонта до комплексных услуг: мы решим любые бытовые задачи по
                                            сантехнике,
                                            электрике и ремонту техники. Оставьте заявку, и наши специалисты свяжутся с
                                            вами
                                            для
                                            уточнения всех деталей.</p>
                                    </div>
                                </div>
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
                    </div>

                </div>
            </div>


            {/*//! форма зявки */}
            <div className="serviceform-formcomt">
                <div className="serviceform-wrapper">
                    <h2 className='header-font'>Оставить заявку</h2>

                    <div className="serviceform-container">
                        {/* Левая колонка с полями ввода */}
                        <div className="serviceform-left">
                            <input type="text" className="serviceform-input" placeholder="Имя*"/>
                            <input type="text" className="serviceform-input" placeholder="Номер телефона*"/>
                            <input type="email" className="serviceform-input" placeholder="Электронная почта*"/>
                        </div>

                        {/* Правая колонка с полем сообщения */}
                        <div className="serviceform-right">
                            <textarea className="serviceform-textarea" rows="4" placeholder="Сообщение*"></textarea>
                        </div>
                    </div>

                    <div className="serviceform-agreement">
                        <input type="checkbox" id="aboutcompPrivacyPolicy"/>
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
