import _ from "lodash";
import { EventItem } from "../types/types";

// Функции генерации случайных данных
const getRandomBoolean = () => Math.random() >= 0.5;
const getRandomNumberInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomDate = () => {
  const randomDate = new Date(Date.now() - Math.random() * 1e12);
  return `${randomDate.getDate().toString().padStart(2, "0")}.${(
    randomDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${randomDate.getFullYear()}`;
};

const getRandomString = () => {
  const textArray = [
    "Веницианский карнавал танцев и богохульных плясок: смотрим вместе",
    "Солнцестоим вместе или как провести выходные продуктивно",
    // ... остальные тексты
  ];
  return _.sample(textArray) || textArray[0];
};

const getRandomName = () => {
  const names = ["Петр", "Василий", "Николай", "Олег", "Павел"];
  const surnames = ["Иванов", "Петров", "Гагарин", "Сюткин", "Грозный"];
  return `${_.sample(names)} ${_.sample(surnames)}`;
};

// Генерация случайного события
const getRandomEvent = (): EventItem => {
  const numAuthors = getRandomNumberInRange(1, 3);
  const authors = Array.from({ length: numAuthors }, getRandomName);

  return {
    date: getRandomDate(),
    likes: getRandomNumberInRange(0, 100),
    title: getRandomString(),
    description: getRandomString(),
    authors,
    registrationActive: getRandomBoolean(),
  };
};

// Имитация API-запроса
export const fetchEvents = (category: string): Promise<EventItem[]> => {
  return new Promise((resolve) => {
    // Имитация задержки сети
    setTimeout(() => {
      const events = Array.from({ length: 10 }, () => ({
        ...getRandomEvent(),
        category: category, // добавляем категорию к событию
      }));
      resolve(events);
    }, 800); // 0.8 секунды задержки
  });
};
