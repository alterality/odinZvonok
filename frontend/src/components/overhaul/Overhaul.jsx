import React, {useEffect, useState} from 'react'
import Advantages from '../../assets/c7ad060e4599347affa1e8cef879597f.png'
import addimg from '../../assets/Group 5.png'
import './Overhaul.css'
import { animate } from "motion/react"
import {useDispatch, useSelector} from "react-redux";
import {
    getCapRepairsTitle, getDismantlingWorkCapServices, getElectricalWorkCapServices,
    getFloorWorkCapServices, getPlumbingWorkCapServices,
    getTilingWorkCapServices,
    getWallWorkCapServices, resetIsLoaded
} from "../../store/apiSlice";

const ExpandableBlock = ({ title,number, list }) => {
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
                className="overhaul-service-item"
            >
                <div className="overhaul-service-info">
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
                    <div className="item-container">
                        {list?.map((item) => (
                            <div className="item" key={item.id}>
                                <p>{item?.value}</p>
                                <p>{item?.id}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Overhaul = () => {
    const {capRepairsTitle, floorWorkCapServices, wallWorkCapServices, tilingWorkCapServices, plumbingWorkCapServices, dismantlingWorkCapServices, electricalWorkCapServices} = useSelector((state) => state.api)
    const services = [
        {name: "РАБОТА ПО ПОЛУ", number: "001", list: floorWorkCapServices},
        {name: "РАБОТЫ ПО СТЕНАМ", number: "002", list: wallWorkCapServices},
        {name: "ПЛИТОЧНЫЕ РАБОТЫ", number: "003", list: tilingWorkCapServices},
        {name: "САНТЕХНИЧЕСКИЕ РАБОТЫ", number: "004", list: plumbingWorkCapServices},
        {name: "ДЕМОНТАЖНЫЕ РАБОТЫ", number: "005" , list: dismantlingWorkCapServices},
        {name: "ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ", number: "006" , list: electricalWorkCapServices}
      ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCapRepairsTitle())
        dispatch(getFloorWorkCapServices())
        dispatch(getWallWorkCapServices())
        dispatch(getTilingWorkCapServices())
        dispatch(getPlumbingWorkCapServices())
        dispatch(getDismantlingWorkCapServices())
        dispatch(getElectricalWorkCapServices())
        return () => {
            dispatch(resetIsLoaded());
        };
    }, [dispatch]);

  return (
    <div className='overhaul-container'>
       <div className="overhaul-textcontainer">
        <div className="overhaul-content-wrapper">
          <div className="overhaul-text-container">
            <h3 className="overhaul-heading">{capRepairsTitle?.title}</h3>
            <p className="text">{capRepairsTitle?.text}</p>
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
            <div key={index}>
                <ExpandableBlock title={service.name} number={service.number} list={service?.list?.services}/>
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
