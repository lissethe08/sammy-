const kitty = document.getElementById("kitty");

function jump() {
  if (!kitty.classList.contains("jump")) {
    kitty.classList.add("jump");
    setTimeout(() => {
      kitty.classList.remove("jump");
    }, 500);
  }
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

document.addEventListener("touchstart", jump);
