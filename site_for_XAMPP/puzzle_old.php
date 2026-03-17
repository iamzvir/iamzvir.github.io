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

   <?php

   include 'menu.php';

   ?>

   <main class="main">
      <div class="container">
         <h1 class="title">Игра в загадки</h1>

         <div class="box">


            <?php

            // Новый код (POST, с проверкой ?? ''):
            $userAnswer = $_POST['userAnswer1'] ?? '';
            $score = 0;
            if ($userAnswer == 'полный' || $userAnswer ==  'полный запорожец') {
               $score++;
            }

            $userAnswer = $_POST['userAnswer2'] ?? '';
            if ($userAnswer == 'хуй' || $userAnswer == 'хуй') {
               $score++;
            }

            $userAnswer = $_POST['userAnswer3'] ?? '';
            echo $userAnswer;
            if ($userAnswer == '16' || $userAnswer == '39') {
               $score++;
            }

            echo 'Вы отгадали ' . $score . ' загадок';

            ?>


            <!-- Старый код формы (GET с value): -->
            <!-- При методе GET поля инпут сохраняют введенные данные после отправки, по этому и была проблема с числовым типом, который не был видет, но оставался при этом в переменной  -->

            <!-- <form method='GET'>
            
               <p>Сколько бегемотов поместится в запорожец?</p>
               <input type="text" name="userAnswer1">

               <p>Кто спутился с горы или с бугра?</p>
               <input type="text" name="userAnswer2">

               <p>7 + 9 = ?</p>
               <input type="text" name="userAnswer3"> // после нажатия отправить, число исчезает из поля ввода, но оно по прежнему передается в переменную

               <br>
               <input type="submit" value='Ответить'>
            </form> -->


            <!-- Новый код формы (POST без value): -->

            <!-- При методе POST поля инпут не сохраняют где то в глубинах браузера введенные числовые данные после отправки -->
            <form method='POST'>
               <p>Сколько бегемотов поместится в запорожец?</p>
               <input type="text" name="userAnswer1">

               <p>Кто спутился с горы или с бугра?</p>
               <input type="text" name="userAnswer2">

               <p>7 + 9 = ?</p>
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



   <!-- Старый JS код, который заменил PHP выше -->


   <!-- <script>
      let userAnswer = null;
      let score = 0;

      function checkAnswer(inputId, answers) {
         userAnswer = document.getElementById(inputId).value;
         userAnswer = userAnswer.toLowerCase();

         for (let i = 0; i < answers.length; i++) {
            if (userAnswer == answers[i]) {
               score++;
               break;
            }
         }
      }

      function checkAnswers() {

         // 1й арг передается в параметр "inputId". 2й арг в виде МАССИВА передается в параметр "answers"

         checkAnswer('userAnswer1', ['полный', 'полный запорожец']);
         checkAnswer('userAnswer2', ['междугрядочный пяткошевелитель', 'хуйня какая то']);
         checkAnswer('userAnswer3', ['за стеклом', 'заебали твои загадки']);

         alert('Вы отгадали ' + score + ' загадок');
      }
   </script> -->
</body>


</html>