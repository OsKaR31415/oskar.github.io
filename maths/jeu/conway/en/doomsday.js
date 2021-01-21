input = document.getElementById("input_date");
aff = document.getElementById("aff");

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
secretDate = {
  n: 0,
  update: function(){
  n = Math.floor(Math.random() * 1000)
  aff.innerText = toDate(n)
  },
  good: function(d){d==toDay(n)},
}


function check_date() {
  let day_index = input.selectedIndex
  
  if (secretDate.good(day_index)){
      alert("c'est la bonne réponse !");
  }
  else {
    alert("mauvaise réponse")
  }
  
  alert("la date secrète a changé")
  
  secretDate.update()
}

secretDate.update()
