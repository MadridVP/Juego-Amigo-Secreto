// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtener el valor del campo de texto
  let nombre = document.getElementById("amigo").value;

  // Validar que el campo no esté vacío
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detener la función si el campo está vacío
  }

  // Agregar el nombre al array de amigos
  amigos.push(nombre);

  // Limpiar el campo de texto después de agregar el amigo
  document.getElementById("amigo").value = "";

  // Actualizar la lista de amigos en la interfaz
  actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
  // Obtener el elemento de la lista
  let lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorrer el array y agregar cada amigo como un <li> en la lista
  amigos.forEach(function (amigo) {
    let li = document.createElement("li"); // Crear el nuevo elemento <li>
    li.textContent = amigo; // Asignar el nombre del amigo como texto del <li>
    lista.appendChild(li); // Agregar el <li> a la lista
  });
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
  // Verificar si hay amigos en la lista
  if (amigos.length === 0) {
    alert("¡Agrega amigos primero!");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado usando el índice aleatorio
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el amigo secreto sorteado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSeleccionado}</li>`;
}
// Función para resetear el juego
function resetearJuego() {
  // Vaciar el array de amigos
  amigos = [];

  // Limpiar la lista de amigos en el HTML
  document.getElementById("listaAmigos").innerHTML = "";

  // Limpiar el resultado del sorteo
  document.getElementById("resultado").innerHTML = "";

  // Opcionalmente, también puedes limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}
