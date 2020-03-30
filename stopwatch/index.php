<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">

    <link rel="icon" href="fav.png" type="image/x-icon">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css?v=1.11">
    <script src="index.js?v=1.6" defer></script>
    <title>Секундомер</title>
</head>
<body>

<div class="stopwatch_block">
    <div class="stopwatch_header">
        <img src="stopwatch_icon.png" alt="">
        <h1>Секундомер</h1>
    </div>
<div class="stopwatch">

<span>00</span>:
<span>00</span>:
<span>00</span>
</div>
<div class="stopwatch_control">
<a class="sw_control" id="start">СТАРТ</a>
<a class="sw_control" id="pause" >ПАУЗА</a>
<a class="sw_control" id="stop">СТОП</a>
<a class="sw_control" id="record">ЗАПИСЬ</a>
</div>

<div class="stopwatch_record">

    <p class="stopwatch_recordClear" id="stopwatch_recordClear">x</p>
</div>

    
</div>

</body>
</html>