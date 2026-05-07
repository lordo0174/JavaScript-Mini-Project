const personaje = document.getElementById('personaje');
const obstaculo = document.getElementById('obstaculo');
const marcadorPuntos = document.getElementById('puntos');

let puntos = 0;

document.addEventListener('keydown', (evento) => {
    if (evento.code === 'Space') {
        saltar();
    }
});

function saltar() {
    if (!personaje.classList.contains('animar-salto')) {
        personaje.classList.add('animar-salto');
        
        setTimeout(() => {
            personaje.classList.remove('animar-salto');
        }, 500);
    }
}

setInterval(() => {
    puntos++;
    marcadorPuntos.textContent = `Puntos: ${puntos}`;
}, 10);

setInterval(() => {
    const personajeTop = parseInt(window.getComputedStyle(personaje).getPropertyValue('top'));
    const obstaculoLeft = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('left'));

    if (obstaculoLeft < 90 && obstaculoLeft > 50 && personajeTop >= 150) {
        obstaculo.style.animation = "none"; // Detiene el juego
        obstaculo.style.display = "none";
        alert(`¡Has perdido! Puntos totales: ${puntos}`);
        location.reload(); // Reinicia la página
    }
}, 10);