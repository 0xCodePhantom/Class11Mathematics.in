document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");

    const visited = localStorage.getItem("visited_once");

    if (!visited) {
        // First time: show loader
        preloader.style.display = "block";
        content.style.opacity = "0";

        // When page fully loads
        window.onload = () => {
            setTimeout(() => {
                preloader.style.display = "none";
                content.style.opacity = "1";

                // Mark user as visited
                localStorage.setItem("visited_once", "true");
            }, 1200); 
        };

    } else {
        // Second time onwards: no loader
        preloader.style.display = "none";
        content.style.opacity = "1";
    }
});
