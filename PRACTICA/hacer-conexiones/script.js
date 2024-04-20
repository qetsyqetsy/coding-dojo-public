document.addEventListener('DOMContentLoaded', function () {
console.log("página cargada...");

const userName = document.getElementById('userName');
const editProfile = document.getElementById('editProfile');

editProfile.addEventListener('click', function (event) {
event.preventDefault();
userName.textContent = 'George Borges';
});

// Función para actualizar el número de solicitudes de conexión
function actualizarNumeroSolicitudes() {
const numeroSolicitudes = document.getElementById('connectionRequestsNumber');
const cantidadElementos = document.querySelectorAll('#connectionRequestsList .card-list-item').length;
numeroSolicitudes.textContent = cantidadElementos;
}



// Obtener todos los elementos 'noBtn'
const botonesNo = document.querySelectorAll('#noBtn');

// Recorrer cada 'noBtn' y agregar el evento de clic
botonesNo.forEach(boton => {
boton.addEventListener('click', function () {
// Eliminar el 'card-list-item' padre cuando se hace clic en 'noBtn'
const elementoLista = this.closest('.card-list-item');
elementoLista.remove();
// Actualizar el número de solicitudes de conexión
actualizarNumeroSolicitudes();
});
});

// Obtener todos los elementos 'yesBtn'
const botonesSi = document.querySelectorAll('#connectionRequestsList #yesBtn');

// Adjuntar oyentes de eventos a cada 'yesBtn'
botonesSi.forEach(boton => {
boton.addEventListener('click', function () {
// Encontrar el 'card-list-item' padre
const elementoLista = this.closest('.card-list-item');
// Eliminar el 'card-list-item' de la lista de solicitudes de conexión
elementoLista.remove();
// Actualizar el número de solicitudes de conexión
actualizarNumeroSolicitudes();
// Eliminar el segundo elemento 'span'
const segundoSpan = elementoLista.querySelector('span:nth-child(2)');
elementoLista.removeChild(segundoSpan);
// Agregar el 'card-list-item' a la lista de conexiones
const listaConexiones = document.querySelector('#yourConnectionsCard .card-list');
listaConexiones.appendChild(elementoLista);

});
});
});