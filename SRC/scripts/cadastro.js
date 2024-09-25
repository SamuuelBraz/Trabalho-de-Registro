//Variáveis de validação e captura de elementos
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;
    
let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;


let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validConfirmaSenha = false;

// Validação do nome
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 5) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 6 caracteres';
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        validNome = true;
    }
});

//validação de usuário
usuario.addEventListener('keyup',() =>{
    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style','color: red');
        labelUsuario.innerHTML = 'Usuário *Insira no minímo 6 caracteres'
        validUsuario = false;
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário';
        validUsuario = false
    }
})

// Validação da senha
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
        validSenha = false;

    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        validSenha = true;
    }});

// Confirmação da senha

confirmarSenha.addEventListener('keyup', () => {
    if (senha.value !== confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        confirmarSenha.setAttribute('style', 'color: red');
        validConfirmaSenha = false;
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha';
        confirmarSenha.setAttribute('style', 'color: green');
        validConfirmaSenha = true;
    }

    function cadastrar() {
        if (validNome && validUsuario && validSenha && validConfirmaSenha) {
            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
            listaUser.push({
                nomecad: nome.value,
                usuariocad: usuario.value,
                senhacad: senha.value
            });
    
            localStorage.setItem('listaUser', JSON.stringify(listaUser));
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Preencha todos os campos corretamente");
        }
    }
});
   document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    //VERIFICAR SE AS SENHAS COINCIDEM
    if (senha !== confirmarSenha) { 
        alert("As senhas não coincidem");
        return;
    } 
    // CRIANDO O OBJETO DO USUÁRIO
    const user = {
        nome: nome,
        nomedeUsuario: usuario, // Mantido consistente com o nome da variável 'usuario'
        senha: senha
    };

    // SALVAR O USUÁRIO NO LOCALSTORAGE
    localStorage.setItem(usuario, JSON.stringify(user));

    alert("Cadastro realizado com sucesso! Por favor, faça login.");
    window.location.href = "Login.html";
});