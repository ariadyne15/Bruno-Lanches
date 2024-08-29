function lerSite() {
    var elementosTexto = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, span, a, div, td");
    var textoCompleto = "";

    elementosTexto.forEach(function(elemento) {
        textoCompleto += elemento.textContent + " ";
        console.log(textoCompleto)
    });

    var utterance = new SpeechSynthesisUtterance(textoCompleto);
    utterance.lang = 'pt-BR'; // Define o idioma como português do Brasil
    utterance.rate = 1.0; // Ajuste a velocidade (1.0 é a velocidade normal, 1.5 é mais rápido)
    speechSynthesis.speak(utterance);
}