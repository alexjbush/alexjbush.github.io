(() => {
  // <stdin>
  var menuOpen = true;
  var menuToggle = document.getElementById("menu-toggle");
  var menuWhenOpen = document.getElementById("menu-when-open");
  var menuWhenClosed = document.getElementById("menu-when-closed");
  function toggleMenu() {
    if (menuOpen) {
      menuOpen = false;
      menuWhenOpen?.classList.add("hidden");
      menuWhenClosed?.classList.remove("hidden");
    } else {
      menuOpen = true;
      menuWhenOpen?.classList.remove("hidden");
      menuWhenClosed?.classList.add("hidden");
    }
  }
  menuToggle?.addEventListener("click", toggleMenu);
  toggleMenu();
})();
