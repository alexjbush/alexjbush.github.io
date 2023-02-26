(() => {
  // <stdin>
  var toggle = document.getElementById("dark-mode-toggle");
  function applyTheme() {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  function toggleTheme() {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    applyTheme();
  }
  toggle?.addEventListener("click", toggleTheme);
  var matchFunction = window && typeof window.matchMedia === "function" ? window.matchMedia : void 0;
  if (localStorage.getItem("theme") === "dark" || !("theme" in localStorage) && matchFunction && matchFunction("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  applyTheme();
})();
