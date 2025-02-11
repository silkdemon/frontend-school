import React from 'react';
import '../styles/Main.css';
import EventList from '../components/EventList';
import { EventItem, OpenModalFunction } from '../types/types';
import AllEventsSection from './AllEventsSection';
import MainSection from './MainSection';


interface MainProps {
  openModal: OpenModalFunction;
}
// state для рендеринга данных в таблице
// жизненный цикл реакт компонента
const Main: React.FC<MainProps> = ({ openModal }) => {
  const events: EventItem[] = [
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
  ];

  return (
    <main>
      <MainSection />
      <AllEventsSection />
      <EventList events={events} openModal={openModal} />
    </main>
  );
};

export default Main;