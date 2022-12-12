baseDatos.forEach(escribirEnTabla);

function escribirEnTabla(operacion) {
    console.log(operacion);
}
// FALTA ESCRIBIR LA BASE DE DATOS EN EL HTML
// PARA QUE FIGUREN OPERACIONES PREVIAS


function registrarOperacion() {
    class Operacion {
        constructor(divisa, tipoOperacion, cantidad, cotizacion) {
            this.divisa = divisa;
            this.tipoOperacion = tipoOperacion;
            this.cantidad = cantidad;
            this.cotizacion = cotizacion;
        }
    }

    let divisaCapturar = document.querySelector('input[name = divisa]:checked').value;
    let tipoOperacionCapturar = document.querySelector('input[name = tipoOperacion]:checked').value;
    let cantidadCapturar = document.getElementById("cantidad").value;
    let cotizacionCapturar = document.getElementById("cotizacion").value;

    nuevaOperacion = new Operacion(divisaCapturar, tipoOperacionCapturar, cantidadCapturar, cotizacionCapturar);

    console.log(nuevaOperacion);
    agregarBaseDatos();
};


function agregarBaseDatos() {
    baseDatos.push(nuevaOperacion);
    console.log(baseDatos);
    agregarTabla();
};

function agregarTabla() {
    document.getElementById("tabla").innerHTML +=
        `<tbody>
    <td>${nuevaOperacion.divisa}</td>
    <td>${nuevaOperacion.tipoOperacion}</td>
    <td>${nuevaOperacion.cantidad}</td>
    <td>${nuevaOperacion.cotizacion}</td>
    <td>${(nuevaOperacion.cotizacion) * (nuevaOperacion.cantidad)}</td>
<tbody>`;

baseDatos.forEach(calcularTotal);
};



function calcularTotal(operacion) {
    console.log(operacion.cantidad);
}









