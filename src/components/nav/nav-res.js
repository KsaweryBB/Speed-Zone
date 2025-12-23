document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("side-menu");
  const button = document.getElementById("menu-button");

  let menuOpen = false;

  // Kliknięcie przycisku otwiera lub zamyka menu
  button.addEventListener("click", (e) => {
    menuOpen = !menuOpen;
    menu.style.left = menuOpen ? "0px" : "-400px";
    e.stopPropagation();
  });

  // Kliknięcie w link zamyka menu
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.style.left = "-400px";
      menuOpen = false;
    });
  });

  // Kliknięcie poza menu zamyka je
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== button) {
      menu.style.left = "-400px";
      menuOpen = false;
    }
  });

  // Zatrzymaj zamykanie przy kliknięciu w menu
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});