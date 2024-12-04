document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('sombre-mode');
    const modeText = document.body.classList.contains('sombre-mode') ? 'Mode Clair' : 'Mode Sombre';
    this.textContent = modeText;
});

   
