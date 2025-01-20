import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
import { useSelector } from "react-redux";

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
  const [loading, setLoading] = useState(true); // Статус загрузки медиа
  const [showPreloader, setShowPreloader] = useState(true); // Видимость прелоадера
  const [progress, setProgress] = useState(0); // Прогресс загрузки
  const { isLoaded } = useSelector((state) => state.api); // Данные из Redux

  // Функция для обработки загрузки изображений
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
      const progressValue = ((loadedImages / images.length) * 100).toFixed(1);
      setProgress(progressValue);

      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach((image) => {
      // Удаляем старые обработчики
      image.onload = null;
      image.onerror = null;

      if (image.complete) {
        updateProgress();
      } else {
        image.onload = updateProgress;
        image.onerror = updateProgress;
      }
    });
  };

  // Обработка смены
  useEffect(() => {
    setLoading(true);
    setProgress(0);

    // Дожидаемся завершения анимации выхода
    const timer = setTimeout(() => {
      handleMediaLoading();
    }, 500); // Задержка для завершения анимации (подбирается экспериментально)
    setShowPreloader(true)
    return () => clearTimeout(timer); // Очистка таймера при размонтировании

  }, [location.pathname]);

  // Обновление видимости прелоадера
  useEffect(() => {
    if (!loading && isLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false); // Скрываем прелоадер
      }, 500); // Минимальная задержка

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }
  }, [loading, isLoaded]);

  return (
      <>
        <Preloader loading={showPreloader} progress={progress} />
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
