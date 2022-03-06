const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;

    } else {

    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        document.getElementsByClassName("logo")[0].querySelector("img").src =
        "./img/icon.png";

    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        document.getElementsByClassName("logo")[0].querySelector("img").src =
        "./img/bw-icon.png";

    }
}

toggleSwitch.addEventListener("change", switchTheme, false);
