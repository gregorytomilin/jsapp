

var control = document.querySelectorAll('a');
var timeFields = document.querySelectorAll('span');
var recordField = document.querySelector('.stopwatch_record');
var ms = 0;
var sec = 0;
var min = 0;
var recordNum = 0;
let swTimer;
$ms = timeFields[2];
$sec = timeFields[1];
$min = timeFields[0];


for (var i=0; i<control.length; i++) {
    control[i].addEventListener('click', function (e) {

       switch (e.target.getAttribute('id')) {
           case 'start': start();
           break;
           case 'pause': pause();
           break;
           case 'stop': stop();
           break;
           case 'record': record();
           break;
       }
    }
    )
}

function start() {

    control[0].id = 'nonpause';
    // control[0].innerText = 'ПАУЗА';

    swTimer = setInterval(function () {

        ms++;
        if (ms>99){
            ms=0;
            sec++;

            if (sec>59){
                sec=0;
                min++;
                if(min<10)  timeFields[0].innerText = `0${min}`;
                else {timeFields[0].innerText = min;}
            }

            sec<10 ? timeFields[1].innerText = `0${sec}`: timeFields[1].innerText = sec;
        }
        ms<10 ? timeFields[2].innerText = `0${ms}`: timeFields[2].innerText = ms;

    }, 10);
}

function pause() {
    control[0].id = 'start';
    // control[0].innerText = 'СТАРТ';

    clearTimeout(swTimer);
}

function stop() {
    control[0].id = 'start';
    // control[0].innerText = 'СТАРТ';
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(swTimer);

    $ms.innerText = `0${ms}`;
    $sec.innerText = `0${sec}`;
    $min.innerText = `0${min}`;
}

function record() {
    recordNum++;
    recordField.style.display = 'block';
    recordField.innerHTML += `<div class = "recordField">${recordNum}) ${$min.innerText}:${$sec.innerText}:${$ms.innerText}<div>`;
    records = recordField.children;
    console.log(records.length);


    var sw_recordClear = document.getElementById('stopwatch_recordClear');
    sw_recordClear.addEventListener("click", confirmDelete);
}


function recordClear() {
    // recordField.style.display = 'none';


    for (var i=records.length-1; i>0 ;i--) {
        records[i].remove();
    }
    recordNum = 0
    recordField.style.display = 'none';
}


function confirmDelete() {
    if (confirm("Вы подтверждаете удаление?")) {
        recordClear()
    } else {
    }

}





