function calcularEdad(fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    var mesDiff = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
    // Si no ha cumplido años este año, resta uno
    if (mesDiff < 0 || (mesDiff === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    return edad;
}
// Ejemplo de uso
var fecha = "1999-05-15"; // Cambiar  esta fecha para probar
console.log("La edad es: ".concat(calcularEdad(fecha), " a\u00F1os"));
