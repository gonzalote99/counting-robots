var robots = {
  robot1:{
    name: 'Robot 1',
    value: 0
  },
  robot2:{
    name: 'Robot 2',
    value: 0
  },
  robot3:{
    name: 'Robot 3',
    value: 0
  },
  robot4:{
    name: 'Robot 4',
    value: 0
  },

};


var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1 )) + min;
}

var startGame = function() {
  currentScore = 0;

  targetScore = getRandom(19, 120);

  robots.robot1.value = getRandom(1, 12);
  robots.robot2.value = getRandom(1, 12);
  robots.robot3.value = getRandom(1, 12);
  robots.robot4.value = getRandom(1, 12);

  $('#yourScore').html(currentScore);
  $('#targetScore').html(targetScore);

  console.log('target score', + targetScore);
  console.log('robot1: ' + robots.robot1.value + ' | robot2: ' + robots.robot2.value + ' | robot3: ' + robots.robot3.value + ' | robot4: ' + robots.robot4.value  )
}


var addValues = function (robots) {
currentScore = currentScore + robots.value;

$('#yourScore').html(currentScore);
checkWin();

console.log('your score: ' + currentScore);

}

var checkWin = function() {
  if(currentScore > targetScore) {
    alert('lost');
    lossCount++
    $('#lossCount').html(lossCount);

    startGame();
  }

  else if(currentScore === targetScore) {
    alert('win');
    winCount++
    $('#winCount').html(winCount);

    startGame();
  }


}

startGame();

$('#robot1').click(function() {
  addValues(robots.robot1)
})


$('#robot2').click(function() {
  addValues(robots.robot2)
})

$('#robot3').click(function() {
  addValues(robots.robot3)
})

$('#robot4').click(function() {
  addValues(robots.robot4)
})