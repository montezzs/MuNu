document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("titulo").addEventListener("click", function () {
        var newText = prompt("Novo Texto:");
        if (newText) {
            this.textContent = newText;
        }
    });
});