let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while (nomeUsuario == "") {
    nomeUsuario = prompt("QUal seu nome?");

}
if (nomeUsuario == null) {
    elemento.textContent = 'Olá Fulano!';
} else {
    elemento.textContent = nomeUsuario;
}


