let numPuestos = document.getElementById('numPuestos');
let btnEnviar = document.getElementById('enviarbtn');

btnEnviar.addEventListener('click', puestos);
function puestos() {
    let numeroPuestos = parseInt(numPuestos.value);
    crearCuadrados();
}

function crearCuadrados() {
    let cantidadPuestos = parseInt(numPuestos.value);
    let filas = Math.ceil(Math.sqrt(cantidadPuestos));
    let columnas = Math.ceil(cantidadPuestos / filas);
    let cuadrosRestantes = cantidadPuestos;
    console.log(cuadrosRestantes)


    document.getElementById('ver').innerHTML = '';

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (cuadrosRestantes > 0) {
                let cuadrado = document.createElement('div');
                cuadrado.className = 'cuadrado';
                document.getElementById('ver').appendChild(cuadrado);
                cuadrosRestantes--;
            }
        }
    }
}

