import React, {useState} from 'react';
import {FaInstagram, FaWhatsapp, FaTelegram} from 'react-icons/fa';
import servicesimg from '../../assets/Designer (33) 1.png';
import privatehouses from '../../assets/частныедома.png';
import bisinessimg from '../../assets/бизнес.png';
import additionalimg from '../../assets/допуслуги.png'
import servicesPNG from '../../assets/servicesPNG.png'
import './Services.css';
import {animate} from "motion/react";
import addimg from "../../assets/Group 5.png";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import {useNavigate} from "react-router-dom";
const ExpandableBlock = ({ title,number, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef(null);
    const blockRef = React.useRef(null);
    const toggleOpen = () => {
        setIsOpen((prev) => !prev);

        // Анимация высоты
        if (!isOpen) {
            const height = contentRef.current.scrollHeight;
            animate(contentRef.current, { height: [`0px`, `${height}px`] }, { duration: 0.1 });
            animate(blockRef.current, { borderRadius: ["8px 8px 8px 8px", "8px 8px 0 0"] }, { duration: 0.5 });
        } else {
            animate(contentRef.current, { height: [`${contentRef.current.offsetHeight}px`, `0px`] }, { duration: 0.1 });
            animate(blockRef.current, { borderRadius: ["8px 8px 0 0", "8px 8px 8px 8px"] }, { duration: 0.5 });
        }
    };

    return (
        <div
            ref={blockRef}
            style={{
                borderRadius: "8px",
                marginBottom: "1rem",
                overflow: "hidden",
            }}
        >
            <div
                onClick={toggleOpen}
                style={{
                    cursor: "pointer",
                    backgroundColor: "#1D1D1B",
                    fontWeight: "bold",

                }}
                className="service-item"
            >
                <div className="service-left">
                    <div className="overhaul-service-name">{title}</div>
                    <div className="overhaul-service-number">{number}</div>
                </div>
                <div className="overhaul-add-service" style={{transform: isOpen ? 'rotate(45deg)': "none" , transition: 'transform 0.5s ease'}}><img src={addimg} alt=""/></div>
            </div>
            <div
                ref={contentRef}
                style={{
                    height: "0",
                    borderRadius: '0 0 8px 8px ',
                    overflow: "hidden",
                    backgroundColor: "#1D1D1B",
                    transition: "height 0.5s ease",
                }}

            >
                <div
                    style={{padding: "1rem"}}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
const SSS = ({title, img}) =>{
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='transport-service-content-item'>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0}}
                        className='transport-service-appear-block'
                        key="box"
                    >
                        <img src={img} alt={title}/>
                        <p>{title}</p>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <motion.button
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                whileHover={{scale: 1.1}}
                className="transport-service-content-title"
            >
                {title}
            </motion.button>
        </div>
    )
}


