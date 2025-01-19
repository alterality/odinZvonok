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
import AboutUsMain from "../components/about/AboutUsMain";
import Contacts from "../components/contacts/Contacts";
import AboutCompany from "../components/aboutcompany/AboutCompany";
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

  // Функция для обработки загрузки медиафайлов
  const handleMediaLoading = () => {
    const mediaFiles = Array.from(document.querySelectorAll("img, video"));
    if (mediaFiles.length === 0) {
      setProgress(100);
      setLoading(false);
      return;
    }

    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const progressValue = ((loadedCount / mediaFiles.length) * 100).toFixed(1);
      setProgress(progressValue);

      if (loadedCount === mediaFiles.length) {
        setLoading(false);
      }
    };

    mediaFiles.forEach((file) => {
      if (file.complete || file.readyState >= 4) {
        updateProgress();
      } else {
        file.addEventListener("load", updateProgress);
        file.addEventListener("error", updateProgress);
      }
    });
  };

  // Запуск проверки медиа при смене маршрута
  useEffect(() => {
    setLoading(true);
    setProgress(0);
    handleMediaLoading();
  }, [location.pathname]);

  // Управление видимостью прелоадера
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
