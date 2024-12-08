import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import MainPage from "../components/main/MainPage";
import AboutUsFiz from "../components/about/AboutUsFiz";
import Vakancies from "../components/vacancies/Vakancies";
import Services from "../components/services/Services";
import AboutUsUr from "../components/about/AboutUsUr";
import AboutUsMain from "../components/about/AboutUsMain";
import MainPageSSS from "../components/main/MainPageSSS";
import Contacts from "../components/contacts/Contacts";
import AboutCompany from "../components/aboutcompany/AboutCompany";


const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound /> },
  { id: 2, link: "/", element: <MainPageSSS /> },
  { id: 3, link: "/aboutusfiz", element: <AboutUsFiz /> },
  { id: 4, link: "/vacancies", element: <Vakancies />},
  { id: 5, link: "/services", element: <Services />},
  { id: 6, link: "/aboutusur", element: <AboutUsUr />},
  { id: 7, link: "/aboutcompany", element: <AboutCompany  />},
  { id: 8, link: "/contacts", element: <Contacts />}

];
const MyRoutes = () => {
  return (
    <Routes>
      {" "}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
