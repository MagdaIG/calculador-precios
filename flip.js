// Función que maneja el giro de la card
function girarCard(card) {
    // Verifica si la tarjeta ya ha girado
    if (!card.classList.contains('girar')) {
        // Si no ha girado, la giramos
        card.classList.add('girar');
        // Desactivamos el evento de clic para evitar que gire de vuelta al hacer clic
        card.removeEventListener('click', girarEvent);
    }
}

// Función para volver a activar el clic una vez que se complete la acción
function volverActivarCard(card) {
    card.addEventListener('click', girarEvent);
}

// Función manejadora del clic
function girarEvent() {
    girarCard(this);
}

// Agregamos el event listener a cada card al cargar la página
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', girarEvent);
});
