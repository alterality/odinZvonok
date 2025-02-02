import { useEffect, useState } from "react";

/**
 * Хук для предварительной загрузки изображений
 * @param {string[]} imageUrls - Массив URL изображений для загрузки
 * @returns {boolean} - true, если все изображения загружены
 */
const useImagePreloader = (imageUrls) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!imageUrls || imageUrls.length === 0) {
            setIsLoaded(true);
            return;
        }

        let loadedCount = 0;

        const onImageLoad = () => {
            loadedCount++;
            if (loadedCount === imageUrls.length) {
                setIsLoaded(true);
            }
        };

        const onImageError = () => {
            console.error("Ошибка при загрузке изображения.");
            loadedCount++;
            if (loadedCount === imageUrls.length) {
                setIsLoaded(true);
            }
        };

        const images = imageUrls.map((url) => {
            const img = new Image();
            img.src = url;
            img.onload = onImageLoad;
            img.onerror = onImageError;
            return img;
        });

        return () => {
            images.forEach((img) => {
                img.onload = null;
                img.onerror = null;
            });
        };
    }, [imageUrls]);

    return isLoaded;
};

export default useImagePreloader;
