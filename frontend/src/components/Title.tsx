import React from 'react';

const Title: React.FC = () => {
  return (
    <section className="main-item">
      <div className="main-item-info">
        <p>Ближайшее мероприятие</p>
        <div className="main-title">
          <h1>Школа по фронтенду</h1>
          <p>25.05.2020 · Офис в Нагатино</p>
        </div>
        <button className="course-btn">Записаться на курс</button>
      </div>
      <div className="main-images">
        <img
          src="/assets/girl-on-rocket.svg"
          alt="girl on a rocket"
          className="girl-on-rocket"
        />
      </div>
    </section>
  );
};

export default Title;