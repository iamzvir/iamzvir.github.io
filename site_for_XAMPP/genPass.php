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
         <h1 class="title">Генератор паролей</h1>

         <div class="box">

            <p class="text">Введите число которое определит длину вашего пароля:</p>
            <input id="userInput" type="text">

            <a id="button" href="#" onclick="generatePassword();">Ответить</a>
            <div id="info"></div>
         </div>
      </div>
   </main>

   <footer class="footer">
      Copyright &copy; <?php echo date('Y '); ?>Юрий Милославский. Все права защищены.
   </footer>


   <script>
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      function write(text) {
         document.getElementById('info').innerHTML = text;
      }

      function hide(id) {
         document.getElementById(id).style.display = 'none';
      }

      function generatePassword() {
         let userNumb = +document.getElementById('userInput').value;
         if (isNaN(userNumb) || userNumb <= 0) {
            write("Пожалуйста, введите положительное число.");
            return;
         }
         let passStr = '';
         for (let i = 0; i < userNumb; i++) {
            let randomChar = charset[Math.floor(Math.random() * charset.length)];
            passStr += randomChar;
         }
         write("Ваш пароль: " + passStr);
         hide('button');
      }
   </script>

   <!-- 
   Math.random(): генерирует число, например, 
   Math.random() * charset.length: умножает на длину строки, получая число от 0 до 1
   Math.floor(...): округляет результат вниз до ближайшего целого, получая случайный индекс.
   charset[...]: выбирает символ по полученному индексу. 
   -->
</body>


</html>