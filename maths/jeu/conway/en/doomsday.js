input = document.getElementById("input_date");

DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

function toDate(n){
  // TODO
    return "19/01/2021";
}

function toDay(n){
  // TODO
    return 1
}

// pour stocker ta date secrète 

var secretDate;

function random_date() {
    secretDate = randomDate(new Date(2013, 1, 1), new Date(2013, 12, 31));
    aff = document.getElementById("aff");
    aff.innerText = secretDate.toString();
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function check_date() {
  let day_index = input.value

  if (secretDate.good(day_index)){
      alert("c'est la bonne réponse !");
  }
  else {
    alert("mauvaise réponse")
  }

  alert("la date secrète a changé")

  //secretDate.update()
}

//secretDate.update()
