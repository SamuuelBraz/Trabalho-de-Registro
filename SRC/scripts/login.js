document.getElementById("loginCadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var usuario = document.getElementById("Usuario").value;
    var senha = document.getElementById("Senha").value;

    // OBTÉM O USUÁRIO DO LOCALSTORAGE
    var storedUser = localStorage.getItem(usuario);

    if (storedUser) {
        var parsedUsuario = JSON.parse(storedUser);

        // Verifica se a senha corresponde
        if (parsedUsuario.senha === senha) {
            localStorage.setItem("usuarioLogado", JSON.stringify(parsedUsuario)); // ARMAZENA O USUÁRIO LOGADO
            window.location.href = "home.html"; // REDIRECIONA PARA A PÁGINA HOME
        } else {
            alert("Senha Incorreta");
        }
    } else {
        alert("Usuário não encontrado");
    }
});