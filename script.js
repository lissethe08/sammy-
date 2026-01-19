const kitty = document.getElementById("kitty");

let jumping = false;

function jump() {
  if (jumping) return;
  jumping = true;

  let up = 0;
  let down = 0;

  const upInterval = setInterval(() => {
    if (up >= 80) { // altura del salto
      clearInterval(upInterval);
      const downInterval = setInterval(() => {
        if (down >= 80) {
          clearInterval(downInterval);
          jumping = false;
        }
        kitty.style.bottom = 80 - down + "px";
        down += 5;
      }, 20);
    }
    kitty.style.bottom = up + "px";
    up += 5;
  }, 20);
}

document.addEventListener("click", jump);
document.addEventListener("touchstart", jump);
