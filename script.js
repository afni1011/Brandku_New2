const btnMulaiGratis = document.querySelector("#startButton");
const tagInfo = document.querySelector("#tag-info");

let counter = 0;

if (btnMulaiGratis && tagInfo) {
  btnMulaiGratis.addEventListener("click", () => {
    counter++;

    if (counter === 1) {
      console.log("clicked");

      tagInfo.classList.remove("hidden");
      tagInfo.textContent = "Clicked! Tombol Mulai Gratis berhasil diklik.";
    } else if (counter === 2) {
      console.log("off");

      tagInfo.textContent = "Off! Tombol sudah diklik dua kali.";
      btnMulaiGratis.classList.add("hidden");
    }
  });
}