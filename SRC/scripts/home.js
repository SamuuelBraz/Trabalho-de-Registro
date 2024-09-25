// Função para salvar os dados do projeto no localStorage
function salvar() {
    const nome = document.getElementById("Nome").value;
    const membro = document.getElementById("Membros").value;
    const prazo = document.getElementById("Prazo").value;
    const descricao = document.getElementById("Descricao").value;
    
       // Verifica se todos os campos foram preenchidos
    if (nome && membro && prazo && descricao ){
           // Cria um objeto projeto com os dados preenchidos
        const projeto = {
            nome : nome,
            membro: membro,
            prazo: prazo,
            descricao: descricao
        };

        // BUSCA A LSTA DE PROJETOS JÁ SALVOS NO LOCALSTORAGE OU CRIA UM ARRAY VAZIO
        let projetos = JSON.parse(localStorage.getItem('projetos')) || [];

        //ADICIONA O NOVO PROJETO A LISTA
        projetos.push(projeto);

        //SALVA A LISTA ATUALIZADA NO LOCALSTORAGE
        localStorage.setItem('projetos', JSON.stringify(projetos));

        //CHAMA A FUNÇÃO PARA EXIBIR A LISTA DE PROJETOS ATUALIZADA
        exibirProjetos();
    } else { 
        alert('Por favor, preencha todos os campos!');
    }

    //LIMPA OS CAMPOS DE ENTRADA APÓS SALVAR O PROJETO
    document.getElementById("Nome").value = '';
    document.getElementById("Membros").value = '';
    document.getElementById("Prazo").value = '';
    document.getElementById("Descricao").value = '';
}

//FUNÇÃO PAARA EXIBIR A LISTA DE PROJETOS NA TELA

    //SELECIONA O ELEMENTO HTML ONDE OS PROJETOS SERÃO EXIBIDOS 

    function exibirProjetos() {
    const projetosLista = document.getElementById('projetosLista');
    projetosLista.innerHTML = '';

    //BUSCA A LISTA DE PROJETOS E CRIA UM ELEMENTO UM ARRAY VAZIO SE NÃO HOUVER NADA SALVO
    const projetos = JSON.parse(localStorage.getItem('projetos')) || [];
 }
  
 //PERCORRER CADA PROJETO E CRIA UM ELEMENTO DE LISTA (UL) PARA EXIBI-LOS
    projetos.forEach(projeto => {
        const ul = document.createElement('ul');
        ul.textContent = `Nome do Projeto: ${projeto.nome}
         Membro: ${projeto.membro}
         Prazo: ${projeto.prazo}
         Descrição: ${projeto.descricao}`;
        projetosLista.appendChild(ul);
    });

  

 function exibirProjetos() {
    const projetosLista = document.getElementById('projetosLista');
    projetosLista.innerHTML = '';

    const projetos = JSON.parse(localStorage.getItem('projetos')) || [];

        projetos.forEach((projeto, index) => {
        const ul = document.createElement('ul');
        ul.textContent = `Nome do Projeto: ${projeto.nome} | Nome dos Membros:${projeto.membro} | Prazo: ${projeto.prazo} | Descrição: ${projeto.descricao}`

        // BOTÃO DE REMOVER
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '15px';
        btnRemover.style.background = 'darkgray';
        btnRemover.style.color = 'darkred';
        btnRemover.onclick = function () {
            removerProjeto(index);
        };

        // ADICIONAR O BOTÃO AO ITEM DA LISTA
        ul.appendChild(btnRemover);
        projetosLista.appendChild(ul);
    });

    

}




function removerProjeto(index) {
    let projetos = JSON.parse(localStorage.getItem('projetos')) || [];

    // REMOVER O PROJETO DO ARRAY
    projetos.splice(index, 1);

    // ATUALIZAR O LOCAL STORAGE
    localStorage.setItem('projetos', JSON.stringify(projetos));

    // ATUALIZAR A LISTA EXIBIDA
    exibirProjetos();
}
window.onload = exibirProjetos;

 







