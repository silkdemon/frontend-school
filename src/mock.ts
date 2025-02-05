
const getRandomBoolean = () => {
  return _.sample([true, false]);
};

const getRandomDate = () => {
  const randomDate = new Date(new Date().getTime() - Math.random() * 1e12);
  const formattedRandomDate = `${randomDate.getFullYear()}/${
    randomDate.getMonth() + 1
  }/${randomDate.getDate()}`;
  return formattedRandomDate;
};

const getRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomString = () => {
  const textArray = [
    "Веницианский карнавал танцев и богохульных плясок: смотрим вместе",
    "Солнцестоим вместе или как провести выходные продуктивно",
    "Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров",
    "Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?",
    "К посещению приглашаются сотрудники 18-",
    "Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.",
    "Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!",
    "Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать",
  ];

  return _.sample(textArray);
};

const getRandomName = () => {
  const name = ["Петр", "Василий", "Николай", "Олег", "Павел"];
  const surname = ["Иванов", "Петров", "Гагарин", "Сюткин", "Грозный"];
  const randomFullName = _.sample(name) + " " + _.sample(surname);
  return randomFullName;
};

const getRandomEvent = () => {
  const event = {
    date: getRandomDate(),
    title: getRandomString(),
    description: getRandomString(),
    countLikes: getRandomNumberInRange(0, 100),
    names: getRandomName(),
    registrationDisabled: getRandomBoolean(),
  };

  return event;
};

const getEventsArray = () => {
  const arr = new Array(10);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = getRandomEvent();
  }
  return arr;
};

console.log(getEventsArray());
