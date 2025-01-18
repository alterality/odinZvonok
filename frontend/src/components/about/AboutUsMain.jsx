import React, {useEffect} from 'react';
import aboutusmainpng from '../../assets/AdobeStock_292230412 1.png';
import morepng from '../../assets/Component 8.png';
import './AboutUsMain.css';
import {useDispatch, useSelector} from "react-redux";
import {getHomeAboutCompany, resetIsLoaded} from "../../store/apiSlice";
import {Link} from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";

const AboutUsMain = () => {
    const dispatch = useDispatch();
    const {homeAboutCompany} = useSelector(state => state.api);
    useEffect(() => {
        dispatch(getHomeAboutCompany())
        return () => {
            dispatch(resetIsLoaded());
        };
    }, [dispatch]);
    return (
        <div className="about-us-main">
            <h2 className="header-text">О КОМПАНИИ</h2>

            <div className='about-us-main-infoBlock'>
                <div className="left-image-container">
                    <LazyImage src={aboutusmainpng} alt="About Us" className="main-image"/>
                    <Link to='/aboutcompany'><LazyImage src={morepng} alt="More" className="more-icon"/></Link>
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
        </div>
    );
};

export default AboutUsMain;
