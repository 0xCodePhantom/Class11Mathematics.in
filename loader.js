
  // Loader hide + content show with fade
 window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");

    setTimeout(() => {
      preloader.style.display = "none";
      content.classList.add("show"); // fade in effect
    }, 4000); // 4 second loader
  });