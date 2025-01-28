import React, {useEffect, useState} from 'react';
import Advantages from '../../assets/section right top.png';
import helpimgright from '../../assets/plumbing.png'
import blackcontimg from '../../assets/ремонт.png'
import rekvisitImage from '../../assets/сертификатодинзвонок.png'
import './AboutUsFiz.css';
import pdfFile from '../../assets/pdf.png'
import {useDispatch, useSelector} from "react-redux";
import {
    getAdvantages, getAssistance,
    getIndividualAdvantages, getIndividualDocuments,
    getIndividualEntities, getIndividualWorkStages,
    getOurServices,
    getWorkStages, postApplication, resetIsLoaded
} from "../../store/apiSlice";

const AboutUsFiz = () => {
    const [stages, setStages] = useState([])
    const [advantages, setAdvantages] = useState([])
    const [helps, setHelps] = useState([])
    const selectedLanguage = 'ru'
    const [servicesOur, setServicesOur] = useState([])
    const dispatch = useDispatch();
    const [docs, setDocs] = useState([])
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

    const toMassive = (someObject) => {
        return Object.keys(someObject)
            .filter(
                key =>
                    key.startsWith("field") &&
                    key.includes("_") && // Оставляем только ключи с языковым суффиксом
                    key.endsWith(`_${selectedLanguage}`) // Учитываем только выбранный язык
            )
            .sort() // Сортируем для предсказуемого порядка
            .map(key => someObject[key])
    }
    // const toDocArray = (someObject) => {
    //   return Object.keys(someObject)
    //       .filter(
    //           key => key.startsWith("doc") // Оставляем только ключи, начинающиеся с "doc"
    //       )
    //       .sort() // Сортируем ключи для предсказуемого порядка
    //       .map(key => someObject[key]); // Преобразуем в массив значений
    // };
    const {
        individualEntities,
        workStages,
        ourServices,
        advantagesIvidual,
        assistance,
        workStagesIndividual,
        individualDocuments
    } = useSelector(state => state.api);
    useEffect(() => {
        dispatch(getIndividualEntities())
        dispatch(getIndividualWorkStages())
        dispatch(getOurServices())
        dispatch(getIndividualAdvantages())
        dispatch(getAssistance())
        dispatch(getIndividualDocuments())
        return () => {
            dispatch(resetIsLoaded());
        };

    }, [dispatch]);
    useEffect(() => {
        setServicesOur(toMassive(ourServices))
    }, [ourServices]);
    useEffect(() => {
        setStages(toMassive(workStagesIndividual))
    }, [workStagesIndividual]);
    useEffect(() => {
        setHelps(toMassive(assistance))
    }, [assistance]);
    useEffect(() => {
        setAdvantages(toMassive(advantagesIvidual))
    }, [advantagesIvidual]);

    return (
        <div>
            {/* Первый контейнер */}
            <div className="advantages-container">
                <div className="content-wrapper">
                    <div className="text-container">
                        <h3 className="heading header-font">{individualEntities.title}</h3>
                        <p className="text">{individualEntities.description}</p>
                    </div>
                    <div className="image-container">
                        <img src={Advantages} alt="Advantages" className="image"/>
                    </div>
                </div>
            </div>

            {/* Второй контейнер */}
            <div className="additional-container">
                <h3 className="additional-heading header-font">{ourServices.title}</h3>
                {servicesOur.map((service, index) => (
                    <div key={index}>
                        <p className="additional-text">{service}</p>
                        <hr className="divider"/>
                    </div>
                ))}
            </div>

            <div className="black-container">
                <h3 className="black-heading header-font">{advantagesIvidual.title}</h3>
                <div className="squares-container">
                    {advantages.map((advantage, index) => (
                        <div className="square" key={index}>
                            <p className="square-text header-font">{advantage}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3 Container */}
            <div className="gray-container">
                <div className="gray-content">
                    <div className="gray-text">
                        <h3 className="gray-heading header-font">{assistance.title}</h3>
                        {helps.map((help, index) => (
                            <div key={index}>
                                <p className="gray-paragraph">{help}</p>
                                <hr className="gray-divider"/>
                            </div>
                        ))}
                    </div>
                    <div className="gray-image">
                        <img src={helpimgright} alt="Service Illustration" className="gray-img"/>
                    </div>
                </div>
            </div>

            {/* 4 */}

            <div className="helpblack-main-content-container">
                <div className="helpblack-text-section-wrapper">
                    <div className="helpblack-section-heading-title header-font">{workStagesIndividual.title}</div>
                    {stages.map((stage, index) => (
                        <div className="helpblack-text-item-container" key={index}>
                            <p className="helpblack-text-block-content">{stage}</p>
                            <div className="helpblack-text-item-number">0{index + 1}</div>
                            <hr className="helpblack-horizontal-separator-line"/>
                        </div>
                    ))}

                </div>

                <div className="helpblack-image-section-wrapper">
                    <img src={blackcontimg} alt="Картинка" className="helpblack-image-container"/>
                </div>
            </div>


            {/* пдф файлы */}
            <div className="fiz-document-container">
                <h3>ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ:</h3>
                <div className="fiz-document-item">
                    <div className="fiz-document-info">
                        <img src={pdfFile} alt="PDF" className="fiz-pdf-icon"/>
                        <p>Копия паспорта</p>
                    </div>
                    <div className="fiz-document-actions">
                        <a href={individualDocuments.doc1}
                           className="fiz-btn fiz-download-btn">
                            Скачать
                        </a>
                        <a
                            href={individualDocuments.doc1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fiz-btn fiz-open-btn">Открыть</a>
                    </div>
                </div>
                <div className="fiz-document-item">
                    <div className="fiz-document-info">
                        <img src={pdfFile} alt="PDF" className="fiz-pdf-icon"/>
                        <p>Справка с места жительства</p>
                    </div>
                    <div className="fiz-document-actions">
                        <a href={individualDocuments.doc2}
                           className="fiz-btn fiz-download-btn">
                            Скачать
                        </a>
                        <a
                            href={individualDocuments.doc2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fiz-btn fiz-open-btn">Открыть</a>
                    </div>
                </div>
                <div className="fiz-document-item">
                    <div className="fiz-document-info">
                        <img src={pdfFile} alt="PDF" className="fiz-pdf-icon"/>
                        <p>Копия нотариальной доверенности лица, уполномоченного на заключение договора</p>
                    </div>
                    <div className="fiz-document-actions">
                        <a href={individualDocuments.doc3}
                           className="fiz-btn fiz-download-btn">
                            Скачать
                        </a>
                        <a
                            href={individualDocuments.doc3}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fiz-btn fiz-open-btn">Открыть</a>
                    </div>
                </div>
                <div className="fiz-document-item">
                    <div className="fiz-document-info">
                        <img src={pdfFile} alt="PDF" className="fiz-pdf-icon"/>
                        <p>Копии разрешительной документации</p>
                    </div>
                    <div className="fiz-document-actions">
                        <a href={individualDocuments.doc4}
                           className="fiz-btn fiz-download-btn">
                            Скачать
                        </a>
                        <a
                            href={individualDocuments.doc4}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fiz-btn fiz-open-btn">Открыть</a>
                    </div>
                </div>
            </div>

            {/* пдф файлы */}


            <form className="AboutUsFiz-form-container" onSubmit={handleSubmit} id='application_form'>
                <h3 className="AboutUsFiz-form-heading header-font">Форма заявки</h3>
                <div className="AboutUsFiz-form-content">
                    {/* Левый контейнер с текстом */}
                    <div className="AboutUsFiz-form-left">
                        <h4 id='right-headingob' className="AboutUsFiz-form-right-heading">Общая информация</h4>
                        <p className="AboutUsFiz-form-left-subheading">
                            Пожалуйста, заполните общую информацию о себе, чтобы мы могли связаться с вами и предложить
                            оптимальные решения вашей задачи.
                        </p>
                        <div className="AboutUsFiz-form-left-space"></div>
                    </div>
                    {/* Правый контейнер с полями формы */}
                    <div className="AboutUsFiz-form-right">
                        <h4 className="AboutUsFiz-form-left-heading">
                            Заполните форму <br/> чтобы мы могли связаться с вами, <br/> уточните детали <br/> и прибыть
                            в удобное для вас время
                        </h4>
                        <div className="AboutUsFiz-form-inputs">
                            <div className="AboutUsFiz-form-input">
                                <input type="text" placeholder="Имя*" className="AboutUsFiz-input-field" name="name" value={application.name} onChange={handleChange} required/>
                            </div>
                            <div className="AboutUsFiz-form-input">
                                <input type="tel" placeholder="Номер телефона*" className="AboutUsFiz-input-field" name="phone_number" value={application.phone_number} onChange={handleChange} required/>
                            </div>
                            <div className="AboutUsFiz-form-input">
                                <input type="email" placeholder="Электронная почта"
                                       className="AboutUsFiz-input-field"
                                        name="email"
                                       value={application.email}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="AboutUsFiz-form-input">
                                <textarea placeholder="Опишите проблему или добавьте пожелания*"
                                          className="AboutUsFiz-textarea-field" name="content" value={application.content} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="AboutUsFiz-form-submit-button">Отправить заявку</button>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    );
};

export default AboutUsFiz;
