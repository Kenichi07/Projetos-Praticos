function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado.");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  let instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  listaDeTeclas[contador].onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  };
}
