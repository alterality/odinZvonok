import React, {useEffect} from 'react';
import aboutusmainpng from '../../assets/AdobeStock_292230412 1.png';
import morepng from '../../assets/Component 8.png';
import './AboutUsMain.css';
import {useDispatch, useSelector} from "react-redux";
import {getHomeAboutCompany} from "../../store/apiSlice";
import {Link} from "react-router-dom";

const AboutUsMain = () => {
    const dispatch = useDispatch();
    const {homeAboutCompany} = useSelector(state => state.api);
    useEffect(() => {
        dispatch(getHomeAboutCompany())
    }, [dispatch]);
  return (
    <div className="about-us-main">
      <div className="header-text">О КОМПАНИИ</div>
      
      <div className="left-image-container">
        <img src={aboutusmainpng} alt="About Us" className="main-image" />
          <Link to='/aboutcompany'><img src={morepng} alt="More" className="more-icon"/></Link>
      </div>

        <div className="right-text-container">
        <div className="text-box black-text">
            {homeAboutCompany.description1}
        </div>
        <div className="text-box orange-text">
            {homeAboutCompany.description2}
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
