document.getElementById("discount-form").addEventListener("submit", function(event) {
    event.preventDefault();
    calcular();
});

function calcular() {
    const categoria = document.getElementById("categoria").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    if (categoria && cantidad > 0 && precio > 0) {
        const descuento = calcularDescuento(categoria, precio);
        const precioFinal = calcularPrecioFinal(cantidad, precio, descuento);

        document.getElementById("resultado").textContent = `El precio final para ${cantidad} productos de la categoría ${categoria} es: $${precioFinal}.`; // Muestra el precio sin decimales
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
}

function calcularDescuento(categoria, precio) {
    let descuento = 0;
    if (categoria === "ropa") {
        descuento = precio * 0.05; // 5% de descuento para ropa
    } else if (categoria === "electronica") {
        descuento = precio * 0.10; // 10% de descuento para electrónica
    }
    return descuento;
}

function calcularPrecioFinal(cantidad, precio, descuento) {
    const precioFinal = cantidad * (precio - descuento);
    return Math.round(precioFinal); // Elimina los decimales redondeando al entero más cercano
}

