let livros = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI() { 
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  console.table(livros)
  exibirLivros(livros)
}

function formatarPreco(preco) {
  return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  });
}

function exibirLivros (listaLivros) {
  listaLivros.forEach(livro => {
    elementoParaInserirLivros.innerHTML += `<div class="livro">
    <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
    <h2 class="livro__titulo">
      ${livro.titulo}
    </h2>
    <p class="livro__descricao">${livro.autor}</p>
    <p class="livro__preco" id="preco">${formatarPreco(livro.preco)}</p>
    <div class="tags">
      <span class="tag">${livro.categoria}</span>
    </div>
  </div>` 
  });
}