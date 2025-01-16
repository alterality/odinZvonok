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
      delay: 0.25, // Задержка в начале анимации
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      delay: 0.25, // Задержка при выходе (если необходимо)
    },
  },
};

const MyRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // Для отслеживания загрузки медиа
  const [showPreloader, setShowPreloader] = useState(false); // Управление видимостью прелоадера
  const [dataLoaded, setDataLoaded] = useState(false); // Для отслеживания загрузки данных API

  const { isLoaded } = useSelector((state) => state.api); // Данные из Redux

  // Функция для обработки загрузки медиа
  const handleMediaLoading = () => {
    const mediaFiles = [...document.querySelectorAll("img, video")];
    setLoading(true);

    const promises = mediaFiles.map(
        (file) =>
            new Promise((resolve) => {
              if (file.complete || file.readyState >= 4) {
                resolve();
              } else {
                const onLoad = () => {
                  file.removeEventListener("load", onLoad);
                  file.removeEventListener("loadeddata", onLoad);
                  resolve();
                };
                file.addEventListener("load", onLoad);
                file.addEventListener("loadeddata", onLoad);
              }
            })
    );

    Promise.all(promises).then(() => {
      setLoading(false);
    });
  };

  // Обработка смены маршрута
  useEffect(() => {
    setShowPreloader(true); // Показываем прелоадер при смене маршрута
    handleMediaLoading(); // Запускаем проверку загрузки медиа
  }, [location.pathname]);

  // Обновление статуса данных API
  useEffect(() => {
    setDataLoaded(isLoaded);
  }, [isLoaded]);

  // Управление видимостью прелоадера
  useEffect(() => {
    if (loading || !dataLoaded) {
      setShowPreloader(true); // Прелоадер видим, пока идет загрузка
    } else {
      const timer = setTimeout(() => {
        setShowPreloader(false); // Скрываем прелоадер после завершения загрузки
      }, 500); // Минимальная задержка (можно настроить)

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }
  }, [loading, dataLoaded]);

  return (
      <>
        <Preloader loading={showPreloader} />
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
