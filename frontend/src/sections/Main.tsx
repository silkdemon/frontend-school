import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import EventList from "../components/EventList";
import { EventItem, OpenModalFunction } from "../types/types";
import AllEventsSection from "./AllEventsSection";
import MainSection from "./MainSection";
import { fetchEvents } from "../api/mockApi";

interface MainProps {
  openModal: OpenModalFunction;
}

const Main: React.FC<MainProps> = ({ openModal }) => {
  const [currentCategory, setCurrentCategory] = useState<string>('IT Academy');
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents(currentCategory);
        setEvents(data);
      } catch (err) {
        setError("Ошибка при загрузке событий");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [currentCategory]);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  if (loading) {
    return <div className="loader">Загрузка событий...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <main>
      <MainSection />
      <AllEventsSection 
        currentCategory={currentCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <EventList events={events} openModal={openModal} />
    </main>
  );
};

export default Main;
