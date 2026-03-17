<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Игра угадайка для двоих игроков</title>
   <link rel="stylesheet" href="style.css">
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>

<body>

   <?php

   include 'menu.php';

   ?>

   <main class="main">
      <div class="container">
         <h1 class="title">Игра угадайка для двоих игроков</h1>

         <div class="box players">

            <div class="player">
               <h2>Игрок 1</h2>
               <p id="info1">Угадайте число от 1 до 10</p>
               <input id="userAnswer1" type="text">
               <a id="button1" href="#" onclick="gues(1);">Ответить</a>
            </div>

            <div class="player">
               <h2>Игрок 2</h2>
               <p id="info2">Угадайте число от 1 до 10</p>
               <input id="userAnswer2" type="text">
               <a id="button2" href="#" onclick="gues(2);">Ответить</a>
            </div>

         </div>
      </div>
   </main>

   <footer class="footer">
      Copyright &copy; <?php echo date('Y '); ?>Юрий Милославский. Все права защищены.
   </footer>


   <script>
      // Новый код для двух игроков
      // Генерация случайных чисел для каждого игрока
      let answer1 = parseInt(Math.random() * 10) + 1;
      let answer2 = parseInt(Math.random() * 10) + 1;

      // Попытки для каждого игрока
      let tryCount1 = 0;
      let tryCount2 = 0;

      // Максимальное количество попыток
      let maxTryCount = 3;

      // Функция для чтения числа из поля игрока
      function readInt(player) {
         let inputId = 'userAnswer' + player;
         return parseInt(document.getElementById(inputId).value);
      }

      // Функция для изменения текста для игрока
      function write(player, text) {
         let infoId = 'info' + player;
         document.getElementById(infoId).innerHTML = text;
      }

      // Функция для скрытия элемента
      function hide(id) {
         document.getElementById(id).style.display = 'none';
      }

      // Основная функция игры
      function gues(player) {
         let userAnswer = readInt(player);
         let answer = player === 1 ? answer1 : answer2;
         let tryCount = player === 1 ? tryCount1 : tryCount2;
         tryCount++;
         if (player === 1) tryCount1 = tryCount;
         else tryCount2 = tryCount;

         if (userAnswer == answer) {
            write(player, '<b>Поздравляю, Наконец то!</b>');
            hide('userAnswer' + player);
            hide('button' + player);
         } else if (tryCount >= maxTryCount) {
            write(player, 'Вы проиграли. <br>Правильный ответ ' + answer);
            hide('userAnswer' + player);
            hide('button' + player);
         } else if (userAnswer > answer) {
            write(player, 'Перебор. <b>Попробуйте ещё раз.</b>');
         } else if (userAnswer < answer) {
            write(player, 'Недобор. <b>Попробуйте ещё раз.</b>');
         }
      }
   </script>
</body>


</html>