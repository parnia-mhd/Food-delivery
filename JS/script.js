
// varables

let bergerIcon = document.querySelector("#berger-icon")
let closeIcon = document.querySelector(".closebtn")

function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0)"
    bergerIcon.style.display = "none"
    closeIcon.style.display = "block"
}
function closeNav() {
    // document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.transform = "translateX(-221px)"
    closeIcon.style.display = "none"
    bergerIcon.style.display = "block"

}