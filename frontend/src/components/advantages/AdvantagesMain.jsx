import React, {useEffect, useState} from 'react';
import advantagesimg from '../../assets/Frame 53.png';
import './AdvantagesMain.css';
import {useDispatch, useSelector} from "react-redux";
import {getHomeAdvantage, resetIsLoaded} from "../../store/apiSlice";
import LazyImage from "../LazyImage/LazyImage";

const AdvantagesMain = () => {
  const [descriptions,setDescriptions] = useState([])
  const selectedLanguage = 'ru'
  const dispatch = useDispatch();
  const {homeAdvantage} = useSelector(state => state.api);
  useEffect(() => {
    dispatch(getHomeAdvantage())
    return () => {
      dispatch(resetIsLoaded());
    };
  }, [dispatch]);
  useEffect(() => {
    setDescriptions(Object.keys(homeAdvantage)
        .filter(
            key =>
                key.startsWith("description") &&
                key.includes("_") && // Оставляем только ключи с языковым суффиксом
                key.endsWith(`_${selectedLanguage}`) // Учитываем только выбранный язык
        )
        .sort() // Сортируем для предсказуемого порядка
        .map(key => homeAdvantage[key]))
  }, [homeAdvantage]);
  return (
    <div className="advantages-main">
      <h2 className="advantages-header header-font">НАШИ ПРЕИМУЩЕСТВА</h2>
      <div className="advantages-content">
        <div className="advantages-left">
          {descriptions.slice(0, 6).map((des, index) => (
            <div key={index} className="advantage-item">
              <span className="advantage-text">{des}</span>
              <span className="advantage-number">0{index+1}</span>
            </div>
          ))}
        </div>
        <div className="advantages-image">
          <LazyImage src={advantagesimg} alt="Преимущество" />
        </div>
        <div className="advantages-right">
          {descriptions.slice(6).map((des, index) => (
            <div key={index} className="advantage-item">
              <span className="advantage-text">{des}</span>
              <span className="advantage-number">0{index+7}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesMain;
