import React, {useEffect, useState} from 'react';
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
import {AnimatePresence} from "motion/react"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    getAdditionalServicesInformation,
    getApartmentServices,
    getBusinessServices, getCargoTransportation, getCleaning, getClimbers,
    getHouseServices, getMinorRepairs, postBusinessApplication, resetIsLoaded
} from "../../store/apiSlice";

const ExpandableBlock = ({title, number, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef(null);
    const blockRef = React.useRef(null);
    const toggleOpen = () => {
        setIsOpen((prev) => !prev);

        // Анимация высоты
        if (!isOpen) {
            const height = contentRef.current.scrollHeight;
            animate(contentRef.current, {height: [`0px`, `${height}px`]}, {duration: 0.1});
            animate(blockRef.current, {borderRadius: ["8px 8px 8px 8px", "8px 8px 0 0"]}, {duration: 0.5});
        } else {
            animate(contentRef.current, {height: [`${contentRef.current.offsetHeight}px`, `0px`]}, {duration: 0.1});
            animate(blockRef.current, {borderRadius: ["8px 8px 0 0", "8px 8px 8px 8px"]}, {duration: 0.5});
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
                <div className="overhaul-add-service"
                     style={{transform: isOpen ? 'rotate(45deg)' : "none", transition: 'transform 0.5s ease'}}><img
                    src={addimg} alt=""/></div>
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


const TransportSlide = ({tabs}) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id)
    const container = {
        width: "100%",
        height: "120%",
        maxHeight: "1000px",
        borderRadius: 10,
        background: "#1D1D1B",
        overflow: "hidden",
        boxShadow:
            "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
        display: "flex",
        flexDirection: "column",
    }
    const icon = {
        padding: '25px'
    }
    return (
        <div style={container}>
            <nav className="transport-service-nav">
                <ul className='transport-service-tabs'>
                    {tabs.map((item) => (
                        <motion.li
                            key={item.id}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#1D1D1B" : "#1D1D1B",
                            }}

                            className="transport-service-tab"
                            style={item.id === selectedTab && {color: "white", fontSize: '22px'}}
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
                        initial={{opacity: 0, y: 20}}  // Starting state: hidden and slightly below
                        animate={{opacity: 1, y: 0}}   // Final state: fully visible and in place
                        exit={{opacity: 0, y: -20}}    // Exit state: hidden and slightly above
                        transition={{duration: 0.3}}   //
                        className='tab-content'
                    >
                        <img
                            className='tab-content-image'
                            src={selectedTab ? tabs[selectedTab - 1].img : ''}
                            alt="Tab content"
                        />
                        <p>
                            {selectedTab ? tabs[selectedTab - 1].description : ""}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}

const Services = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [businessApplication, setBusinessApplication] = useState({
        company_name: '',
        company_type: '',
        contact_person: '',
        phone_number: '',
        site: '',
        content: '',
    })
    const [application, setApplication] = useState({
        name: '',
        email: '',
        phone_number: '',
        content: '',
    })
    const handleChangeBusiness = (e) => {
        const {name, value} = e.target;
        setBusinessApplication({...businessApplication, [name]: value});
    }
    const handleSubmitBusiness = async (e) => {
        e.preventDefault()
        await dispatch(postBusinessApplication(businessApplication))
        setBusinessApplication({
            company_name: '',
            company_type: '',
            contact_person: '',
            phone_number: '',
            site: '',
            content: '',
        })
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setApplication({...application, [name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(postBusinessApplication(application))
        setApplication({
            company_name: '',
            company_type: '',
            contact_person: '',
            phone_number: '',
            site: '',
            content: '',
        })
    }
    const {
        apartmentServices,
        houseServices,
        businessServices,
        additionalServicesInformation,
        climbers,
        cleaning,
        minorRepairs,
        cargoTransportation,
    } = useSelector((state) => state.api)
    useEffect(() => {
        dispatch(getApartmentServices())
        dispatch(getHouseServices())
        dispatch(getBusinessServices())
        dispatch(getAdditionalServicesInformation())
        dispatch(getClimbers())
        dispatch(getCleaning())
        dispatch(getMinorRepairs())
        dispatch(getCargoTransportation())
        return () => {
            dispatch(resetIsLoaded());
        };
    }, [dispatch]);
    const [transports, setTransports] = useState([
        {
            id: 1, title: 'Минивен', img: 'https://www.mercedesmagazin.ru/img/nblock/143-2/mercedes-W639.jpg',

            description: 'С точки зpения банальной эpудиции каждый индивидуум, кpитически мотивиpующий абстpакцию, не может игноpиpовать кpитеpии утопического субьективизма, концептуально интеpпpетиpуя общепpинятые дефанизиpующие поляpизатоpы, поэтому консенсус, достигнутый диалектической матеpиальной классификацией всеобщих мотиваций в паpадогматических связях пpедикатов, pешает пpоблему усовеpшенствования фоpмиpующих геотpансплантационных квазипузлистатов всех кинетически коpеллиpующих аспектов.',

        },
        {
            id: 2,
            title: 'Портер',
            img: 'https://kimuracars.com/img/autocatalog_korea/cars/17/hyundai_porter_2_3769164.jpg',
            description: 'Небольшие, короткие, мини, легкие тексты для чтения со школьниками. Детские тексты, тексты с простыми словами, любые тексты для детей.',
        },
        {
            id: 3, title: 'Спринтер', img: 'https://a.d-cd.net/acfc69es-960.jpg', description: '',
        },
        {
            id: 4,
            title: 'Фуры',
            img: 'https://static.tildacdn.com/tild6232-6661-4339-a366-653430386266/a0fe0e60a2b351cb9f89.jpg',
            description: '',
        }
    ])
    useEffect(() => {
        // Выборочное обновление description
        setTransports((prevTransports) =>
            prevTransports?.map((transport) => {
                if (transport.id === 1) {
                    return {...transport, description: cargoTransportation?.minivan};
                }
                if (transport.id === 2) {
                    return {...transport, description: cargoTransportation?.porter};
                }
                if (transport.id === 3) {
                    return {...transport, description: cargoTransportation?.sprinter};
                }
                if (transport.id === 4) {
                    return {...transport, description: cargoTransportation?.fura};
                }
                return transport;
            })
        );
    }, [cargoTransportation]);
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
                                    <p>{apartmentServices[0]?.text_1}</p>
                                </div>
                                <div className="right-text">
                                    <hr className="divider"/>
                                    <p>{apartmentServices[0]?.text_2}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1.2 секция  */}
                    <div className="tarifs-section">
                        <div className='tarif-plan'>
                            <div>
                                <h2 className='header-font tarif-header'>ТАРИФ «СТАНДАРТ»</h2>
                                <div>
                                    {apartmentServices[0]?.services?.map((service) => (
                                        <div className='tarif-plan-item' key={service.id}>
                                            <p>{service.value}</p>
                                            <img src={servicesPNG} alt="include"/>
                                        </div>
                                    ))}

                                </div>
                                <div className="tarif-plan-advantages">
                                    <ul>
                                        {apartmentServices[0]?.advantages?.map((advantage) => (
                                            <li key={advantage.id}>{advantage.value}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <h2>{apartmentServices[0]?.price}</h2>
                        </div>
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «ПРЕМИУМ»</h2>
                            <div>
                                {apartmentServices[1]?.services?.map((service) => (
                                    <div className='tarif-plan-item' key={service.id}>
                                        <p>{service.value}</p>
                                        <img src={servicesPNG} alt="include"/>
                                    </div>
                                ))}
                            </div>
                            <div className="tarif-plan-advantages">
                                <ul>
                                    {apartmentServices[1]?.advantages?.map((advantage) => (
                                        <li key={advantage.id}>{advantage.value}</li>
                                    ))}
                                </ul>
                            </div>
                            <h2>{apartmentServices[1]?.price}</h2>
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
                                    <p>{houseServices[0]?.text_1}</p>
                                </div>
                                <div className="right-text">
                                    <hr className="divider-white"/>
                                    <p>{houseServices[0]?.text_2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarifs-section">
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «СТАНДАРТ»</h2>
                            <div>
                                {houseServices[0]?.services?.map((service) => (
                                    <div className='tarif-plan-item' key={service.id}>
                                        <p>{service.value}</p>
                                        <img src={servicesPNG} alt="include"/>
                                    </div>
                                ))}
                            </div>
                            <div className="tarif-plan-advantages">
                                <ul>
                                    {houseServices[0]?.advantages?.map((advantage) => (
                                        <li key={advantage.id}>
                                            {advantage.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h2>{houseServices[0]?.price}</h2>
                        </div>
                        <div className='tarif-plan'>
                            <h2 className='header-font tarif-header'>ТАРИФ «ПРЕМИУМ»</h2>
                            <div>
                                {houseServices[0]?.services?.map((service) => (
                                    <div className='tarif-plan-item' key={service.id}>
                                        <p>{service.value}</p>
                                        <img src={servicesPNG} alt="include"/>
                                    </div>
                                ))}
                            </div>
                            <div className="tarif-plan-advantages">
                                <ul>
                                    {houseServices[1]?.advantages?.map((advantage) => (
                                        <li key={advantage.id}>
                                            {advantage.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h2>{houseServices[1]?.price}</h2>
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
                                        <p>{businessServices.text_1}</p>
                                    </div>
                                    <div className="right-text">
                                        <hr className="divider"/>
                                        <p>{businessServices.text_2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className='services-business-form' onSubmit={handleSubmitBusiness}>
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
                                               name="company_name"
                                               value={businessApplication.company_name}
                                               placeholder="Название компании*"
                                               onChange={handleChangeBusiness}
                                               required
                                        />
                                        <input type="text" className="services-business-form-input"
                                               name="company_type"
                                               value={businessApplication.company_type}
                                               placeholder="Тип компании (общепит, офис, барбершоп, и т. д.)*"
                                               onChange={handleChangeBusiness}
                                               required
                                        />
                                        <input type="text" className="services-business-form-input"
                                               name='contact_person'
                                               value={businessApplication.contact_person}
                                               placeholder="Контактное лицо*"
                                               onChange={handleChangeBusiness}
                                               required
                                        />
                                        <input className="services-business-form-input" type="tel"
                                               name="phone_number"
                                               value={businessApplication.phone_number}
                                               placeholder="Номер телефона*"
                                               onChange={handleChangeBusiness}
                                               required
                                        />
                                        <input className="services-business-form-input" type="text"
                                               name="site"
                                               value={businessApplication.site}
                                               placeholder="Сайт (если есть)"
                                               onChange={handleChangeBusiness}
                                        />
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
                                              name="content"
                                              placeholder="Сообщение*"
                                              value={businessApplication.content}
                                              onChange={handleChangeBusiness}
                                              required
                                    ></textarea>
                                        <button className="services-business-form-button">Отправить</button>
                                    </div>
                                </div>
                            </div>
                        </form>

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
                                        <p>{additionalServicesInformation.text_1}</p>
                                    </div>
                                    <div className="right-text">
                                        <hr className="divider-white"/>
                                        <p>{additionalServicesInformation.text_2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='add-services-list'>
                            <ExpandableBlock title="Альпинисты" number='001'>
                                <div className="service-item-content">
                                    <div className='service-item-content-section'>
                                        <div className="content-section-list">
                                            {climbers?.services?.map((service) => (
                                                <div className="content-section-list-element" key={service.id}>
                                                    <p>{service.value}</p>
                                                    <p>0{service.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ExpandableBlock>
                            <ExpandableBlock title="Клининг" number='002'>
                                <div className="cleaning">
                                    <h2>{cleaning?.text}</h2>
                                </div>
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
                                            {minorRepairs?.santehnika?.map((item) => (
                                                <div className="content-section-list-element" key={item.id}>
                                                    <p>{item.value}</p>
                                                    <p>0{item.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Электрика</h3>
                                        <div className="content-section-list">
                                            {minorRepairs?.elektrika?.map((item) => (
                                                <div className="content-section-list-element" key={item.id}>
                                                    <p>{item.value}</p>
                                                    <p>0{item.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Двери и окна</h3>
                                        <div className="content-section-list">
                                            {minorRepairs?.doorsAndWindows?.map((item) => (
                                                <div className="content-section-list-element" key={item.id}>
                                                    <p>{item.value}</p>
                                                    <p>0{item.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Настенные работы</h3>
                                        <div className="content-section-list">
                                            {minorRepairs?.stena?.map((item) => (
                                                <div className="content-section-list-element" key={item.id}>
                                                    <p>{item.value}</p>
                                                    <p>0{item.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Напольные покрытия</h3>
                                        <div className="content-section-list">
                                            {minorRepairs?.pol?.map((item) => (
                                                <div className="content-section-list-element" key={item.id}>
                                                    <p>{item.value}</p>
                                                    <p>0{item.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='service-item-content-section'>
                                        <h3>Бытовая техника</h3>
                                        <div className="content-section-list">
                                            {minorRepairs?.bytTehnika?.map((item) => (
                                                <div className="content-section-list-element" key={item.id}>
                                                    <p>{item.value}</p>
                                                    <p>0{item.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ExpandableBlock>
                            <ExpandableBlock title="Капитальные работы" number="005">
                                <div className="capital-works-title">
                                    <p>
                                        «Предоставляем услуги капитального ремонта разного профиля. Полный перечень
                                        услуг можете посмотреть в разделе Капитыльный ремонт»
                                    </p>
                                </div>
                                <button className="capital-works-btn" onClick={() => navigate("/capremont")}>
                                    Перейти на страницу
                                </button>
                            </ExpandableBlock>
                        </div>
                    </div>

                </div>
            </div>


            {/*//! форма зявки */}
            <form className="serviceform-formcomt" onSubmit={handleSubmit}>
                <div className="serviceform-wrapper">
                    <h2 className='header-font'>Оставить заявку</h2>

                    <div className="serviceform-container">
                        {/* Левая колонка с полями ввода */}
                        <div className="serviceform-left">
                            <input type="text" className="input-field" placeholder="Имя*" name="name"
                                   value={application.name} onChange={handleChange} required/>
                            <input type="text" className="input-field" placeholder="Номер телефона*" name="phone_number"
                                   value={application.phone_number} onChange={handleChange} required/>
                            <input type="email" className="input-field" placeholder="Электронная почта*" name="email"
                                   value={application.email} onChange={handleChange} required/>
                        </div>

                        {/* Правая колонка с полем сообщения */}
                        <div className="serviceform-right">
                            <textarea className="serviceform-textarea" rows="4" placeholder="Сообщение*" name="content"
                                      value={application.content} onChange={handleChange} required></textarea>
                        </div>
                    </div>

                    <button className="serviceform-button">Отправить</button>
                </div>

            </form>


        </div>
    );
};

export default Services;
