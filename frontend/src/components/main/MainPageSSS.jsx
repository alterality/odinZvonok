import MainPage from "./MainPage";
import AboutUsMain from "../about/AboutUsMain";
import ServicesMain from "../services/ServicesMain";
import AdvantagesMain from "../advantages/AdvantagesMain";
import Contacts from "../contacts/Contacts";
import React from "react";

function MainPageSSS() {
    return(
        <>
            <MainPage/>
            <div className="center-square-mobile">
                <h2 className='h2-mobile'>Оставить заявку</h2>

                <div className="form-container-mobile">
                    <div className="form-left-mobile">
                        <input type="text" className="input-field-mobile" placeholder="Имя*"/>
                        <input type="text" className="input-field-mobile" placeholder="Номер телефона*"/>
                        <input type="email" className="input-field-mobile" placeholder="Электронная почта*"/>
                    </div>

                    <div className="form-right-mobile">
                        <textarea className="textarea-field-mobile" rows="4" placeholder="Сообщение*"></textarea>
                    </div>
                </div>


                <button className="submit-button-mobile">Отправить</button>
            </div>
            <AboutUsMain/>
            <ServicesMain/>
            <AdvantagesMain/>
            <Contacts/>
        </>
    )
}

export default MainPageSSS;