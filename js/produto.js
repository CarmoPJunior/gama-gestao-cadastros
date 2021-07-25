  
const formProduto = document.getElementById('formProduto');

popularTabelaProdutos();

// Evento submit do form para cadastro do produto
formProduto.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let produto = {
        codigo:         document.getElementById('txtCodigoProduto').value,
        nome:           document.getElementById('txtNomeProduto').value,
        valor:          document.getElementById('txtValorProduto').value,
        quantidade:     document.getElementById('txtQuantidadeProduto').value
    };

    // Grava a informação no LocalStorage
    gravarInfoLocalStorage('produtos', produto);

    // Reacarrega as informações no Table
    popularTabelaProdutos();

});

function popularTabelaProdutos(){

     // Obtem a informação do LocalStorage
     let produtos = obtemInfoLocalStorage('produtos');

     let table = document.getElementById('tabelaProdutos');
 
     limparTabela(table);
 
     // Insere as linhas da tabela
     produtos.forEach(produto => {
         let row = table.insertRow(1);
         row.innerHTML =   `<td>${produto.codigo}</td>`
                         + `<td>${produto.nome}</td>`
                         + `<td>${produto.valor}</td>`
                         + `<td>${produto.quantidade}</td>`;
     });

}



