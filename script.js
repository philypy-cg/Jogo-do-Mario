const mario = document.querySelector(".mario");

const up = () => {
    mario.classList.add("up");

    setTimeout(() => {
        mario.classList.remove("up");

    }, 500);
}

document.addEventListener("keydown", up);