import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator-wrapper">
      <div className="error-message-wrapper">
        <div className="error-message-title">Ошибка</div>
        <div>Билеты не загружены <br/> Перезагрузите страницу!</div>
      </div>
    </div>
  );
};

export default ErrorIndicator;
