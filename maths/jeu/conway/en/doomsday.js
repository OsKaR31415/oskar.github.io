input = document.getElementById("input_date");

DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

// pour stocker ta date secrète

var secretDate;

function aff_random_date() {
    secretDate = random_date(new Date(2013, 1, 1), new Date(2013, 12, 31));
    aff = document.getElementById("aff");
    aff.innerText = secretDate.toString();
}

function random_date(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function secret_day_number() {
    return secretDate.getDay();
}

var day_int = {
    "lundi": 1,
    "mardi": 2,
    "mercredi": 3,
    "jeudi": 4,
    "vendredi": 5,
    "samedi": 6,
    "dimanche": 0,

    "monday": 1,
    "tuesday": 2,
    "wedesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 0
}

function day_to_int(day) {
    day = day.toLowerCase();

    return day_int[day];
}

function check_date() {
    let day = day_to_int(input.value);

    let actual_day = secret_day_number(secretDate);

    if (day == actual_day){
        alert("c'est la bonne réponse !");
    }
    else {
        alert("mauvaise réponse");
    }

    //secretDate.update()
}

//secretDate.update()
