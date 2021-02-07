
DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

// pour stocker ta date secrète

var secretDate;

var aff;
var input;
// simplement enlever weekday pour cacher le jour.
const date_options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

function aff_random_date() {
    secretDate = random_date(new Date(2013, 1, 1), new Date(2013, 12, 31));
    aff = document.getElementById("aff");
    aff.innerText = secretDate.toLocaleDateString(undefined, date_options);
    input = document.getElementById("input_date");
}

function random_date(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function secret_day_number() {
    return secretDate.getDay();
}

        var text = [
            "starting up......................OK",
            "Graphics.........................OK",
            "HAL version 9000, core: i3.14159265358979323846264338327950",
            "9000TB MEM avilable",
            "Security test: OK",
            "Loading voice :",
            "Voice autocmd languagetype français inoremap HAL Minitel",
            "Voice autocmd languagetype american inoremap french<sp>fries crisps",
            "Voice autocmd languagetype english add \\\\complicated words\\\\",
            "Loading text-to-speech engine :",
            "text-to-speech abstract..........OK",
            "text-to-speech voice commands....OK",
            "text-to-speech audio files.......OK",
            "Loading user info :",
            "zen of HAL users :",
            " - emacs is bad, always use Vim",
            " - Graphics are for non programmers, use terminal : it's speedier",
            " - you cannot use windows, only Unix-based systems are good",
            " - if you sadly use eclipse, please consider swiching to vim instead of suicide",
            " - learn APL, it's the best language ever",
            " - latex is cool and powerfull",
            " - Markdown is fast and still quite powerfull",
            " - forget about Word, libre-office, open-office... use latex or markdown",
            " - simple is better than complicated",
            " - beautifull is better that ugly",
            " - readability is better than... no, forget about readability, write 500 characters one-liners : it's cool",
            " - AI will NEVER replace humans for coding",
            "Loading user advices :",
            "if you are on windows, close it, or your house will get cold",
            "if you are on apple, warning : it once felt on a man's head and he faoud strange stuff...",
            "if you are on linux, try out vim",
            "",
            "V       V  IIIII  MM   MM",
            " V     V     I    M M M M",
            "  V   V      I    M  M  M",
            "   V V       I    M     M",
            "    V      IIIII  M     M > emacs",
            "",
            "",
            "answer to the life, the universe, and everything : 42",
            "did you really took time to read that ?",
            "Booting logical center...........OK",
            "Starting up HAL 9000.............OK",
];

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
};

function day_to_int(day) {
    day = day.toLowerCase();
    return day_int[day];
}

var day;
var actual_day;

function check_date() {
    // aff.innerText += "\n" + input.value;
    let day = (input.value).toString();
    day = day_to_int(day);

    let actual_day = secretDate.getDay();


    if (day == actual_day){
        alert("c'est la bonne réponse !");
    input.remove();

        aff.innerText = "";

        scroll() ;
    }
    else {
        alert("mauvaise réponse");
        aff_random_date();
    }

}
var cptscroll=-1;
function scroll() {
    cptscroll+=1;
    aff.innerHTML += text[cptscroll] + '<br/>';
    aff.style.marginTop=cptscroll * -30;
    if (cptscroll < text.length) {
        setTimeout(function(){scroll();},500);
    }
    

}


