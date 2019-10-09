document.addEventListener("DOMContentLoaded", start);

function start() {
    document.querySelector("#menuknap").addEventListener("click", toggleMenu); /*Klik eventlistener på burgermenuen*/

    document.querySelector("#op-igen").addEventListener("click", scrollUp);
}



function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hide"); /*Toggle på menuen, så den åbner og lukker, når man klikker på den*/

    let erSkjult = document.querySelector("#menu").classList.contains("hide"); /*Varibel, når menuen indeholder "hide" som klasse*/

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰"; /*Hvis menuen indeholder classen "skjult" sæt tegnet til at være dette*/
    } else {
        document.querySelector("#menuknap").textContent = "X"; /*Ellers skift tegn til X*/
    }
}

function scrollUp() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera

}
