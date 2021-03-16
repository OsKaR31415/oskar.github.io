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

        setTimeout(backToHall, 6000);
    }
}

var aff = document.getElementById("aff");
var cat = document.getElementById("robocat");
var griffure = document.getElementById("griffure");

//////////////////////////////////////////////////

function goodAnswer() {
    cat.remove();
    document.getElementById("cat_prompt").remove();
    aff.innerHTML = "the cat leaves the corridor, and you can enter the kitchen";

    var button = document.getElementById("button");
    var button_link = document.getElementById("button_link");
    button.innerHTML = "Go to the kitchen";
    button_link.href = "kitchen.html";

}

//////////////////////////////////////////////////

function badAnswer() {
    aff.innerHTML = "";
    document.getElementById("cat_prompt").innerHTML = "«" + input.value + "» is not the answer expected by the cat...<br>";
    document.getElementById("button").remove();
}

function catAttacks() {
    cat.remove();
    griffure.style.display = "block";
}

function backToHall() {
    window.location.href = "hall.html";
}

