'use strict';

// Обращение к елементам DOM:
const score0Element = document.getElementById('score--0'); // Основные очки игрока 0
const score1Element = document.getElementById('score--1'); // Основные очки игрока 1
const current0Element = document.getElementById('current--0'); // тег параграфа "Текущие очки"
const current1Element = document.getElementById('current--1'); // тег параграфа "Текущие очки"
const diceElement = document.querySelector('.dice'); // изображение кубика
const btnNew = document.querySelector('.btn--new'); // кнопка "Новая игра"
const btnRoll = document.querySelector('.btn--roll'); // кнопка "Бросить кубик"
const btnHold = document.querySelector('.btn--hold'); // кнопка "Оставить"
const player0 = document.querySelector('.player--0'); // часть страницы 1го игрока
const player1 = document.querySelector('.player--1'); // часть страницы 2го игрока


// Установка изначальных значений:
score0Element.textContent = 0; // Сброс основных очков игрока 0
score1Element.textContent = 0; // Сброс основных очков игрока 1
diceElement.classList.add('hidden'); // Скрыть изображение кубика


// Текущие очки пользователя:
const totalScors = [0, 0]; // Для значений "итого очков" для обеих игроков, первый индекс массива это очки игрока player--0, а второй индекс это очки игрока player--1.
let currentScore = 0; // параграф отображающий колличнство текущих очков на странице
let activePlayer = 0; // 0 это - активный игрок player--0, он по умолчанию.
let isPlaying = true; // Переменная состояния


/*** Универсальные ф-ции ***/

// Ф-ция переключения на активного пользователя
const switchActivePlayer = function () {
   currentScore = 0;
   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   diceElement.classList.toggle('hidden');
   activePlayer = activePlayer === 0 ? 1 : 0;
   player0.classList.toggle('player--active');
   player1.classList.toggle('player--active');
}

// Ф-ция сброса к дефолтным значениям
const initGame = function () {
   isPlaying = true;
   currentScore = 0;
   totalScors[0] = 0;
   totalScors[1] = 0;
   score0Element.textContent = 0;
   score1Element.textContent = 0;
   document.getElementById(`name--${activePlayer}`).textContent = `Игрок ${activePlayer + 1}`
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
   document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
   document.getElementById(`current--${activePlayer}`).textContent = 0;
   diceElement.classList.add('hidden');
}


// функционал кнопки "Бросить кубик"
btnRoll.addEventListener('click', function () {
   if (isPlaying) {
      const diceNumber = Math.trunc(Math.random() * 6) + 1;
      diceElement.classList.remove('hidden');
      diceElement.src = `dice${diceNumber}.png`;

      if (diceNumber !== 1) {
         currentScore += diceNumber;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      } else {
         switchActivePlayer();
      }
   }
});

// функционал кнопки "Оставить"
btnHold.addEventListener('click', function () {

   if (isPlaying) {
      totalScors[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = totalScors[activePlayer];
      if (totalScors[activePlayer] >= 100) {
         isPlaying = false;
         btnHold.classList.toggle('hidden');
         btnRoll.classList.toggle('hidden');
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         diceElement.classList.add('hidden');
         document.getElementById(`name--${activePlayer}`).textContent = `Игрок ${activePlayer + 1} победил!`
      } else {
         switchActivePlayer();
         diceElement.classList.add('hidden');
      }
   }
});


// функционал кнопки "Новая игра"
btnNew.addEventListener('click', initGame);
