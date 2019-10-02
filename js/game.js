var riddleEasy = [
  'I can fly but have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I?',
  'The more you take, the more you leave behind.',
  'You can see me in water, but I never get wet. What am I?',
  'What belongs to you, but others use it more than you do?',
  'What is easy to get into, but hard to get out of?',
  'I\'m tall when I\'m young, I\'m short when I\'m old. What am I?',
  'What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?',
  'Poor people have it. Rich people need it. If you eat it, you die. what is it?',
  'Feed me and I live, yet give me a drink and I die',
  'If you have me, you want to share me. If you share me, you haven\'t got me.What am I ?',
  'A kind of tree can you carry in your hand?',
  'What disappears the moment you say its name?'
];

var answerEasy = [
  'cloud',
  'footsteps',
  'reflection',
  'name',
  'trouble',
  'candle',
  'noon',
  'nothing',
  'fire',
  'secret',
  'palm',
  'silence'
];

var hintEasy = [
  'I live in the sky.',
  'I am attached to you.',
  'The man in the mirror.',
  'You are called by this.',
  '"It\'s fun gettin in to _______!" (game advertisement)',
  'I get waxy.',
  'It\'sin the middle of the day.',
  'If this hint was not here, you would have?',
  'Don\'t bring red trucks and flashing lights.',
  'They say these don\'t make friends.',
  'You see these on tropical beaches.',
  'Achieved by the absence of moving your'
];

var riddleNorm = [
  'What has branches and leaves and no bark?',
  'The more you take away from it the larger it grows, what is it?',
  'What is always on its way here, but never arrives?',
  'I run all around the pasture but never move.  What am I?',
  'What can go up a chimney down but can\'t go down a chimney up?',
  'Who is that with a neck and no head, two arms and no hands?',
  'What has a long neck, A name of a bird, Feeds on cargo of ships, it\'s not alive ?',
  'You can see it every day but cannot touch it at will. What is it?',
  'A very pretty thing am I, fluttering in the pale-blue sky. Delicate, fragile on the wing, indeed I am a pretty thing. What am I?',
  'A door is not a door when it is?',
  'It can\'t be seen, can\'t be felt, can\'t be heard and can\'t be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after, ends life and kills laughter.',
  'No matter how little or how much you use me, you change me every month. What am I?'
];

var answerNorm = [
  'library',
  'hole',
  'tomorrow',
  'fence',
  'umbrella',
  'shirt',
  'crane',
  'sky',
  'butterfly',
  'ajar',
  'darkness',
  'calendar'
];

var hintNorm = [
  'Shhh, this is a quiet place.',
  'Keep diggin’, you’ll get it.',
  'Not a tangible object.',
  'It keeps things inside.',
  'When it is open you are protected.',
  'You can have it in different colors.',
  'You can fold paper into this.',
  'Look it’s up.',
  'You can swim this way.',
  'You can put a lid on it.',
  'Can be achieved by flipping a switch.',
  'Month to month.'
];

var riddleHard = [];

var answerHard = [];

var hintHard = [];

var currentRiddles = [];

//riddle game logic variables
var answered = 0;
var attempts = 3;
var tries;

//how to play variables
var x;
var gameRules;
var gameRuleBtn;

//kill code variables
var code;
var randomCode;

//game buttons variables
var btn1;
var btn2;
var btn3;
var isBtn1Done = false;
var isBtn2Done = false;
var isBtn3Done = false;
var activeBtn;

//game keys variables
var key1;
var key2;
var key3;
var keyTimer = 0;

//pipe variables
var pipeOne;
var pipeTwo;
var pipeThree;
var pipeTimer = 0;

//quest box generation variables
var questBox;
var answerQuestForm;
var questP;
var attemptTxt;
var hints;
var hintsNum = 2;
var hintChances = 2;
var riddleHints;
var closeX;
var hintText;
var gameHint;
var isFirstTime = true;
var isRiddleInProgress = false;


///killcode variable
var kcCode;



//array that holds instants base on which difficulty for this session
Question.allQ = [];


function closeRule() {
  gameRules.style.right = '-100%';
  resume();
}

function openRule() {
  gameRules.style.right = '0';
  pause();
  //document.getElementById('killCode') = null;
  code.removeEventListener('submit', getCode);
}

function closeHint() {
  riddleHints.addEventListener('click', hintHandler);
  gameHint.style.right = '-100%';
}

function openHint() {
  riddleHints.removeEventListener('click', hintHandler);
  gameHint.style.right = '0';
}

function Question(question, answer, hint) {
  this.question = question;
  this.answer = answer;
  this.hint = hint;
  Question.allQ.push(this);
}

