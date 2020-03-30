<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">

    <link rel="icon" href="fav.png" type="image/x-icon">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css?v=1.17">
    <script src="indexjs.js?v=1.12" defer></script>
    <title>Таймер</title>
</head>
<body>

<div class="countdowntimerAlertBlock">
    <img src="alert.gif" alt="">
</div>

<div class="stopwatch_block">
    <div class="stopwatch_header">
        <img src="countdowntimer_icon.png" alt="">
        <h1>Таймер</h1>
    </div>
<div class="stopwatch">

<span>00</span>:
<span>00</span>:
<span>00</span>
</div>
<div class="stopwatch_control">
<a class="sw_control" id="start">СТАРТ</a>
<a class="sw_control" id="stop">СТОП</a>

</div>
</div>

<div class="countdowntimer_setup_block">
<div class="countdowntimer_setup">
    <p>Часы</p>
    <input type="range" class="countdownRange" min="0" max="60" value="0" class="disc" name="setHours" id="setHours" >
    <p>Минуты</p>
    <input type="range" class="countdownRange" min="0" max="59" value="0" class="disc" name="setMin" id="setMin">
    <p>Секунды</p>
    <input type="range" class="countdownRange" min="0" max="59" value="0" class="disc" name="setSec" id="setSec" >

</div>
<div class="countdowntimer_setup_show">
    <img src="show_icon.png" alt="">
</div>
</div>

</body>
</html>