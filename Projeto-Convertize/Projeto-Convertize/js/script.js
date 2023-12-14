

function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Limpe os resultados anteriores e reexiba as divs products-container e mostVisitedProducts
    const searchResultsContainer = document.getElementById("resultadosearch");
    searchResultsContainer.innerHTML = "";
    document.getElementById("products-container").style.display = "inline-flex";
    document.getElementById("mostVisitedProducts").style.display = "block";

    // Busque nos produtos exibidos nas divs products-container e mostVisitedProducts
    const productsContainers = document.querySelectorAll("#products-container div, #mostVisitedProducts div");

    let hasResults = false;

    // Percorra cada produto e verifique se corresponde ao termo de pesquisa
    productsContainers.forEach(productContainer => {
        const productName = productContainer.querySelector("h2").textContent.toLowerCase();
        const productDescription = productContainer.querySelector("p").textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            // Se corresponder, adicione-o aos resultados da pesquisa
            const clone = productContainer.cloneNode(true);
            searchResultsContainer.appendChild(clone);
            hasResults = true;

            document.getElementById("Ppmais").style.display = "none";
            document.getElementById("Ppmaisvis").style.display = "none";
        }
    });

    // Se não houver resultados, exiba a mensagem "O produto não existe" e oculte as divs products-container e mostVisitedProducts
    if (!hasResults) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "O produto não existe";
        searchResultsContainer.appendChild(noResultsMessage);

        document.getElementById("Ppmais").style.display = "none";
        document.getElementById("Ppmaisvis").style.display = "none";
    }
}


    var nome  = []
    var mail  = []
    var tel   = []
    var ass   = []
    var text  = []
    
function cadastrar(){
    

     nome.push(document.getElementById('inputNome').value);
     console.log ("Nome Completo: " + nome);
    
     mail.push(document.getElementById('inputEmail').value);
     console.log (" E-mail: " + mail);

    tel.push(document.getElementById('inputTel').value);
    console.log (" Telefone: " + tel);

    ass.push(document.getElementById('selectAssunto').value);
    console.log (" Assunto: " + ass);

    text.push(document.getElementById('textMsg').value);
    console.log (" Mensagem: " + text);
    
    document.getElementById("formm").reset()
}