function genRandom() {
  var genRandom = Math.floor(Math.random() * Question.allQ.length);
  return genRandom;
}

function handleQuest(event) {
  stopClickEvents();
  activeBtn = event.target.id;
  questP.textContent = currentRiddles[answered].question;
  questBox.appendChild(questP);
  isRiddleInProgress = true;
  console.log(currentRiddles[answered].question);
}

function hintHandler(){
  if (isRiddleInProgress){
    var hint = currentRiddles[answered].hint;
    if(hintsNum > 0) {
      if(isFirstTime){
        hintsNum--;
        isFirstTime = false;
      }
    }
    if(hintChances > 0) {
      hints.textContent = hintsNum;
      hintText.textContent = hint;
    } else {
      hintText.textContent = 'You ran out of hints!';
    }
    openHint();  
  }
}

//call this function to remove all eventlisteners.
function stopClickEvents() {
  btn1.removeEventListener('click', handleQuest);
  btn2.removeEventListener('click', handleQuest);
  btn3.removeEventListener('click', handleQuest);
}

function startClickEvents() {
  if (!isBtn1Done) {
    btn1.addEventListener('click', handleQuest);
  }
  if (!isBtn2Done) {
    btn2.addEventListener('click', handleQuest);
  }
  if (!isBtn3Done) {
    btn3.addEventListener('click', handleQuest);
  }
}

function handleAnswer(event) {
  event.preventDefault();
  var userAnswer = event.target.answer.value;
  var questAnswer = currentRiddles[answered].answer;
  if(isRiddleInProgress){
    if (userAnswer.toLowerCase() === questAnswer) {
      console.log('you got it');
      correctAnswer();
      closeHint();
      if(!isFirstTime){
        hintChances--;
      }
      isFirstTime = true;
      isRiddleInProgress = false;
      answered++;
    } else {
      attempts--;
      if (attemptTxt.classList.contains('shake')) {
        console.log('yes');
        attemptTxt.classList.remove('shake');
        setTimeout(function () { attemptTxt.classList.add('shake'); }, 100);
      } else {
        attemptTxt.classList.add('shake');
      }
      console.log('wrong');
      tries.textContent = attempts;
    }
    if (attempts === 0) {
      goLose();
    }
  }
  document.getElementById('answer').value = null;
}

function correctAnswer() {
  var currentBtn;
  var currentKey;
  var currentNum;
  if (activeBtn === 'btn1') {
    currentBtn = btn1;
    currentKey = key1;
    currentNum = 1;
    isBtn1Done = true;
  }
  if (activeBtn === 'btn2') {
    currentBtn = btn2;
    currentKey = key2;
    currentNum = 2;
    isBtn2Done = true;
  }
  if (activeBtn === 'btn3') {
    currentBtn = btn3;
    currentKey = key3;
    currentNum = 3;
    isBtn3Done = true;
  }
  currentBtn.classList.add('fadeout-top');
  currentBtn.style.cursor = 'auto';
  keyTimer = setTimeout(function () {
    currentKey.classList.add('move-to-origin');
    pipeTimer = setTimeout(function () {
      keyComplete(currentNum);
    }, 1000);
  }, 800);
}

function keyComplete(key) {
  clearTimeout(keyTimer);
  clearTimeout(pipeTimer);
  if (key === 1) {
    pipeOne.style.backgroundImage = 'url(\'img/game-pipe-green.png\')';
  }
  if (key === 2) {
    pipeTwo.style.backgroundImage = 'url(\'img/game-pipe-green.png\')';
  }
  if (key === 3) {
    pipeThree.style.backgroundImage = 'url(\'img/game-pipe-green.png\')';
  }
  questP.textContent = '';
  startClickEvents();
}

function getRandomCode() {
  var random = Math.floor(Math.random() * 9999 + 1000);
  console.log(random);
  return random;
}


//populate the random code


function createCode() {
  randomCode = getRandomCode();

  kcCode = document.getElementById('hintCode');

  kcCode.textContent = randomCode;

}

createCode();



function getCode(event) {
  event.preventDefault();
  //randomCode = getRandomCode();
  //randomCode = 4444;

  var code = event.target.killCode.value;
  if (code === randomCode) {
    pause();
    var convert = timerMs - timeLeft;
    var min = Math.floor((convert / 1000 / 60) << 0),
      sec = Math.floor((convert / 1000) % 60);
    var finaltime = min + ':' + sec;
    //console.log(finaltime);
    localStorage.setItem('finaltime', finaltime);
    goWin();
  } else {
    finaltime = 'fail';
    localStorage.setItem('finaltime', finaltime);
    pause();
    console.log(finaltime);
    goLose();
  }
}


