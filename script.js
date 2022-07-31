// quando o usuario rolar a pagina:
window.onscroll = function() {getSticky()};

// declarar variaveis
var header = document.getElementById("sHeader");
var preheader = document.getElementById("preHeader");
var sticky = preheader.offsetHeight;


// adicionar classe ao header quando a posiçao for atingida/ remover quando sair do scroll
function getSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.innerHTML = '<p>Cordel Moderno por <a href ="">Milton Duarte</a></p>';
    
  } else {
    header.classList.remove("sticky");
    header.innerHTML = '<p>Por <a href ="">Milton Duarte</a></p>'
    
  }
}