const TransportSlide =({tabs}) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id)
    const container = {
        width: "100%",
        height: "100%",
        maxHeight: "1000px",
        borderRadius: 10,
        background: "#1D1D1B",
        overflow: "hidden",
        boxShadow:
            "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
        display: "flex",
        flexDirection: "column",
    }
    const icon= {
        padding: '25px'
    }
    return (
        <div style={container}>
            <nav  className="transport-service-nav">
                <ul  className='transport-service-tabs'>
                    {tabs.map((item) => (
                        <motion.li
                            key={item.id}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#1D1D1B" : "#1D1D1B",
                            }}

                            className = "transport-service-tab"
                            style={item.id === selectedTab && {color : "white", fontSize: '22px'}}
                            onClick={() => setSelectedTab(item.id)}
                        >
                            <p>{`${item.title}`}</p>
                            {item.id === selectedTab ? (
                                <motion.div
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main className='transport-service-tab-content'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ opacity: 0, y: 20 }}  // Starting state: hidden and slightly below
                        animate={{ opacity: 1, y: 0 }}   // Final state: fully visible and in place
                        exit={{ opacity: 0, y: -20 }}    // Exit state: hidden and slightly above
                        transition={{ duration: 0.3 }}   //
                        className='tab-content'
                    >
                        <img
                            className='tab-content-image'
                            src={selectedTab ? tabs[selectedTab-1].img : ''}
                            alt="Tab content"
                            />
                        <p>
                            {selectedTab ? tabs[selectedTab-1].description : ""}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}

const Services = () => {
    const navigate = useNavigate()
    const transports = [
        {
            id: 1, title: 'Минивен', img : 'https://www.mercedesmagazin.ru/img/nblock/143-2/mercedes-W639.jpg',

            description: 'С точки зpения банальной эpудиции каждый индивидуум, кpитически мотивиpующий абстpакцию, не может игноpиpовать кpитеpии утопического субьективизма, концептуально интеpпpетиpуя общепpинятые дефанизиpующие поляpизатоpы, поэтому консенсус, достигнутый диалектической матеpиальной классификацией всеобщих мотиваций в паpадогматических связях пpедикатов, pешает пpоблему усовеpшенствования фоpмиpующих геотpансплантационных квазипузлистатов всех кинетически коpеллиpующих аспектов.',

        },
        {
            id: 2, title: 'Портер', img : 'https://kimuracars.com/img/autocatalog_korea/cars/17/hyundai_porter_2_3769164.jpg', description: 'Небольшие, короткие, мини, легкие тексты для чтения со школьниками. Детские тексты, тексты с простыми словами, любые тексты для детей.',
        },
        {
            id: 3, title: 'Спринтер', img : 'https://a.d-cd.net/acfc69es-960.jpg', description: '',
        },
        {
            id: 4, title: 'Фуры', img : 'https://static.tildacdn.com/tild6232-6661-4339-a366-653430386266/a0fe0e60a2b351cb9f89.jpg', description: '',
        }
    ]
    return (
        <div className="ServicesCont">
            <div className='header-block'><h1 className="services-title header-font">ОКАЗЫВАЕМ СЛЕДУЮЩИЕ УСЛУГИ</h1>
            </div>
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
                            <div className="tarif-plan-advantages">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
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
                            <div className="tarif-plan-advantages">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
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
                            <div className="tarif-plan-advantages">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
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
                            <div className="tarif-plan-advantages">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
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
                        <div className='add-services-list'>
                            <ExpandableBlock title="Альпинисты" number='001'>
                                <div className="service-item-content">
                                    <div className='service-item-content-section'>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ExpandableBlock>
                            <ExpandableBlock title="Клининг" number='002'>

                            </ExpandableBlock>
                            {/*<ExpandableBlock title="Грузоперевозка" number='003'>*/}
                            {/*    <div className="transport-service-content">*/}
                            {/*        <SSS title="Минивен"/>*/}
                            {/*        <SSS title="Минивен"/>*/}
                            {/*        <SSS title="Минивен"/>*/}
                            {/*        <SSS title="Минивен"/>*/}
                            {/*        <SSS title="Минивен"/>*/}
                            {/*    </div>*/}
                            {/*</ExpandableBlock>*/}
                            <ExpandableBlock title="Грузоперевозка" number="003">
                                <TransportSlide tabs={transports}/>
                            </ExpandableBlock>
                            <ExpandableBlock title="Мелкосрочные работы" number="004">
                                <div className="service-item-content">
                                    <div className='service-item-content-section'>
                                        <h3>Сантехника</h3>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>05</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>06</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Электрика</h3>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Двери и окна</h3>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Настенные работы</h3>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Напольные покрытия</h3>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Бытовая техника</h3>
                                        <div className="content-section-list">
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>01</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>02</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>03</p>
                                            </div>
                                            <div className="content-section-list-element">
                                                <p>Элемент</p>
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ExpandableBlock>
                            <ExpandableBlock title="Капитальные работы" number="005">
                                <div className="capital-works-title">
                                    <p>
                                        «Предоставляем услуги капитального ремонта разного профиля. Полный перечень услуг можете посмотреть в разделе Капитыльный ремонт»
                                    </p>
                                </div>
                                <button className="capital-works-btn" onClick={()=> navigate("/capremont")}>
                                    Перейти на страницу
                                </button>
                            </ExpandableBlock>
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

                    <button className="serviceform-button">Отправить</button>
                </div>

            </div>


        </div>
    );
};

export default Services;
