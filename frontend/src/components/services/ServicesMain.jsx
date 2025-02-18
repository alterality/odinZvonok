import React from 'react';
import servis1 from '../../assets/Frame 682.png';
import servis2 from '../../assets/Frame 683.png';
import servis3 from '../../assets/Frame 684.png';
import servis4 from '../../assets/Frame 685.png';
import moreIcon from '../../assets/more.svg'
import './ServicesMain.css';
import {useNavigate} from "react-router-dom";

const ServicesMain = () => {
    const navigate = useNavigate()
    const goToBlock = (idBlock) =>{
        navigate(`/services#${idBlock}`)
    }

  return (
    <div className="services-container" style={{backgroundColor: "#fff"}}>
      <h2 className="services-header header-font">УСЛУГИ И ТАРИФЫ</h2>
      
      <div className="services-images-row">
          <div className='service-item-main'>
              <img src={servis1} alt="Service 1" className="service-itemMain"/>
              <div className='goToMore' onClick={() => goToBlock("apartments")}>
                  <p>Подробнее</p>
                  <img src={moreIcon} alt=""/>
              </div>

          </div>
          <div className='service-item-main'>
              <img src={servis2} alt="Service 2" className="service-itemMain" />
              <div className='goToMore' onClick={() => goToBlock("land-houses")}>
                  <p>Подробнее</p>
                  <img src={moreIcon} alt=""/>
              </div>
          </div>
          <div className='service-item-main'>
              <img src={servis3} alt="Service 3" className="service-itemMain"/>
              <div className='goToMore'  onClick={() => goToBlock("business")}>
                  <p>Подробнее</p>
                  <img src={moreIcon} alt=""/>
              </div>
          </div>
          <div className='service-item-main'>
              <img src={servis4} alt="Service 4" className="service-itemMain"
                   />
              <div className='goToMore' onClick={() => goToBlock("add-services")}>
                  <p>Подробнее</p>
                  <img src={moreIcon} alt=""/>
              </div>
          </div>
      </div>

        <button className="request-button" onClick={() => goToBlock("application_form")}>Оставить заявку</button>
    </div>
  );
}

export default ServicesMain;
