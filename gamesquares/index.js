// var $fullscrBtn = document.querySelector('fullscreenBtn');
//
// $fullscrBtn.addEventListener('click', fullScreen);
//
// function fullScreen() {
//     document.documentElement.requestFullScreen();
// }

var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $result = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $inputGameTime = document.querySelector('#inputGameTime');

var score = 0;
var score2 = 0;
var isGameActive = false;
$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$inputGameTime.addEventListener('input', setGameTime);

function setGameTime() {
    show($timeHeader);
    hide($resultHeader);
    var time = +$inputGameTime.value;
    $time.textContent = time.toFixed(1);
}
function show($el) {
    $el.classList.remove('hide')
}
function hide($el) {
    $el.classList.add('hide')
}
function startGame() {
    score = 0;
    score2 = 0;
    setGameTime();
    $inputGameTime.setAttribute('disabled', 'true');

    isGameActive = true;
    $game.style.backgroundColor = '#fff';
    $start.classList.add('hide');
    renderBox()
    renderBoxInterval = setInterval(function () {
        $game.innerHTML = '';
        renderBox()
    },1000)


    var gameTime = setInterval(function () {
    var time = parseFloat($time.textContent);

    if (time<=0){
        clearInterval(gameTime);
        clearInterval(renderBoxInterval)
        endGame()
    }
    else {
        $time.textContent = (time - 0.1).toFixed(1);
    }
    }, 100)
}

function endGame() {
    isGameActive = false;
    $result.textContent = score + ' + ' + score2;
    $inputGameTime.removeAttribute('disabled');
    show($start);
    $game.style.backgroundColor = '#ccc';
    $game.innerHTML = '';
    hide($timeHeader);
    show($resultHeader);
}

function handleBoxClick(event) {
    if (isGameActive){
        if (event.target.dataset.box || event.target.dataset.img ){
            if(randomImg % 2){
                score++;
                console.log ('Поцреот' + score);
                console.log ('Либераха' + score2);
            }
            else {
                score2++;

                console.log ('Поцреот' + score);
                console.log ('Либераха' + score2);
            }
            $game.innerHTML = '';
            // clearInterval(renderBoxInterval);
            renderBox();
        }
    }
    else {
        return
    }

}
function randomImgF() {
    randomImg = getRandom(1, 11);
}

function renderBox() {

    // var colors = ['#FF0000', '#33CCCC', '#39E639', '#E6399B', 'tomato'];
    var box = document.createElement('div');
    var gameSizeHeight = $game.getBoundingClientRect().height;
    var gameSizeWidth = $game.getBoundingClientRect().width;
    var boxSize = getRandom(80, 100);
    randomImgF();
    box.innerHTML = '<img src="img/' + randomImg + '.png" alt="" data-img="true" style="width:' + boxSize + 'px"' + '>';

    var maxTop = gameSizeHeight - boxSize;
    var maxLeft = gameSizeWidth - boxSize;

    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';


    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft)  + 'px';

    box.style.backgroundColor = '';
        // colors[getRandom(0,colors.length)];
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');
    $game.insertAdjacentElement('afterbegin', box);


}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}