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

// Массив маршрутов
const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound /> },
  { id: 2, link: "/", element: <MainPageSSS /> },
  { id: 3, link: "/aboutusfiz", element: <AboutUsFiz /> },
  { id: 4, link: "/vacancies", element: <Vakancies /> },
  { id: 5, link: "/services", element: <Services /> },
  { id: 6, link: "/aboutusur", element: <AboutUsUr /> },
  { id: 7, link: "/aboutcompany", element: <AboutCompany /> },
  { id: 8, link: "/contacts", element: <Contacts /> },
  { id: 9, link: "/capremont", element: <Overhaul /> },
];

// Параметры анимации для переходов
const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 },
  },
};

const MyRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isLoaded } = useSelector((state) => state.api);

  // Функция для загрузки изображений
  const handleMediaLoading = () => {
    const images = Array.from(document.querySelectorAll("img"));

    if (images.length === 0) {
      setProgress(100);
      setLoading(false);
      return;
    }

    let loadedImages = 0;

    const updateProgress = () => {
      loadedImages++;
      setProgress(((loadedImages / images.length) * 100).toFixed(1));
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        updateProgress();
      } else {
        image.addEventListener("load", updateProgress);
        image.addEventListener("error", updateProgress);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", updateProgress);
        image.removeEventListener("error", updateProgress);
      });
    };
  };

  // Обработка смены страницы
  useEffect(() => {
    setLoading(true);
    setProgress(0);
    setShowPreloader(true);
  }, [location.pathname]);

  // Ожидание завершения анимации выхода
  const onExitComplete = () => {
    handleMediaLoading();
  };

  // Обновление видимости прелоадера
  useEffect(() => {
    if (!loading && isLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loading, isLoaded]);

  return (
      <>
        <Preloader loading={showPreloader} progress={progress} />
        <ScrollToTop />
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
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
