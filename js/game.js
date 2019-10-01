var riddleNorm = ['What has branches and leaves and no bark?', 'The more you take away from it the larger it grows, what is it?',
  'What is always on its way here, but never arrives?', 'I run all around the pasture but never move.  What am I?',
  'What can go up a chimney down but can\'t go down a chimney up?', 'Who is that with a neck and no head, two arms and no hands?',
  'What has a long neck, A name of a bird, Feeds on cargo of ships, it\'s not alive ?', 'You can see it every day but cannot touch it at will. What is it?',
  'A very pretty thing am I, fluttering in the pale-blue sky. Delicate, fragile on the wing, indeed I am a pretty thing. What am I?', 'A door is not a door when it is?',
  'It can\'t be seen, can\'t be felt, can\'t be heard and can\'t be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after, ends life and kills laughter.',
  'No matter how little or how much you use me, you change me every month. What am I?'];

var answerNorm = ['Library', 'Hole', 'Tomorrow', 'Fence', 'Umbrella', 'Shirt', 'Crane', 'Sky', 'Butterfly', 'Ajar', 'Darkness', 'Calendar'];

var hintNorm = [
  ['Shhh, this is a quiet place.', 'Shhh, this is a quiet place.', 'Shhh, this is a quiet place.'],
  ['Keep diggin’, you’ll get it.', 'Keep diggin’, you’ll get it.', 'Keep diggin’, you’ll get it.'],
  ['Not a tangible object.', 'Not a tangible object.', 'Not a tangible object.'],
  ['It keeps things inside.', 'It keeps things inside.', 'It keeps things inside.'],
  ['When it is open you are protected.', 'When it is open you are protected.', 'When it is open you are protected.'],
  ['You can have it in different colors.', 'You can have it in different colors.', 'You can have it in different colors.'],
  ['You can fold paper into this.', 'You can fold paper into this.', 'You can fold paper into this.'],
  ['Look it’s up.', 'Look it’s up.', 'Look it’s up.'],
  ['You can swim this way.', 'You can swim this way.', 'You can swim this way.'],
  ['You can put a lid on it.', 'You can put a lid on it.', 'You can put a lid on it.'],
  ['Can be achieved by flipping a switch.', 'Can be achieved by flipping a switch.', 'Can be achieved by flipping a switch.']
];

// var normLevel = ['riddleNorm', 'answerNorm', 'hintNorm'];
NormalQuestion.allQ = [];
var currentRiddles = [];

var answered = 0;

var x;
var hint;
var rule;

function NormalQuestion(question, answer, hint) {
  this.question = question;
  this.answer = answer;
  this.hint = hint;
  this.correct = false;
  NormalQuestion.allQ.push(this);
}

function genRandom() {
  var genRandom = Math.floor(Math.random() * NormalQuestion.allQ.length);
  return genRandom;
}

function closeHint(event) {
  hint.style.display = 'none';
  resume();
}

function openHint() {
  hint.style.display = 'block';
  pause();
}
///////////////////////https://codepen.io/ishanbakshi/pen/pgzNMv
///////////////////////////////    https://codepen.io/yaphi1/pen/QbzrQP
// 20 minutes from now
var timer = 14.99;

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
function run_clock(id, endtime) {
  var clock = document.getElementById(id);
  function update_clock() {
    var t = timeRemaining(endtime);
    //clock.innerHTML = 'minutes: ' + t.minutes + '<br>seconds: ' + t.seconds;
    clock.innerHTML = 'Time left: ' + t.minutes + ':' + t.seconds;
    if (t.total <= 0) { clearInterval(timeinterval); }
  }
  update_clock(); // run function once at first to avoid delay
  timeinterval = setInterval(update_clock, 1000);
}

var paused = false; // is the clock paused?
var timeLeft; // time left on the clock when paused

function pause() {
  if (!paused) {
    paused = true;
    clearInterval(timeinterval); // stop the clock
    timeLeft = timeRemaining(deadline).total; // preserve remaining time
    timer = timeRemaining(deadline).total;

    var convert = timerMs - timeLeft;

    var min = Math.floor((convert / 1000 / 60) << 0),
      sec = Math.floor((convert / 1000) % 60);
    console.log(min + ':' + sec);

  }
}

function resume() {
  if (paused) {
    paused = false;

    // update the deadline to preserve the amount of time remaining
    deadline = new Date(Date.parse(new Date()) + timeLeft);

    // start the clock
    run_clock('clockdiv', deadline);
  }
}
//console.log(timeLeft);
// handle pause and resume button clicks

function init() {
  hint = document.getElementById('gamerules');
  rule = document.getElementById('rule');
  x = document.getElementById('x');
  x.addEventListener('click', closeHint);
  hint.style.display = 'none';
  rule.addEventListener('click', openHint);
  console.log('hi');
  // document.getElementById('pause').onclick = pause;
  // document.getElementById('resume').onclick = resume;
  run_clock('clockdiv', deadline);

  for (var i = 0; i < riddleNorm.length; i++) {
    new NormalQuestion(riddleNorm[i], answerNorm[i], hintNorm[i]);
  }

  console.log(NormalQuestion.allQ);

  var randomQ;
  var randomA;
  var randomH;

  do {
    randomQ = genRandom();
    randomA = genRandom();
    randomH = genRandom();


  }
  while (randomQ === randomA || randomA === randomH || randomQ === randomH);

  currentRiddles.push(NormalQuestion.allQ[randomQ]);
  currentRiddles.push(NormalQuestion.allQ[randomA]);
  currentRiddles.push(NormalQuestion.allQ[randomH]);

  console.log(currentRiddles);

  console.log(NormalQuestion.allQ[randomQ]);
}

var questBox = document.getElementById('questBox');

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', handleQuest1);

function handleQuest1() {
  var pEl = document.createElement('p');
  pEl.textContent = currentRiddles[answered].question;
  questBox.appendChild(pEl);
  console.log(currentRiddles[answered].question);
}
