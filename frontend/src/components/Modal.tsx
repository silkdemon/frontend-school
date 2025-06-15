import { useState } from "react";
import axios, { AxiosError } from "axios"; // или используйте fetch
import { CloseModalFunction, EventItem } from "../types/types";

interface ModalProps {
  event: EventItem;
  closeModal: CloseModalFunction;
}

const Modal: React.FC<ModalProps> = ({ event, closeModal }) => {
  const [format, setFormat] = useState<"online" | "offline">("online");
  const [participant, setParticipant] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!participant.trim()) {
      setError("Укажите, кто пойдет на мероприятие");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Отправка данных на сервер
      const response = await axios.post(
        "https://api.example.com/registrations",
        {
          eventId: event.id || event.title, // Лучше использовать уникальный ID
          format,
          participant: participant.trim(),
          comment: comment.trim(),
          registrationDate: new Date().toISOString(),
        }
      );

      if (response.status === 201) {
        closeModal();
        // Можно добавить уведомление об успешной регистрации
      } else {
        throw new Error("Ошибка при регистрации");
      }
    } catch (err) {
      const registrationError = err as AxiosError;
    
      setError(registrationError.response?.statusText || "Не удалось зарегистрироваться");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
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

          {error && <div className="modal-error">{error}</div>}

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
              required
            />
          </div>

          <div className="modal-subcontent input-with-label">
            <label className="label-text">Комментарий</label>
            <textarea
              placeholder="Дополнительная информация"
              className="input comment-textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="modal-subcontent">
            <button
              className={`register-active-btn register-btn ${
                isLoading ? "loading" : ""
              }`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Отправка..." : "Зарегистрироваться"}
            </button>
            <button
              className="cancel-btn"
              onClick={closeModal}
              disabled={isLoading}
            >
              Отменить
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;