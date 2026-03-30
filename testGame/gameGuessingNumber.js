

// secretNumber -  генерация секретного числа
// guessingNumber - число введенное пользователем
// score - очки
// bestResult - лучший результат

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
   const guessingNumber = Number(document.querySelector('.number-input').value);

   // if empty input
   if (!guessingNumber) {
      document.querySelector('.guess-message').textContent = 'Введите число!'

      // if player win
   } else if (guessingNumber === secretNumber) {
      document.querySelector('.guess-message').textContent = 'Правильно!';
      // css style
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.question').style.width = '50rem'
      // вместо консоли, отображает секретное число на странице
      document.querySelector('.question').textContent = secretNumber;
      // best result
      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }



      // if to low
   } else if (guessingNumber > secretNumber) {
      if (score > 1) {
         document.querySelector('.guess-message').textContent = 'Перебор!'
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.guess-message').textContent = 'Игра окончена!'
         document.querySelector('.score').textContent = 0;
      }

      // if to high
   } else if (guessingNumber < secretNumber) {
      if (score > 1) {
         document.querySelector('.guess-message').textContent = 'Недобор!'
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.guess-message').textContent = 'Игра окончена!'
         document.querySelector('.score').textContent = 0;
      }
   }
})

document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   document.querySelector('.question').textContent = '???';
   document.querySelector('.question').style.width = '25rem'
   document.querySelector('.guess-message').textContent = 'Начни угадывать!';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number-input').value = '';
   document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
   secretNumber = Math.trunc(Math.random() * 20) + 1;
})