
var input = document.getElementById("answer");

var good_answers = [
    "monster",
    "monster group",
    "the monster",
    "the monster group"
]
function check_answer() {
    if (((input.value).toString()).toLowerCase() in good_answers) {
        alert("c'est la bonne réponse");
    }
}
