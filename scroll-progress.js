// scroll-progress-bar
function updateProgress() {
    const bar = document.getElementById("progress-bar");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }

  window.addEventListener("scroll", () => requestAnimationFrame(updateProgress), {
    passive: true
  });
  window.addEventListener("resize", updateProgress, { passive: true });