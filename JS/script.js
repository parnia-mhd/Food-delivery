
// variables

let bergerIcon = document.querySelector("#berger-icon")
let closeIcon = document.querySelector(".closebtn")
let inputHeader = document.querySelector(".inpt-header-left")

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

// header bottom - left button 
let inputValue = 0
inputHeader.value = inputValue
// plus
function addNum() {
    let resultinput = inputHeader.value++
}
// minusNum
function minusNum() {
    if (inputHeader.value > 0) {
        let resultinput = inputHeader.value--
    }
}
