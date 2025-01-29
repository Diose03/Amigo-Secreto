
// Variable para almacenar los nombres de los amigos ingresados
let amigosIngresados = []

// Función para limpiar la caja de texto
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

// Función para añadir a los amigos ingresados a la lista
function agregarAmigo() {

    // Capturamos el valor del campo de texto con id="amigo"
    let amigo = document.getElementById("amigo").value;
    console.log(`Amigo ingresado: ${amigo}.`);
    // Si el campo esta vacío, mostramos una alerta pidiendo que se ingrese un nombre
    if (amigo == "") {
        alert("Por favor, Ingrese un nombre.")
    } else {
        // Sino, si el valor ya se encuentra en la lista, enviamos una alerta indicándolo
        if (amigosIngresados.includes(amigo)) {
            alert("Este amigo ya fue ingresado.")
        } else {
            // Sino, agreamos el valor a la lista
            amigosIngresados.push(amigo);
            // Llamamos a la funcion limpiarCaja()
            limpiarCaja();
            actualizarListaAmigos();
            console.log(`lista de amigos: ${amigosIngresados}`)
            return amigosIngresados;
        }
    }

}

// Función para agregar y mostrar los nombres ingresados en una lista
function actualizarListaAmigos() {

    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    for (let valor = 0; valor < amigosIngresados.length; valor++) {
        //Creamos el elemento para la lista
        let li = document.createElement("li");
        // Asignamos el nombre del amigo como contenido del <li>
        li.textContent = amigosIngresados[valor];
        // Agregamos el elemento a la lista
        lista.appendChild(li);


    }
}

// Función para elegir aleatoriamente al amigo secreto
function sortearAmigo() {
    // Se deben ingresar al menos 2 nombres para poder hacer el sorteo
    if (amigosIngresados.length < 2) {
        alert("Ingrese al menos dos amigos")
    } else {
        // Seleccionamos un índice aletario del arreglo
        let indice = Math.floor(Math.random() * amigosIngresados.length);

        // Accedemos al indice para obtener al valor que contiene, es decir al nombre
        let amigoSecreto = amigosIngresados[indice];

        // Obtenemos el elemento donde se mostrará el resultado
        let resultado = document.getElementById("resultado");

        // Limpiar la lista existente
        resultado.innerHTML = ""

        // Creamos un nuevo elemento <li> para mostrar el amigo sorteado y le damos un contenido de texto a mostrar
        let liResultado = document.createElement("li");
        liResultado.textContent = `Tu amigo secreto es: ${amigoSecreto}`;

        //Agregamos el <li> a la lista de resultados
        resultado.appendChild(liResultado);

    }

}
