const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(valor);
}

function calcularTotalPagar(cantidad, plazo) {
    let total;

    // Mientras mayor es la cantidad, menor es el interés
    if (cantidad < 5000) {
        total = cantidad * 1.5;
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    } else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    // Plazo: a más plazo, mayor interés
    if (plazo === 6) {
        total *= 1.1; // Ajusta el total según el interés acumulativo
    } else if (plazo === 12) {
        total *= 1.2; // Ajusta el total según el interés acumulativo
    } else {
        total *= 1.3; // Ajusta el total según el interés acumulativo
    }
    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}
