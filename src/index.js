import './css/style.css';

import './js/app';

import fetchData from './js/http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}
// TODO: write your code in app.js

getLevel(1);g