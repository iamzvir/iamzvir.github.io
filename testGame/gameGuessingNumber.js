

// secretNumber -  генерация секретного числа
// guessingNumber - число введенное пользователем
// score - очки
// bestResult - лучший результат

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


// Универсальные Функции:

// ф-ция для замены текста в параграфе - "Начни угадывать!"
const displayGuessMessage = function (message) {
   return document.querySelector('.guess-message').textContent = message;
}

// ф-ция для замены текста в блоке - " ???  (Секретное число)"
const displayQuestion = function (question) {
   document.querySelector('.question').style.width = question
   document.querySelector('.question').textContent = question;
}

// ф-ция для замены очков в параграфе с классом - ".score"
const displayScore = function (points) {
   document.querySelector('.score').textContent = points;
}

// ф-ция для замены backgroundColor на странице (body)
const displayColor = function (bgColor) {
   document.querySelector('body').style.backgroundColor = bgColor;
}


// События которые будут происходить при клике на кнопку - "Проверить!"
document.querySelector('.check').addEventListener('click', function () {
   const guessingNumber = Number(document.querySelector('.number-input').value);

   // if empty input
   if (!guessingNumber) {
      displayGuessMessage('Введите число!');

      // if player win
   } else if (guessingNumber === secretNumber) {
      displayGuessMessage('Правильно!');
      displayQuestion('50rem');
      displayQuestion(secretNumber);
      // css style
      displayColor('green')
      // best result
      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }


      // Refactoring here!
      // Когда в инпуте не правильный результат
   } else if (guessingNumber !== secretNumber) {
      if (score > 1) {
         displayGuessMessage(guessingNumber > secretNumber ? 'Перебор!' : 'Недобор!');
         score--;
         displayScore(score);
      } else {
         displayGuessMessage('Игра окончена!');
         displayScore(0);
      }
   }
})

// Кнопка "Сначала!"
document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   displayQuestion('25rem');
   displayQuestion('???');
   displayGuessMessage('Начни угадывать!');
   displayScore(score);
   document.querySelector('.number-input').value = '';
   displayColor('rgb(0, 0, 0)');
   secretNumber = Math.trunc(Math.random() * 20) + 1;
})