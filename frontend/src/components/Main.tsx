import '../styles/Main.css';
import Modal from './Modal';

const Main = ({ openModal }) => {
  return (
    <main>
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

      <section>
        <div className="all">
          <h2>Все мероприятия</h2>
          <ul className="chips">
            <li className="chip chip-active">IT Academy</li>
            <li className="chip chip-inactive">Маркетинг</li>
            <li className="chip chip-inactive">Retail</li>
            <li className="chip chip-inactive">Остальные</li>
          </ul>
        </div>
      </section>

      <section className="news">
        {[
          {
            date: "25.05.2020",
            likes: 11,
            title: "Веницианский карнавал танцев и богохульных плясок: смотрим вместе",
            description: "К посещению приглашаются сотрудники 18+",
            authors: ["Иннокентий Жданов", "Поликарпий Осипов"],
            registrationActive: true,
          },
          {
            date: "25.05.2020",
            likes: 110,
            title: "Солнцестоим вместе или как провести выходные продуктивно",
            description: "Если вы любите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.",
            authors: ["Николай Острецов"],
            registrationActive: true,
          },
          {
            date: "25.05.2020",
            likes: 11,
            title: "Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров",
            description: "Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!",
            authors: ["Акакий Шопский"],
            registrationActive: true,
          },
          {
            date: "25.05.2020",
            likes: 11,
            title: "Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?",
            description: "Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать",
            authors: ["Иван Стручков"],
            registrationActive: true,
          },
        ].map((event, index) => (
          <div className="news-parent" key={index}>
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
                <p className="link-text" key={i}>{author}</p>
              ))}
            </div>
            <div className="news-child fifth">
              <button
                className={`register-btn ${!event.registrationActive ? "register-inactive-btn" : ""}`}
                onClick={openModal}
              >
                {event.registrationActive ? "Зарегистрироваться" : "Регистрация закрыта"}
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;