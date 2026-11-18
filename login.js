document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value;

        if (usuario === "VaiCorinthians@gmail.com" && senha === "GTA 6") {

            window.location.href = "cadastro.html";

        } else {

            window.location.href = "erro.html";

        }

    });

});