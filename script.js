window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    key.classList.add("playing");
});


function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))


function snd(x) {
    const audio2 = document.querySelector(`audio[data-key="${x}"]`);
    const key2 = document.querySelector(`.key[data-key="${x}"]`);
    if (!audio2) return;
    audio2.play();
    audio2.currentTime = 0;
    key2.classList.add("playing");
}