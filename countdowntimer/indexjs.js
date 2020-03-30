

var control = document.querySelectorAll('a');
var timeFields = document.querySelectorAll('span');
var CTsetUpInput = document.querySelectorAll('.countdownRange');
var CTsetUpBlock = document.querySelector('.countdowntimer_setup_block');
var CTsetUpBlockShow = document.querySelector('.countdowntimer_setup_show');
var modalAlert = document.querySelector('.countdowntimerAlertBlock');



$sec = timeFields[2];
$min = timeFields[1];
$hr = timeFields[0];

$secSet = CTsetUpInput[2];
$minSet = CTsetUpInput[1];
$hrSet = CTsetUpInput[0];

CTsetUpBlockShow.addEventListener('click', setUpShow);

function setUpHide () {
    CTsetUpBlock.style.marginTop = -190 + 'px';
    CTsetUpBlockShow.removeEventListener('click',setUpHide);
    CTsetUpBlockShow.addEventListener('click',setUpShow);
}
function setUpShow () {
    CTsetUpBlock.style.marginTop = 0 + 'px';
    CTsetUpBlockShow.removeEventListener('click',setUpShow);
    CTsetUpBlockShow.addEventListener('click',setUpHide);
}




CTsetUpInput.forEach((item, i) => {
    item.addEventListener("input", () => {
        item.value < 10 ? timeFields[i].innerHTML = '0'+ item.value : timeFields[i].innerHTML = item.value;
        clearInterval(cdTimer);
        start();

        // timeFields[i].innerHTML = item.value;
    });
});

control[0].addEventListener('click', start);
control[1].addEventListener('click', audioPause);



modalAlert.addEventListener('click',()=>{
    audio.pause();
    pause();
    modalAlert.style.display = 'none';
});



function start() {
    control[0].innerHTML = 'ПАУЗА';
    control[0].removeEventListener('click',start);
    control[0].addEventListener('click', pause);
    sec = +$sec.innerText;
    min = +$min.innerText;
    hr  = +$hr.innerText;


    cdTimer = setInterval(function () {
        audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '2.mp3'; // Указываем путь к звуку "клика"
        audio.volume = 0.2;


        if (hr == 0 && min == 0 && sec == 0 ) {

            $sec.innerText = '00';
            $min.innerText = '00';
            $hr.innerText = '00';
            console.log('завершено');
            pause();
            modalAlert.style.display = 'block';
            audio.autoplay = true; // Автоматически запускаем
        }
        else{


            if(sec == 0){
                sec=59;
                $secSet.value = $sec.innerText = sec;
                        if(min == 0) {
                            min = 59;
                            $min.innerText = min;
                            hr--;
                            hr<10 ? $hr.innerText = '0'+hr : $hr.innerText = hr;
                        }
                        else {
                            min--;
                            min<10 ? $min.innerText = '0'+min : $min.innerText = min;
                        }

            }
            else {
                sec--;
                $secSet.value = sec;
                sec<10 ? $sec.innerText = '0'+sec : $sec.innerText = sec;
            }

        }



    }, 1000)

}



function pause() {
    clearInterval(cdTimer)
    control[0].innerHTML = 'СТАРТ';
    control[0].removeEventListener('click', pause);
    control[0].addEventListener('click', start);
}

function audioPause() {
    audio.pause();
    pause();
}
