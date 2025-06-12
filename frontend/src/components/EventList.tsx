import React from 'react';
import EventCard from './EventCard';
import { EventItem, OpenModalFunction } from '../types/types';

interface EventListProps {
  events: EventItem[];
  openModal: OpenModalFunction;
}

const EventList: React.FC<EventListProps> = ({ events, openModal }) => {
  if (events.length === 0) {
    return <div className="empty-events">Нет доступных событий</div>;
  }

  return (
    <section className="events">
      {events.map((event, index) => (
        <EventCard key={`${event.date}-${index}`} event={event} openModal={openModal} />
      ))}
    </section>
  );
};

export default EventList;