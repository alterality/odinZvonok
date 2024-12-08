import React from 'react';
import servis1 from '../../assets/Frame 682 (1).png';
import servis2 from '../../assets/Frame 683.png';
import servis3 from '../../assets/Frame 684.png';
import servis4 from '../../assets/Frame 685.png';
import './ServicesMain.css';

const ServicesMain = () => {
  return (
    <div className="services-container">
      <h2 className="services-header">УСЛУГИ И ТАРИФЫ</h2>
      
      <div className="services-images-row">
        <img src={servis1} alt="Service 1" className="service-itemMain" />
        <img src={servis2} alt="Service 2" className="service-itemMain" />
        <img src={servis3} alt="Service 3" className="service-itemMain" />
        <img src={servis4} alt="Service 4" className="service-itemMain" />
      </div>
      
      <button className="request-button">Оставить заявку</button>
    </div>
  );
}

export default ServicesMain;
