import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="overlaynotfound"></div>
      <div className="content">
        <h2>
          <span className="error-code">404</span> - СТРАНИЦА НЕДОСТУПНА
        </h2>
        <h3>ЗАБЛУДИЛИСЬ?</h3>
        <h5>ЗАПРОШЕННАЯ СТРАНИЦА НЕ НАЙДЕНА, И У НАС ЕСТЬ ДОГАДКИ ПОЧЕМУ.</h5>
        <ul>
          <li>Если вы ввели URL-адрес напрямую, убедитесь, что он написан правильно.</li>
          <li>Если вы перешли сюда по ссылке, она устарела.</li>
        </ul>
        <h5>ЧТО ВЫ МОЖЕТЕ СДЕЛАТЬ?</h5>
        <ul>
          <li>Вернуться на предыдущую страницу.</li>
          <li>Для поиска нужной вам продукции используйте строку поиска в верхней части страницы.</li>
          <li>Перейдите по ссылке ниже, чтобы вернуться на правильный путь.</li>
        </ul>
        <button className="action-button">Вернитесь на правильный путь</button>
      </div>
    </div>
  );
};

export default NotFound;
