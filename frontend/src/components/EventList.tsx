import React from 'react';
import EventCard from './EventCard';
import { EventItem, OpenModalFunction } from '../types/types';

interface EventListProps {
  events: EventItem[];
  openModal: OpenModalFunction;
}

const EventList: React.FC<EventListProps> = ({ events, openModal }) => {
  return (
    <section className="news">
      {events.map((event, index) => (
        <EventCard key={index} event={event} openModal={openModal} />
      ))}
    </section>
  );
};

export default EventList;