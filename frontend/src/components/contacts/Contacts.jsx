import React, {useEffect} from 'react';
import './Contacts.css';
import {useDispatch} from "react-redux";
import {getHomeAboutCompany, isLoadedTrue, resetIsLoaded} from "../../store/apiSlice";
import {useNavigate} from "react-router-dom";

const Contacts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const goToBlock = (idBlock) =>{
        navigate(`/services#${idBlock}`)
    }
    useEffect(() => {
        dispatch(getHomeAboutCompany())
        return () => {
            dispatch(resetIsLoaded());
        };
    }, [dispatch]);
  return (
<div className="contacts">
    <div className="contacts-header header-font">Контакты</div>
    <div className="contacts-content">
        {/* <!-- Первая колонка: Сотрудничество и Офис --> */}
        <div>
            <div className="contacts-cooperation">
                <div className="contacts-cooperation-text header-font">Сотрудничество</div>
            </div>
            <div className="contacts-office">
                <div className="contacts-office-text header-font">Офис</div>
                <div className="contacts-address-phone">

                </div>

            </div>
        </div>

        {/* <!-- Вторая колонка: Серый текст, Кнопка и Адрес --> */}
        <div>
            <div className="contacts-form">
                <div className="contacts-form-text">Мы свяжемся с вами</div>
                <button className="contacts-submit-button" onClick={() => goToBlock("application")}>Отправить заявку</button>
            </div>
            <div className="contacts-address-phone">
                <div className="contacts-office-address">Бишкек,ул. Ч.Айтматова 47а, 2 эт. к. № 3</div>
                <div className="contacts-work-time">График работы:с 08:00 до 23:00 Без выходных</div>
            </div>
        </div>

        {/* <!-- Третья колонка: Серый текст, Электронная почта и Телефон --> */}
        <div>
            <div className="contacts-email">
                <div className="contacts-email-text">Напишите нам на электронную почту:</div>
                <div className="contacts-email-address">ODINZVONOK@GMAIL.COM</div>
                <div className="contacts-phone-number">+996–777-888-666</div>
            </div>
        </div>
    </div>


      {/* Карта */}
      <div className="contacts-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6548065675393!2d74.6250766756835!3d42.88012957114928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7bcd7e126b9%3A0x4890fe6a9d0aeba3!2zNDcg0JDQudGC0LzQsNGC0L7QstCwLCDQkdC40YjQutC10LosINCa0YvRgNCz0YvQt9GB0YLQsNC9!5e0!3m2!1sru!2spl!4v1731467682228!5m2!1sru!2spl"
          width="100%" 
          height="300" 
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Contacts;
