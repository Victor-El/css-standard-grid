const ham = document.getElementById("ham");
const navBar = document.getElementById("nav-bar");


const toggle = (e) => {
    if (ham.className == "ham") {
        ham.className = "cross-ham";
        navBar.style.display = "block";
    } else {
        ham.className = "ham";
        navBar.style.display = "none";
    }
}

ham.addEventListener('click', toggle);
navBar.childNodes.forEach((e) => {
    e.childNodes.forEach((element) => {
        element.addEventListener('click', toggle);
    });
});