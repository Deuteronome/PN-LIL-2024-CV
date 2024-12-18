document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".typewriting-text");

    elements.forEach((el) => {
        const text = el.textContent;
        el.textContent = "";
        let index = 0;

        const interval = setInterval(() => {
            if (index < text.length) {
                el.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
                el.style.borderRight = "none"; // Supprime la barre clignotante
            }
        }, 50); // Ajuste la vitesse ici (ms par lettre)
    });
});
