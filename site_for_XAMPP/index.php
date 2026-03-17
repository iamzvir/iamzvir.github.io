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
   
   <!-- Перед тем как подключать отдельные блоки кода к конкретному файлу, расширения у всех должны быть .php -->
   
   <!-- вынес меню в отдельный файл и подключил здесь через include -->
  <?php include 'menu.php';?>

   <main class="main">
      <div class="container">
         <h1 class="title">Сайтэлло</h1>

         <div class="content-section">
            <div class="profile">
               <img src="images/yurbas.png" alt="Фото Юрия Милославского" class="profile-img">
               <div class="text">
                  <p class="greeting">
                     <strong>Добрый день!</strong> Меня зовут <em>Юрий Милославский</em>. Делать мне нечего и вот один раз, решил написать сайт, полный атас.
                  </p>
                  <p>
                     В этом мне хорошо помогла, песня группы Сектора, а именно она <a href="https://youtu.be/CPhoUjcB10Q" target="_blank" class="link">Сектор Газа - Интродукция</a>.
                  </p>
                  <p>
                     Так же на этом сайте вы сможете сыграть в несколько игр, которые я написал:
                     <a href="#" class="link">Главная</a>,
                     <a href="puzzle.php" class="link">Загадки</a>,
                     <a href="gues.php" class="link">Угадайка</a>.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </main>

   <footer class="footer">
      <!-- встраивание php кода в hnml разметку -->
      Copyright &copy; <?php echo date('Y '); ?>Юрий Милославский. Все права защищены.
   </footer>

</body>


</html>

