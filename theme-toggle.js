document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");
    let circle = null;
    if (toggle) {
      circle = toggle.querySelector(".neon-circle");
    }

    if (toggle && circle) {
      if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark");
        circle.classList.replace("sun", "moon");
      } else {
        body.classList.remove("dark");
        circle.classList.replace("moon", "sun");
      }

      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        localStorage.setItem("dark-mode", isDark);
        if (isDark) circle.classList.replace("sun", "moon");
        else circle.classList.replace("moon", "sun");

        showToast("Effect will be shown on the next page.");
      });
    }
  });
    function showToast(message, duration = 3000) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, duration);
  }