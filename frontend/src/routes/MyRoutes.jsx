import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

// Компоненты страниц
import NotFound from "../components/NotFound/NotFound";
import MainPageSSS from "../components/main/MainPageSSS";
import AboutUsFiz from "../components/about/AboutUsFiz";
import Vakancies from "../components/vacancies/Vakancies";
import Services from "../components/services/Services";
import AboutUsUr from "../components/about/AboutUsUr";
import AboutCompany from "../components/aboutcompany/AboutCompany";
import Contacts from "../components/contacts/Contacts";
import Overhaul from "../components/overhaul/Overhaul";

// Прелоадер
import Preloader from "../components/Preloader/Preloader";

// Служебный компонент для прокрутки вверх
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

// Массив маршрутов с изображениями для предварительной загрузки
const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound />, preloadImages: [] },
  {
    id: 2,
    link: "/",
    element: <MainPageSSS />,
    preloadImages: [
      "/assets/Component 8.png",
      "/assets/AdobeStock_292230412 1.png",
      "/assets/Frame 53.png",
      "/assets/main img.png",
    ],
  },
  {
    id: 3,
    link: "/aboutusfiz",
    element: <AboutUsFiz />,
    preloadImages: [
      "/assets/section right top.png",
      "/assets/plumbing.png",
      "/assets/ремонт.png",
    ],
  },
  {
    id: 4,
    link: "/vacancies",
    element: <Vakancies />,
    preloadImages: [
      "/assets/location bishkek icon.png",
      "/assets/location bishkek icon (1).png",
      "/assets/draw an icon of professionalism on a vector.png",
      "/assets/location bishkek icon (2).png",
    ],
  },
  {
    id: 5,
    link: "/services",
    element: <Services />,
    preloadImages: [
      "/assets/Designer (33) 1.png",
      "/assets/частныедома.png",
      "/assets/бизнес.png",
      "/assets/допуслуги.png",
    ],
  },
  {
    id: 6,
    link: "/aboutusur",
    element: <AboutUsUr />,
    preloadImages: [
      "/assets/section right top (1).png",
      "/assets/plumbing.png",
      "/assets/ремонт.png",
    ],
  },
  { id: 7, link: "/aboutcompany", element: <AboutCompany />, preloadImages: ["/assets/aboutcomp.png"] },
  { id: 8, link: "/contacts", element: <Contacts />, preloadImages: [] },
  {
    id: 9,
    link: "/capremont",
    element: <Overhaul />,
    preloadImages: [
      "/assets/c7ad060e4599347affa1e8cef879597f.png",
      "/assets/Group 5.png",
    ],
  },
];

// Параметры анимации для переходов
const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

const MyRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isLoaded } = useSelector((state) => state.api); // Данные из Redux

  const currentRoute = PUBLIC_ROUTES.find(
      (route) => route.link === location.pathname
  ) || { preloadImages: [] };

  // Предварительная загрузка изображений
  const preloadImages = (images) => {
    const promises = images.map(
        (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            })
    );

    return Promise.all(promises);
  };

  // Загрузка изображений при смене маршрута
  useEffect(() => {
    setLoading(true);
    setProgress(0);

    preloadImages(currentRoute.preloadImages).then(() => {
      setLoading(false);
    });
  }, [location.pathname]);

  // Управление прогрессом загрузки
  useEffect(() => {
    if (!loading && isLoaded) {
      const timer = setTimeout(() => {
        setProgress(100);
      }, 500); // Плавное исчезновение

      return () => clearTimeout(timer);
    }
  }, [loading, isLoaded]);

  return (
      <>
        <Preloader loading={loading} progress={progress} />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {PUBLIC_ROUTES.map((elem) => (
                <Route
                    path={elem.link}
                    key={elem.id}
                    element={
                      <motion.div
                          variants={pageTransition}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.5 }}
                      >
                        {elem.element}
                      </motion.div>
                    }
                />
            ))}
          </Routes>
        </AnimatePresence>
      </>
  );
};

export default MyRoutes;
