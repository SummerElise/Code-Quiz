var playAgainBtn = document.getElementById("replay");

//Play again function
playAgainBtn.addEventListener("click", function() {
  localStorage.replay();
})

 var endScore = [];

var loadScores = function() {
  var endScore = localStorage.getItem("scoreInfo, counter");

  if (!endScore) {
    return false;
  }

  for (var i=0; i < endScore.length; i++) {
    var endScore = endScore[i];
    var listItemEl = document.createElement("li");
    listItemEl.textContent = endScore;
  }
  endScore.push(endScore)
};