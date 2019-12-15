<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Chart</title>
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <!-- JS: CHART-JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="/style.css">
    <!-- JS: MY SCRIPT -->
    <script src="/script.js" charset="utf-8"></script>

    <?php
    $level = $_GET["level"];
      if ($level == "guest") {
        echo '<style type="text/css">
          .wrapper {
            display: block;
            background-color:white;
            border-radius:20px;
          }
          #presentazione{
           display:none;
          }
          </style>';
      } else if ($level == 'employee') {
        echo '<style type="text/css">
          .wrapper, .wrapper2 {
            display: block;
            background-color:white;
            border-radius:20px;
          }
          #presentazione{
           display:none;
          }
          </style>';
      } else if ($level == 'clevel') {
        echo '<style type="text/css">
          .wrapper, .wrapper2, .wrapper3 {
            display: block;
            background-color:white;
            border-radius:20px;
          }
          #presentazione{
           display:none;
          }
          </style>';
      }
    ?>
  </head>
  <body>

   <div id="presentazione">
    <span>Per accedere ai dati specifica se sei un guest , un employee o un clevel nell'url. </span>
   </div>

   <!-- step 1 -->
    <div class="wrapper">
     <canvas id="myChart"></canvas>
    </div>
    <!-- step 2 -->
    <div class="wrapper2">
     <canvas id="myChart2"></canvas>
    </div>
    <!-- step 3 -->
    <div class="wrapper3">
     <canvas id="myChart3"></canvas>
    </div>

 </body>
</html>
