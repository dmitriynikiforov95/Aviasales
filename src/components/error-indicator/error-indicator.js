import React from "react";
import s from "./error-indicator.module.css";

const ErrorIndicator = () => {
  return (
    <div className={s.container}>
      <div className={s.messageWrapper}>
        <p className={s.title}>Ошибка</p>
        <div>Билеты не загружены <br/> Перезагрузите страницу!</div>
      </div>
    </div>
  );
};

export default ErrorIndicator;
