function calcularEdad(fechaNacimiento: string): number {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    const mesDiff = fechaActual.getMonth() - fechaNacimientoDate.getMonth();

    // Si no ha cumplido años este año, resta uno
    if (mesDiff < 0 || (mesDiff === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad;
}

// Ejemplo de uso
const fecha = "1999-05-26"; // Cambiar  esta fecha para probar
console.log(`La edad es: ${calcularEdad(fecha)} años`);