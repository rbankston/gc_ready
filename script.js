function main() {
    let grow = document.getElementById("grow-me");
    grow.classList.add("big");

    let shrink = document.getElementById("shrink-me");
    shrink.classList.remove("big");

    let myList = document.querySelectorAll("li");
    for (let li of myList) {
        console.log(li.innerText);
    }

    let a = document.querySelector(".link")
     a.setAttribute("href", "https://www.exmple.com");
     a.innerText = "somewhere";

    let hide = document.getElementById("hide-me");
    hide.style.display = "none";

    let show = document.getElementById("show-me");
    show.style.display = "block";

    let nameInput = document.getElementById("name").value;
    let heading = document.querySelector("h1");
    heading.innerText = `Welcome ${nameInput}!`;
}