///////////////////////////////    https://codepen.io/yaphi1/pen/QbzrQP
// replace with a diifuculty setting later
var timer = 14.99;
//var timer =0.15;
var timerMs = timer * 60000;


var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timer * 60 * 1000);

function timeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds, };
}

var timeinterval;
function runClock(id, endtime) {
  var clock = document.getElementById(id);
  function updateClock() {
    var t = timeRemaining(endtime);
    //clock.innerHTML = 'minutes: ' + t.minutes + '<br>seconds: ' + t.seconds;
    clock.innerHTML = 'Time left: ' + t.minutes + ':' + t.seconds;
    if (t.total <= 0) { clearInterval(timeinterval); }

    if (t.total === 0) {
      console.log(t.total);
      goLose();
    }
  }
  updateClock(); // run function once at first to avoid delay
  timeinterval = setInterval(updateClock, 1000);
}

var paused = false; // is the clock paused?
var timeLeft; // time left on the clock when paused

function pause() {
  if (!paused) {
    paused = true;
    clearInterval(timeinterval); // stop the clock
    timeLeft = timeRemaining(deadline).total; // preserve remaining time
    timer = timeRemaining(deadline).total;
  }
}

function resume() {
  if (paused) {
    paused = false;

    // update the deadline to preserve the amount of time remaining
    deadline = new Date(Date.parse(new Date()) + timeLeft);

    // start the clock
    runClock('clockdiv', deadline);
  }
}
////////////////////////////////////////////////////////////////////////////////////
function goWin() {
  window.location.href = 'gamewin.html';
}

function goLose() {
  window.location.href = 'gamelose.html';
}

function init() {
  gameRules = document.getElementById('gamerules');
  gameRuleBtn = document.getElementById('gameRuleBtn');
  gameRuleBtn.addEventListener('click', openRule);
  x = document.getElementById('x');
  x.addEventListener('click', closeRule);

  btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', handleQuest);
  btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', handleQuest);
  btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', handleQuest);

  code = document.getElementById('killcodes');
  code.addEventListener('submit', getCode);

  questBox = document.getElementById('questBox');
  questP = document.getElementById('questP');
  answerQuestForm = document.getElementById('questSubmit');
  answerQuestForm.addEventListener('submit', handleAnswer);
  attemptTxt = document.getElementById('attemptTxt');
  hints = document.getElementById('hints');
  hints.textContent = hintsNum;
  riddleHints = document.getElementById('riddleHints');
  riddleHints.addEventListener('click', hintHandler);
  closeX = document.getElementById('close');
  closeX.addEventListener('click', closeHint);
  hintText = document.getElementById('hintText');
  gameHint = document.getElementById('gameHint');

  tries = document.getElementById('tries');
  tries.textContent = attempts;

  key1 = document.getElementById('key1');
  key2 = document.getElementById('key2');
  key3 = document.getElementById('key3');
  key1.classList.remove('hide');
  key2.classList.remove('hide');
  key3.classList.remove('hide');

  pipeOne = document.getElementById('pipeOne');
  pipeTwo = document.getElementById('pipeTwo');
  pipeThree = document.getElementById('pipeThree');

  runClock('clockdiv', deadline);

  var difficulty = localStorage.getItem('user');
  var parseData = JSON.parse(difficulty);
  console.log(parseData);
  console.log(parseData[parseData.length - 1].difficulty);

  var parse = parseData[parseData.length - 1].difficulty;

  if (parse === 'easy') {
    for (var i = 0; i < riddleEasy.length; i++) {
      new Question(riddleEasy[i], answerEasy[i], hintEasy[i]);
    }
  }
  if (parse === 'normal') {
    for (var j = 0; j < riddleNorm.length; j++) {
      new Question(riddleNorm[j], answerNorm[j], hintNorm[j]);
    }
  }
  if (parse === 'hard') {
    for (var k = 0; k < riddleHard.length; k++) {
      new Question(riddleHard[k], answerHard[k], hintHard[k]);
    }
  }


  console.log(Question.allQ);

  var randomQ;
  var randomA;
  var randomH;

  do {
    randomQ = genRandom();
    randomA = genRandom();
    randomH = genRandom();
  }
  while (randomQ === randomA || randomA === randomH || randomQ === randomH);

  currentRiddles.push(Question.allQ[randomQ]);
  currentRiddles.push(Question.allQ[randomA]);
  currentRiddles.push(Question.allQ[randomH]);

  console.log(currentRiddles);

  console.log(Question.allQ[randomQ]);
}