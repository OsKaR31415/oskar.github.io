var input = document.getElementById("answer");

var good_answers = [
    "monster",
    "monster group",
    "the monster",
    "the monster group"
]

function check_answer() {
    input.remove();
    if (good_answers.includes(input.value)) {
        alert("Good answer !");
        goodAnswer();
    } else {
        alert("Bad answer");
        badAnswer();
        catAttacks();

        setTimeout(backToHall, 3000);
    }
}

var aff = document.getElementById("aff");
var cat = document.getElementById("robocat");
var griffure = document.getElementById("griffure");

//////////////////////////////////////////////////

function goodAnswer() {
    cat.remove();
    aff.innerHTML = "the cat leaves the corridor, and you can enter the kitchen";
    document.getElementById("to_remove").remove();

    var button = document.getElementById("button");
    button.innerHTML = "Go to the kitchen";
    button.href = "kitchen.html";

}

//////////////////////////////////////////////////

function badAnswer() {
    aff.innerHTML = "«" + input.value + "» is not the answer expected by the cat...<br>";
}

function catAttacks() {
    cat.remove();
    griffure.style.display = "block";
}

function backToHall() {
    window.location.href = "hall.html";
}

