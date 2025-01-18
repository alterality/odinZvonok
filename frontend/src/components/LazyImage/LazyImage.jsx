import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Отключаем наблюдение после загрузки
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : ""}
            alt={alt}
            loading="lazy"
            {...props}
        />
    );
};

export default LazyImage;
