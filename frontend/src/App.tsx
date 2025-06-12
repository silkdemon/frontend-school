import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./sections/Main";
import Modal from "./components/Modal";
import { EventItem } from "./types/types";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);


  const openModal = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Main openModal={openModal} />
      {isModalOpen && selectedEvent && (
        <Modal event={selectedEvent} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
