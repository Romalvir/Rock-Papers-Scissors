/* 
cashing the dom..storing something for future use & retriving it
*/

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBooard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); /* Both */
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() { 
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices [randomNumber];
}
console.log(getComputerChoice());

/* we create another function that converts a letter to a word */
function convertToWord (letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper"
	return "Scissor";
	}



/* look @ line 39  this function below only takes care of WIN!!*/
function win (userChoice, computerChoice){
	userScore++; /* score goes up by won */
	userScore_span.innerHTML = userScore; /* span is the element, get element by ID*/
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win!";
}
function lose (userChoice, computerChoice){
	computerScore++; /* score goes up by won */
	userScore_span.innerHTML = userScore; /* span is the element, get element by ID*/
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(userChoice) + " loses " + convertToWord(computerChoice) + ". You Lost!";
}

function draw (userChoice, computerChoice){
		result_p.innerHTML = convertToWord(userChoice) + " = " + convertToWord(computerChoice) + "..Its A Draw!";

}

function game (userChoice) { /* using switch statements */
	const computerChoice= getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice); /* ^ using a function as a return  ^ */
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice); /* ^ using a function as a return ^ */
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice); /* ^ using a function as a return ^ */
			break;
	}
}

function main (){
		rock_div.addEventListener('click', function() {
			game("r")
		})

		paper_div.addEventListener('click', function(){
			game("p")
		})

		scissor_div.addEventListener('click', function(){
			game("s") 
		})

}

main();





// function([string1, string2],target id,[color1,color2])    
 consoleText(['Choose your move!'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

