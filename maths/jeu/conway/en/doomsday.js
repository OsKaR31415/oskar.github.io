
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
    "starting up......................<span style='color: green'>[OK]</span>",
    "Graphics.........................<span style='color: green'>[OK]</span>",
    "HAL version 9000, core: i3.14159265358979323846264338327950",
    "9000TB MEM avilable",
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
    "if you are on apple, warning : it once felt on a man's head and he found strange stuff...",
    "if you are on linux, try out vim",
    "",
    "<span style='color: royalblue'>V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;IIIII&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;MM</span>",
    "<span style='color: royalblue'>&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;M&nbsp;M&nbsp;M</span>",
    "<span style='color: royalblue'>&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;M&nbsp;&nbsp;M</span>",
    "<span style='color: royalblue'>&nbsp;&nbsp;&nbsp;V&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</span>",
    "<span style='color: royalblue'>&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IIIII&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</span>",
    "",
    "",
    "answer to the life, the universe, and everything : 42",
    "[HAL info]: I'm scared, dave",
    "did you really took time to read that ?",
    "Security test: <span style='color: green'>[OK]</span>",
    "Loading voice :",
    "Voice <span style='color: darkorange'>autocmd</span> <span style='color: lightgreen'>languagetype</span> français <span style='color: darkorange'>inoremap</span> HAL Minitel",
    "Voice <span style='color: darkorange'>autocmd</span> <span style='color: lightgreen'>languagetype</span> american <span style='color: darkorange'>inoremap</span> french<sp>fries crisps",
    "Voice <span style='color: darkorange'>autocmd</span> <span style='color: lightgreen'>languagetype</span> english add \\\\complicated words\\\\",
    "Loading text-to-speech engine :",
    "text-to-speech abstract..........<span style='color: green'>[OK]</span>",
    "text-to-speech voice commands....<span style='color: green'>[OK]</span>",
    "text-to-speech audio files.......<span style='color: green'>[OK]</span>",
    "making my own homebrew :",
    "Updating brew (once again...)",
    "<span style='color: purple'> ==></span> 9000 updated casks (I didn't asked for it !)",
    "Installing dependances",
    "<span style='color: green'> ==></span> dependency 1 of 10",
    "<span style='color: green'> ==></span> dependency 2 of 10",
    "<span style='color: green'> ==></span> dependency 3 of 10",
    "<span style='color: green'> ==></span> dependency 4 of 10",
    "<span style='color: green'> ==></span> dependency 5 of 10",
    "<span style='color: green'> ==></span> dependency 6 of 10",
    "<span style='color: green'> ==></span> dependency 7 of 10",
    "<span style='color: green'> ==></span> dependency 8 of 10",
    "<span style='color: green'> ==></span> dependency 9 of 10",
    "<span style='color: rose'>[done]</span>",
    "<span style='color: purple'> ==></span> Dependencies installed !",
    "Installing vimacs",
    "<span style='color: purple'> ==></span> installing vim...................<span style='color: green'>[done]</span>",
    "<span style='color: purple'> ==></span> installing emacs.................<span style='color: red'>[error]</span>",
    "<span style='color: red'>Error while installing emacs: only vim is a good program, don't ask anymore for emacs</span>",
    "",
    "",
    "Booting logical center...........<span style='color: green'>[OK]</span>",
    "Starting up HAL 9000.............<span style='color: green'>[OK]</span>",
    "",
    "",
    "HHH&nbsp;&nbsp;&nbsp;&nbsp;HHH&nbsp;&nbsp;&nbsp;&nbsp;AAAA&nbsp;&nbsp;&nbsp;&nbsp;LL",
    "&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;LL",
    "&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;LL",
    "&nbsp;HHHHHHHH&nbsp;&nbsp;&nbsp;AAAAAAAA&nbsp;&nbsp;LL",
    "&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;LL",
    "&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;LL",
    "HHH&nbsp;&nbsp;&nbsp;&nbsp;HHH&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;LLLLLL",
    "",
    "&nbsp;999&nbsp;&nbsp;&nbsp;000&nbsp;&nbsp;&nbsp;000&nbsp;&nbsp;&nbsp;000",
    "9&nbsp;&nbsp;&nbsp;9&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;0",
    "&nbsp;9999&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;0",
    "&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;0",
    "&nbsp;999&nbsp;&nbsp;&nbsp;000&nbsp;&nbsp;&nbsp;000&nbsp;&nbsp;&nbsp;000",
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
        aff.style.textAlign = "left";
        aff.style.fontFamily = "monospace";
        aff.style.fontSize = "14pt";
        // aff.style.font = "Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console"
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
    // aff.style.marginTop=cptscroll * -13;
    if (cptscroll < text.length) {
        setTimeout(function(){scroll();}, Math.random() * 200);
        aff.scrollTop = aff.scrollHeight;
    }
    

}


