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

function init() {
  for (var i = 0; i < riddleNorm.length; i++) {
    new NormalQuestion(riddleNorm[i], answerNorm[i], hintNorm[i]);
  }
  console.log(NormalQuestion.allQ);
  var randomQ = genRandom();
  var randomA = genRandom();
  var randomH = genRandom();

  console.log(randomQ, randomA, randomH);
}
