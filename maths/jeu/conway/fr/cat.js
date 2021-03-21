var input = document.getElementById("answer");

var good_answers = [
    "monster",
    "monster group",
    "the monster",
    "the monster group",
    "monstre",
    "groupe monstre",
    "le monstre",
    "le groupe monstre"
]
function check_answer() {
    input.remove();
    if (good_answers.includes(input.value)) {
        alert("Bonne réponse !");
        goodAnswer();
    } else {
        alert("mauvaise réponse...");
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
    aff.innerHTML = "Le chat quitte le corridor, et vous laisse entrer dans la cuisine";

    var button = document.getElementById("button");
    var button_link = document.getElementById("button_link");
    button.innerHTML = "Aller dans la cuisine";
    button_link.href = "kitchen.html";

}

//////////////////////////////////////////////////

function badAnswer() {
    aff.innerHTML = "";
    document.getElementById("cat_prompt").innerHTML = "«" + input.value + "» n'est pas la réponse attendue par le chat...<br>";
    document.getElementById("button").remove();
}

function catAttacks() {
    cat.remove();
    griffure.style.display = "block";
}

function backToHall() {
    window.location.href = "hall.html";
}

