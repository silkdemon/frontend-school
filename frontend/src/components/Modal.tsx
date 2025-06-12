import { useState } from "react";
import "../styles/Modal.css"; // Импортируем стили
import { CloseModalFunction, EventItem } from "../types/types";

interface ModalProps {
  event: EventItem;
  closeModal: CloseModalFunction;
}

const Modal: React.FC<ModalProps> = ({ event, closeModal }) => {
  const [format, setFormat] = useState<"online" | "offline">("online");
  const [participant, setParticipant] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Здесь будет логика отправки данных
    console.log({
      eventId: event.title,
      format,
      participant,
      comment,
    });
    closeModal();
  };

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
            <h2 className="modal-news-title">{event.title}</h2>
            <p className="modal-news-subtitle">{event.description}</p>
          </div>
          <ul className="chips modal-subcontent">
            <li
              className={`modal-chip ${
                format === "online" ? "chip-active" : "chip-inactive"
              }`}
              onClick={() => setFormat("online")}
            >
              Онлайн
            </li>
            <li
              className={`modal-chip ${
                format === "offline" ? "chip-active" : "chip-inactive"
              }`}
              onClick={() => setFormat("offline")}
            >
              Оффлайн: офис Нагатино
            </li>
          </ul>
          <div className="modal-subcontent input-with-label">
            <label className="label-text">Кто пойдет на мероприятие</label>
            <input
              type="text"
              placeholder="Логин или имя сотрудника"
              className="input"
              value={participant}
              onChange={(e) => setParticipant(e.target.value)}
            />
          </div>
          <div className="modal-subcontent input-with-label">
            <label className="label-text">Комментарий</label>
            <textarea
              placeholder="Дополнительная информация"
              className="input comment-textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-subcontent">
            <button
              className="register-active-btn register-btn"
              onClick={handleSubmit}
            >
              Зарегистрироваться
            </button>
            <button className="cancel-btn" onClick={closeModal}>
              Отменить
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
