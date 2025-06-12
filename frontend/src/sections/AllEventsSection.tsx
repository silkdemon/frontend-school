import React from "react";
import Chips from "../components/Chips";

interface AllEventsSectionProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

const AllEventsSection: React.FC<AllEventsSectionProps> = ({ 
  currentCategory, 
  onCategoryChange 
}) => {
  return (
    <section>
      <div className="all">
        <h2>Все мероприятия</h2>
        <Chips 
          currentCategory={currentCategory} 
          onCategoryChange={onCategoryChange} 
        />
      </div>
    </section>
  );
};

export default AllEventsSection;
