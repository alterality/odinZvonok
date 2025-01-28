import MainPage from "./MainPage";
import AboutUsMain from "../about/AboutUsMain";
import ServicesMain from "../services/ServicesMain";
import AdvantagesMain from "../advantages/AdvantagesMain";
import Contacts from "../contacts/Contacts";
import React, {useState} from "react";
import {postApplication} from "../../store/apiSlice";
import {useDispatch} from "react-redux";

function MainPageSSS() {
    const dispatch = useDispatch()
    const [application,setApplication] = useState({
        name: '',
        email: '',
        phone_number: '',
        content: '',

    })
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setApplication({ ...application, [name]: value });
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await dispatch(postApplication(application))
        setApplication({
            name: '',
            email: '',
            phone_number: '',
            content: '',
        })
    }

    return(
        <>
            <MainPage/>
            <form className="center-square-mobile" id='applictaion_form' onSubmit={handleSubmit}>
                <h2 className='h2-mobile'>Оставить заявку</h2>

                <div className="form-container-mobile">
                    <div className="form-left-mobile">
                        <input type="text" className="input-field-mobile" placeholder="Имя*" name="name"
                               value={application.name} onChange={handleChange} required/>
                        <input type="text" className="input-field-mobile" placeholder="Номер телефона*" name="phone_number"
                               value={application.phone_number} onChange={handleChange} required/>
                        <input type="email" className="input-field-mobile" placeholder="Электронная почта*" name="email"
                               value={application.email} onChange={handleChange} required/>
                    </div>

                    <div className="form-right-mobile">
                        <textarea className="textarea-field-mobile" rows="4" placeholder="Сообщение*" name="content"
                                  value={application.content} onChange={handleChange} required></textarea>
                    </div>
                </div>


                <button className="submit-button-mobile">Отправить</button>
            </form>
            <AboutUsMain/>
            <ServicesMain/>
            <AdvantagesMain/>
            <Contacts/>
        </>
    )
}

export default MainPageSSS;