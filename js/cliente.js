  
const formCliente = document.getElementById('formCliente');

popularTabelaClientes();

// Evento submit do form para cadstro do cliente
formCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let cliente = {
        nome: document.getElementById('txtName').value,
        cpf: document.getElementById('txtCpf').value,
        email: document.getElementById('txtEmail').value,
        telefone: document.getElementById('txtTelefone').value
    };

    // Grava a informação no LocalStorage
    gravarInfoLocalStorage('clientes', cliente);

    // Reacarrega as informações no Table
    popularTabelaClientes();


});

function popularTabelaClientes(){

    // Obtem a informação do LocalStorage
    let clientes = obtemInfoLocalStorage('clientes');

    let table = document.getElementById('tabelaClientes');

    limparTabela(table);

    // Insere as linhas da tabela
    clientes.forEach(cliente => {
        let row = table.insertRow(1);
        row.innerHTML =   `<td>${cliente.nome}</td>`
                        + `<td>${cliente.cpf}</td>`
                        + `<td>${cliente.email}</td>`
                        + `<td>${cliente.telefone}</td>`;
    });

}





