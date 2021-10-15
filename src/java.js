const modal = document.querySelector("#modal");
const trending = document.querySelector(".trending");
const sword = document.querySelector("#sword");
const jjk = document.querySelector("#jjk");
const grand = document.querySelector("#grand");
const sailor = document.querySelector("#sailor");
const komi = document.querySelector("#komi");
const slayer = document.querySelector("#slayer");
const chain = document.querySelector("#chain");
const takt = document.querySelector("#takt");

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

trending.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Jd_B6ox3qGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

sword.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/j8M5DaTWZ5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

jjk.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/buIGU86FYFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

grand.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/q8MREdw5zo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

sailor.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/XDnKDYpvEgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

komi.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/tLdLTSnmnoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

slayer.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Jd_B6ox3qGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

chain.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/JRjlEyP-rR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

takt.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Z77na0_sxcA?start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});
