import { useEffect } from 'react';
import '../styles/Modal.css'; // Импортируем стили


const Modal = ({ closeModal }) => {

  return (
    <div className="modal-container overlay">
      <section className="modal">
        <div className="modal-content">
          <div className="modal-title-container">
            <h1 className="modal-title">Запись на мероприятие</h1>
            <img
              src="../assets/close-icon.svg"
              alt="close modal icon"
              className="close-icon"
              onClick={closeModal}
            />
          </div>
          <p className="modal-subtitle">
            Выберите необходимые параметры мероприятия
          </p>
          <div className="modal-main modal-subcontent">
            <h2 className="modal-news-title">
              Венецианский карнавал танцев и богохульных плясок: смотрим вместе
            </h2>
            <p className="modal-news-subtitle">
              К посещению приглашаются сотрудники 18+
            </p>
          </div>
          <ul className="chips modal-subcontent">
            <li className="modal-chip chip-active">Онлайн</li>
            <li className="modal-chip chip-inactive">Оффлайн: офис Нагатино</li>
          </ul>
          <div className="modal-subcontent input-with-label">
            <label className="label-text">Кто пойдет на мероприятие</label>
            <input
              type="text"
              placeholder="Логин или имя сотрудника"
              className="input"
            />
          </div>
          <div className="modal-subcontent input-with-label">
            <label className="label-text">Комментарий</label>
            <textarea
              placeholder="Дополнительная информация"
              className="input comment-textarea"
            ></textarea>
          </div>
          <div className="modal-subcontent">
            <button className="register-active-btn register-btn">
              Зарегистрироваться
            </button>
            <button className="cancel-btn"  onClick={closeModal}>
              Отменить
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
