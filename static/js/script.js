function clickMe() {
    var birthYear = prompt("What is your birth year ..?");
    var ageInDays = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "ageInDays");
    var textAnswer = document.createTextNode(
        "You are " + ageInDays + " days old"
    );
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("ageInDays").remove();
}

function generateCat() {
    var image = document.createElement("img");
    image.src =
        "http://thecatapi.com/api/images/get?formate=src&type=gif&size=small";
    image.alt = "cat_image";
    document.getElementById("flex-cat-gen").appendChild(image);
}
//rock scissor paper game
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
//random to integer 0 to 2
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
//computer choose a number
function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}
//decide who will wine
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        rock: { scissors: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissors: 0 },
        scissors: { paper: 1, scissors: 0.5, rock: 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}
//final message to show
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { message: "You lost!", color: "red" };
    } else if (yourScore === 0.5) {
        return { message: "You tied!", color: "yellow" };
    } else {
        return { message: "You won!", color: "green" };
    }
}
//remove current images and add new images and message
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        rock: document.getElementById("rock").src,
        paper: document.getElementById("paper").src,
        scissors: document.getElementById("scissors").src,
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    //creating div for new images
    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    //writting html to show images and message
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width= 150 style='box-shadow:0px 10px 50px rgba(37, 50, 233, 1); '>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width= 150 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1); '>";
    messageDiv.innerHTML = "<h2 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h2>";
    //adding divs to flex box rps div
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
