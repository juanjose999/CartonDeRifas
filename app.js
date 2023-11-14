let numPuestos = document.getElementById('numPuestos');
let btnEnviar = document.getElementById('enviarbtn');
let countPuestosVendidos = 0;
let contadorPuestosDisponibles = 0;

btnEnviar.addEventListener('click', puestos);

function puestos() {
    let valorNumPuestos = parseInt(numPuestos.value);

    if (valorNumPuestos >= 1 && valorNumPuestos <= 300) {
        contadorPuestosDisponibles = valorNumPuestos;
        let cuadros = crearCuadrados(valorNumPuestos);
        agregarBotonesVenta(cuadros);
    }
}

function crearCuadrados(cantidadPuestos) {
    let filas = Math.ceil(Math.sqrt(cantidadPuestos));
    let columnas = Math.ceil(cantidadPuestos / filas);
    let cuadrosRestantes = cantidadPuestos;
    let contador = 1;

    let cuadros = [];

    document.getElementById('ver').innerHTML = '';

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (cuadrosRestantes > 0) {
                let cuadrado = document.createElement('div');
                cuadrado.className = 'cuadrado';

                let numText = document.createElement('span');
                numText.className = 'num-text';
                numText.textContent = contador++;

                cuadrado.appendChild(numText);
                document.getElementById('ver').appendChild(cuadrado);
                cuadrosRestantes--;

                cuadros.push(cuadrado);
            }
        }
    }

    contadorPuestosDisponibles = cuadrosRestantes;
    document.getElementById('contadorDisponibles').innerHTML = contadorPuestosDisponibles;
    console.log(contadorPuestosDisponibles);

    return cuadros;
}

function agregarBotonesVenta(cuadros) {
    cuadros.forEach(cuadrado => {
        let venta = document.createElement('div');
        venta.className = 'venta';

        let btnVender = document.createElement('button');
        btnVender.textContent = 'Vender';
        btnVender.className = 'vender-btn';

        let inputComprador = document.createElement('input');
        inputComprador.type = 'text';
        inputComprador.placeholder = 'Nombre cliente';
        inputComprador.className = 'input-comprador';

        let btnConfirmarVenta = document.createElement('button');
        btnConfirmarVenta.textContent = 'Vender';
        btnConfirmarVenta.className = 'btn-confirmar-venta';
        btnConfirmarVenta.addEventListener('click', function () {
            cuadrado.textContent = inputComprador.value;
            cuadrado.classList.add('vendido');
            inputComprador.style.display = 'none';
            btnVender.style.display = 'block';
            btnConfirmarVenta.style.display = 'none';
            venta.style.display = 'none';

            countPuestosVendidos++;
            contadorPuestos.innerHTML = countPuestosVendidos;

            contadorPuestosDisponibles--;
            document.getElementById('contadorDisponibles').innerHTML = contadorPuestosDisponibles;        });

        btnVender.addEventListener('click', function () {
            inputComprador.style.display = 'block';
            btnVender.style.display = 'none';
            btnConfirmarVenta.style.display = 'block';
        });

        venta.appendChild(btnVender);
        venta.appendChild(inputComprador);
        venta.appendChild(btnConfirmarVenta);


        cuadrado.appendChild(venta);


        cuadrado.addEventListener('click', function () {
            venta.style.display = 'block';
        });
    });
}

let contadorPuestos = document.getElementById('contador');
contadorPuestos.innerHTML = countPuestosVendidos;

