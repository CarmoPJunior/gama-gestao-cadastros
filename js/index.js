
// Função utilizada redirecionar para outa página
function redirect(page){
    location.href=page;
}


// Função utilizada para limpar as tabelas
function limparTabela (table) {    
    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}


function gravarInfoLocalStorage(nomeItem, informacao){

    //Verifica se a informação do localstorage está nula
    inicializarInfoLocalStorage(nomeItem);

    // Copia o array do localstorage e adiciona um novo objeto ao final.
    localStorage.setItem(
        nomeItem,
        JSON.stringify([...JSON.parse(localStorage.getItem(nomeItem)), informacao ])
    );

}

function obtemInfoLocalStorage(nomeItem){

    inicializarInfoLocalStorage(nomeItem);

    return JSON.parse(localStorage.getItem(nomeItem));

}

function inicializarInfoLocalStorage(nomeItem){

    // Adicionando um array vazio caso objeto no localstorage estiver nulo
    if (localStorage.getItem(nomeItem) === null) {        
        localStorage.setItem(nomeItem, JSON.stringify([]));
    } 
}