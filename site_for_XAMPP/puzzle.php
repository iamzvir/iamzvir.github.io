<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Личный сайт Юрбаса</title>
   <link rel="stylesheet" href="style.css">
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>

<body>

   <?php include 'menu.php'; ?>

   <main class="main">
      <div class="container">
         <h1 class="title">Игра в загадки</h1>

         <div class="box">

            <?php

            if (isset($_GET['userAnswer1']) && isset($_GET['userAnswer2']) && isset($_GET['userAnswer3'])) {
               $userAnswer = $_GET['userAnswer1'];
               $score = 0;
               if ($userAnswer == 'полный' || $userAnswer == 'Полный')
                  $score++;


               $userAnswer = $_GET['userAnswer2'];
               if ($userAnswer == 'хуй' || $userAnswer == 'Хуй')
                  $score++;


               $userAnswer = $_GET['userAnswer3'];
               if ($userAnswer == 'ни одного' || $userAnswer == 'Ни одного')
                  $score++;

               echo 'Вы угадали ' . $score . ' загадок';
            }



            ?>

            <form method='GET'>

               <p>Сколько бегемотов поместится в запорожец?</p>
               <input type="text" name="userAnswer1">

               <p>Кто спутился с горы или с бугра?</p>
               <input type="text" name="userAnswer2">

               <p>Сколько жирафов поместится в запорожец?</p>
               <input type="text" name="userAnswer3">

               <br>
               <input type="submit" value='Ответить'>

            </form>

         </div>
      </div>
   </main>

   <footer class="footer">
      Copyright &copy; <?php echo date('Y '); ?>Юрий Милославский. Все права защищены.
   </footer>

</body>


</html>