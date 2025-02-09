import React from 'react';
import Chips from '../components/Chips';


const AllEventsSection: React.FC = () => {
  return (
    <section>
      <div className="all">
        <h2>Все мероприятия</h2>
        <Chips />
      </div>
    </section>
  );
};

export default AllEventsSection;