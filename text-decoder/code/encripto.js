var textInput = document.getElementById("message");
var replaceContainer = document.querySelector("#text-replace");

var textReplace = document.querySelector(".replace");
var containerNotFound = document.querySelector(".not-found");

let textEncripted = "";

console.log(replaceContainer)

textInput.addEventListener("input", function() {
  textEncripted = textInput.value;
  if(textEncripted.length > 0) {
    containerNotFound.style.display = "none";
    replaceContainer.style.display = "flex";

    textReplace.innerText = textEncripted
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
  } else {
    containerNotFound.style.display = "block";
    replaceContainer.style.display = "none";
  }
});


function copiarTexto() {
  var elemento = document.querySelector(".replace");

  var selecionar = window.getSelection();
  var intervalo = document.createRange();
  intervalo.selectNodeContents(elemento);
  selecionar.removeAllRanges();
  selecionar.addRange(intervalo);

  // Executar a cópia para a área de transferência
  document.execCommand("copy");

  // Limpar a seleção
  selecionar.removeAllRanges();

  // Exibir mensagem de sucesso (opcional)
  alert("Texto copiado: " + elemento.textContent);
}