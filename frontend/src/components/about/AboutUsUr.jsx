import React, {useEffect, useState} from 'react'
import AdvantagesUr from '../../assets/section right top (1).png';
import helpimgright from '../../assets/plumbing.png'
import blackcontimg from '../../assets/ремонт.png'
import rekvisitImage from '../../assets/сертификатодинзвонок.png'
import pdfFile from '../../assets/pdf.png'
import './AboutUsUr.css';
import {useDispatch, useSelector} from "react-redux";
import {
    getAdvantages,
    getAssistances,
    getLegalDocuments,
    getLegalEntities,
    getServices,
    getWorkStages, resetIsLoaded
} from "../../store/apiSlice";

const AboutUsUr = () => {
    const dispatch = useDispatch();
    const [stages, setStages] = useState([])
    const [goods, setGoods] = useState([])
    const [whyUs, setWhyUs] = useState([])
    const [application, setApplication] = useState({
        company_name: '',
        company_type: '',
        contact_person: '',
        phone_number: '',
        site: '',
        content: '',
    })
    const selectedLanguage = 'ru'
    const [servicesForWhom, setServicesForWhom] = useState([])
    const {
        legalEntities,
        services,
        advantages,
        assistances,
        workStages,
        legalDocuments
    } = useSelector(state => state.api)
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
    useEffect(() => {
        dispatch(getLegalEntities());
        dispatch(getServices())
        dispatch(getAdvantages())
        dispatch(getAssistances())
        dispatch(getWorkStages())
        dispatch(getLegalDocuments())
        return () => {
            dispatch(resetIsLoaded());
        };
    }, [dispatch]);
    useEffect(() => {
        setServicesForWhom(Object.keys(services)
            .filter(key => key.startsWith("field") && key.includes("_image")) // Находим все ключи с изображениями
            .map(key => {
                const baseKey = key.replace("_image", ""); // Определяем базовый ключ (например, "field1")
                const textKey = `${baseKey}_text_${selectedLanguage}`; // Формируем ключ текста для выбранного языка
                return {
                    image: services[key],
                    text: services[textKey] || services[`${baseKey}_text`] // Берем текст для выбранного языка или общий текст
                };
            }))
    }, [services]);
    useEffect(() => {
        setWhyUs(toMassive(advantages))
    }, [advantages]);
    useEffect(() => {
        setGoods(toMassive(assistances))
    }, [assistances]);
    useEffect(() => {
        setStages(toMassive(workStages))
    }, [workStages]);
    const handleChange =(e)=>{
        const { name, value } = e.target;
        setApplication({ ...application, [name]: value });
    }
    const handleSubmit = () =>{

    }

    return (
        <div>
            {/* Первый контейнер */}
            <div className="advantages-container-ur">
                <div className="content-wrapper-ur">
                    <div className="text-container-ur">
                        <h3 className="heading-ur header-font">{legalEntities.title}</h3>
                        <p className="text-ur">{legalEntities.description}</p>
                    </div>
                    <div className="image-container-ur">
                        <img src={AdvantagesUr} alt="Advantages" className="image-ur"/>
                    </div>
                </div>
            </div>

            {/* Второй контейнер */}
            <div className="services-container" style={{backgroundColor: '#878787'}}>
                <div className="services-text">
                    <h2 className='header-font'>{services.title}</h2>
                </div>
                <div className="services-images">
                    {servicesForWhom.map((service, index) => (
                        <div key={index}>
                            <img src={service.image} alt="Service 1"/>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="black-container">
                <h3 className="black-heading header-font">{advantages.title}</h3>
                <div className="squares-container">
                    {whyUs.map((item, index) => (
                        <div className="square-ur" key={index}>
                            <p className="square-text header-font">{item}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* New Gray Container */}
            <div className="gray-container-ur">
                <div className="gray-content-ur">
                    <div className="gray-text-ur">
                        <h3 className="gray-heading-ur header-font">{assistances.title}</h3>
                        {goods.map((good, index) => (
                            <div key={index}>
                                <p className="gray-paragraph-ur">{good}</p>
                                <hr className="gray-divider-ur"/>
                            </div>
                        ))}

                    </div>
                    <div className="gray-image-ur">
                        <img src={helpimgright} alt="Service Illustration" className="gray-img-ur"/>
                    </div>
                </div>
            </div>

            <div className="helpblack-main-content-container-ur">
                <div className="helpblack-text-section-wrapper-ur">
                    <div className="helpblack-section-heading-title-ur header-font">{workStages.title}</div>
                    {stages.map((stage, index) => (
                        <div className="helpblack-text-item-container-ur" key={index}>
                            <p className="helpblack-text-block-content-ur">{stage}</p>
                            <div className="helpblack-text-item-number-ur">0{index + 1}</div>
                            <hr className="helpblack-horizontal-separator-line-ur"/>
                        </div>
                    ))}
                </div>

                <div className="helpblack-image-section-wrapper-ur">
                    <img src={blackcontimg} alt="Картинка" className="helpblack-image-container-ur"/>
                </div>
            </div>


            <div className="Ur-document-container">
                <h3>ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ:</h3>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия свидетельства о регистрации юридического лица</span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc1}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия устава юридического лица</span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc2}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Реквизиты</span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc3}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc3}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия доверенности лица, уполномоченного на заключение договора </span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc4}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc4}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span> Документы подтверждающие полномочия руководителя юридического лица </span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc5}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc5}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия свидетельства о постановке на налоговый учет (ИНН)</span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc6}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc6}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копии разрешительной документации</span>
                    </div>
                    <div className="Ur-document-actions">
                        <a
                            href={legalDocuments.doc7}
                            className="Ur-btn Ur-download-btn">
                            Скачать
                        </a>
                        <a
                            href={legalDocuments.doc7}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Ur-btn Ur-open-btn">
                            Открыть
                        </a>
                    </div>
                </div>
            </div>

            <div className="Ur-document-container">
                <h3>ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ИНДИВИДУАЛЬНЫХ ПРЕДПРИНИМАТЕЛЕЙ:</h3>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия свидетельства о регистрации ИП</span>
                    </div>
                    <div className="Ur-document-actions">
                        <button className="Ur-btn Ur-download-btn">Скачать</button>
                        <button className="Ur-btn Ur-open-btn">Открыть</button>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия паспорта ИП</span>
                    </div>
                    <div className="Ur-document-actions">
                        <button className="Ur-btn Ur-download-btn">Скачать</button>
                        <button className="Ur-btn Ur-open-btn">Открыть</button>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия свидетельства о постановке на налоговый учет </span>
                    </div>
                    <div className="Ur-document-actions">
                        <button className="Ur-btn Ur-download-btn">Скачать</button>
                        <button className="Ur-btn Ur-open-btn">Открыть</button>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копия нотариальной доверенности лица, уполномоченного на заключение договора </span>
                    </div>
                    <div className="Ur-document-actions">
                        <button className="Ur-btn Ur-download-btn">Скачать</button>
                        <button className="Ur-btn Ur-open-btn">Открыть</button>
                    </div>
                </div>
                <div className="Ur-document-item">
                    <div className="Ur-document-info">
                        <img src={pdfFile} alt="PDF" className="Ur-pdf-icon"/>
                        <span>Копии разрешительной документации</span>
                    </div>
                    <div className="Ur-document-actions">
                        <button className="Ur-btn Ur-download-btn">Скачать</button>
                        <button className="Ur-btn Ur-open-btn">Открыть</button>
                    </div>
                </div>
            </div>


            <div className="AboutUsFiz-form-container-ur">
                <h3 className="AboutUsFiz-form-heading-ur header-font">Форма заявки</h3>
                <div className="AboutUsFiz-form-content-ur">
                    {/* Левый контейнер с текстом */}
                    <div className="AboutUsFiz-form-left-ur">
                        <h4 id='right-headingob' className="AboutUsFiz-form-right-heading-ur">Общая информация</h4>
                        <p className="AboutUsFiz-form-left-subheading-ur">
                            Пожалуйста, заполните общую информацию о себе, чтобы мы могли связаться с вами и предложить
                            оптимальные
                            решения вашей задачи.
                        </p>
                        <div className="AboutUsFiz-form-left-space-ur"></div>
                    </div>
                    {/* Правый контейнер с полями формы */}
                    <div className="AboutUsFiz-form-right-ur">
                        <h4 className="AboutUsFiz-form-left-heading-ur">
                            Заполните форму <br/>мы могли подготовить предложение и отправить , <br/> его вам в течении
                            нескольких
                            дней.
                        </h4>
                        <form className="AboutUsFiz-form-inputs-ur" onSubmit={handleSubmit}>
                            <div className="AboutUsFiz-form-input-ur">
                                <input
                                    type="text"
                                    name='company_name'
                                    placeholder="Название компании*"
                                    value={application.company_name}
                                    onChange={handleChange}
                                    className="AboutUsFiz-input-field"
                                    required
                                />
                            </div>

                            <div className="AboutUsFiz-form-input-ur">
                                <input
                                    type="text"
                                    name='company_type'
                                    placeholder="Тип компании*"
                                    value={application.company_type}
                                    onChange={handleChange}
                                    className="AboutUsFiz-input-field"
                                    required
                                />
                            </div>

                            <div className="AboutUsFiz-form-input-ur">
                                <input
                                    type="text"
                                    name='contact_person'
                                    placeholder="Контактное лицо*"
                                    value={application.contact_person}
                                    onChange={handleChange}
                                    className="AboutUsFiz-input-field"
                                    required
                                />
                            </div>

                            <div className="AboutUsFiz-form-input-ur">
                                <input
                                    type="tel"
                                    name='phone_number'
                                    placeholder="Номер телефона*"
                                    value={application.phone_number}
                                    onChange={handleChange}
                                    className="AboutUsFiz-input-field"
                                    pattern="^[+]*[0-9]{1,4}[0-9]*$"
                                    required
                                />
                            </div>

                            <div className="AboutUsFiz-form-input-ur">
                                <input
                                    type="url"
                                    name='site'
                                    placeholder="Сайт (если есть)"
                                    value={application.site}
                                    onChange={handleChange}
                                    className="AboutUsFiz-input-field"

                                />
                            </div>

                            <div className="AboutUsFiz-form-input-ur">
                              <textarea
                                  placeholder="Сообщение*"
                                  name='content'
                                  value={application.content}
                                  onChange={handleChange}
                                  className="AboutUsFiz-textarea-field-ur"
                                  rows="5"
                                  required>
                              </textarea>
                            </div>

                            <button
                                type="submit"
                                className="AboutUsFiz-form-submit-button-ur">
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUsUr
