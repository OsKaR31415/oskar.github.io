var input = document.getElementById("answer");

var good_answers = [
    "monster",
    "monster group",
    "the monster",
    "the monster group"
]

function check_answer() {
    if (good_answers.includes(input.value)) {
        alert("c'est bon !");

    } else {
        alert("mauvaise réponse !");
    }
}
