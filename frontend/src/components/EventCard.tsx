import React from "react";
import { EventItem, OpenModalFunction } from "../types/types";

interface EventCardProps {
  event: EventItem;
  openModal: OpenModalFunction;
}

const EventCard: React.FC<EventCardProps> = ({ event, openModal }) => {
  return (
    <div className="event-card">
      <div className="news-parent">
        <div className="news-child first">
          <p className="date-text">{event.date}</p>
          <div className="mobile">
            <img src="/assets/heart.svg" alt="like-icon" />
            <p className="like-number">{event.likes}</p>
          </div>
        </div>
        <div className="news-child second">
          <p className="heading-title">{event.title}</p>
          <p className="news-small-text">{event.description}</p>
        </div>
        <div className="news-child third">
          <img src="/assets/heart.svg" alt="like-icon" />
          <p className="like-number">{event.likes}</p>
        </div>
        <div className="news-child fourth">
          {event.authors.map((author, i) => (
            <p className="link-text" key={i}>
              {author}
            </p>
          ))}
        </div>
        <div className="news-child fifth">
          <button
            className={`register-btn ${
              !event.registrationActive ? "disabled" : ""
            }`}
            onClick={() => event.registrationActive && openModal()}
            disabled={!event.registrationActive}
          >
            {event.registrationActive
              ? "Зарегистрироваться"
              : "Регистрация закрыта"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
