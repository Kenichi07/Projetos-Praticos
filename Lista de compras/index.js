import { criarItemDaLista } from "./scripts/criarItemDalista.js"
import verificarListaVazia from "./scripts/verificarListaVazia.js"

const listaCompras = document.getElementById('lista-de-compras')
const botaoAdicionar = document.getElementById('adicionar-item')

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault()
  const itemLista = criarItemDaLista()
  listaCompras.appendChild(itemLista)
  verificarListaVazia(listaCompras)
})

verificarListaVazia(listaCompras)