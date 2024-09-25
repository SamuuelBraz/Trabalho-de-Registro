function salvar() {
    const nome = document.getElementById("Nome").value;
    const prazo = document.getElementById("Prazo").value;
    const descricao = document.getElementById("Descricao").value;

    // Verifica se todos os campos foram preenchidos
    if (nome && prazo && descricao) {
        // Formata a data para o padrão brasileiro
        const [year, month, day] = prazo.split('-');
        const prazoFormatado = `${day}/${month}/${year}`;

        // Cria um objeto projeto com os dados preenchidos
        const projeto = {
            nome: nome,
            prazo: prazoFormatado,
            descricao: descricao
        };

        // Busca a lista de projetos já salvos no localStorage ou cria um array vazio
        let projetos = JSON.parse(localStorage.getItem('projetos')) || [];

        // Adiciona o novo projeto à lista
        projetos.push(projeto);

        // Salva a lista atualizada no localStorage
        localStorage.setItem('projetos', JSON.stringify(projetos));

        // Chama a função para exibir a lista de projetos atualizada
        exibirProjetos();
    } else {
        alert('Por favor, preencha todos os campos!');
    }

    // Limpa os campos de entrada após salvar o projeto
    document.getElementById("Nome").value = '';
    document.getElementById("Prazo").value = '';
    document.getElementById("Descricao").value = '';
}

function exibirProjetos() {
    const projetosLista = document.getElementById('projetosLista');
    projetosLista.innerHTML = '';

    const projetos = JSON.parse(localStorage.getItem('projetos')) || [];

    projetos.forEach((projeto, index) => {
        const ul = document.createElement('ul');
        ul.textContent = `Nome do Projeto: ${projeto.nome} | Prazo: ${projeto.prazo} | Descrição: ${projeto.descricao}`;

        // Botão de Remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.background = 'black';
        btnRemover.style.color = 'red';
        btnRemover.onclick = function () {
            removerProjeto(index);
        };

        // Adicionar o botão ao item da lista
        ul.appendChild(btnRemover);
        projetosLista.appendChild(ul);
    });
}

function removerProjeto(index) {
    let projetos = JSON.parse(localStorage.getItem('projetos')) || [];

    // Remover o projeto do array
    projetos.splice(index, 1);

    // Atualizar o localStorage
    localStorage.setItem('projetos', JSON.stringify(projetos));

    // Atualizar a lista exibida
    exibirProjetos();
}

window.onload = exibirProjetos;
