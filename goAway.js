

// Edit this code so it fits in w/ what you guys called your elements

// Ive used place holder ID names - your ID names may different,
// Plz feel free to change the ID names accordingly

// NOTE: this file needs pre-existing elements to work

const goAway = document.querySelector("#goAwayButton");
const reply = document.querySelector("#goAwayReply");
const goBack= document.querySelector("#goBackButton")

const goAwayResponse = ()=> {
    goAway.style.display = "none";
    reply.style.display = "block";
    goBack.style.display = "block";
}

const goBackFunc= ()=> {
    goAway.style.display = "block";
    reply.style.display = "none";
    goBack.style.display = "none";
}

goAway.onclick = goAwayResponse;

goBack.onclick = goBackFunc;