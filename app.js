// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// El código se desarrollará en ingles para practicar c:

// Array de amigos
let friends = []; // Aquí se almacenarán los nombres ingresados

// Al cargar la página, se limpia el campo de entrada
window.onload = function() {
  clearInput();
};

// Función para agregar un amigo a la lista
function addFriend() {
    let inputName = document.getElementById("amigo"); // Referencia al input de nombre
    let name = inputName.value.trim(); // Se obtiene el valor ingresado y se valida que no sean espacios en blanco

    if (name != "") {
        friends.push(name); // Se agrega el nombre al array
        console.log(friends); // Se muestra en la consola para depuración
        showFriends(name); // Se muestra el nombre en la lista del HTML
    } else {
        alert("Por favor, digite un nombre válido."); // Alerta si el input está vacío
    }

    clearInput(); // Se limpia el campo después de agregar
}

// Función para mostrar un amigo en la lista del HTML
function showFriends(name) {
    let namesList = document.getElementById("listaAmigos"); // Se obtiene la lista <ul>
    namesList.innerHTML += '<li>' + name + '</li>'; // Se agrega el nuevo nombre como <li>
}

// Función para sortear un amigo aleatoriamente
function pickFriend(button) {
    if (friends.length != 0) {
        let result = document.getElementById("resultado"); // Se obtiene la lista de resultados
        const randomNumber = Math.floor(Math.random() * friends.length); // Número aleatorio válido
        result.innerHTML += '<li>' + friends[randomNumber] + '</li>'; // Se muestra el amigo sorteado

        // Se desactiva el botón para que no se pueda volver a usar
        button.disabled = true;
        button.style.backgroundColor = "gray";
    } else {
        alert("No hay amigos para sortear."); // Alerta si la lista está vacía
    }
}

// 🔹 Limpia el input del nombre
function clearInput() {
  document.getElementById("amigo").value = "";
}
