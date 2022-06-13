const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
     "Certeza!",
     "Não tenho certeza.",
     "É decididamente assim.",
     "Não conte com isso.",
     "Sem dúvidas!",
     "Pergunte novamente mais tarde.",
     "Sim definitívamente.",
     "Minha resposta é não.",
     "você pode contar com isso.",
     "Melhor não te dizer agora.",
     "A meu ver, sim.",
     "Minhas fontes dizem não.",
     "Provavelmente.",
     "Não é possível prever agora.",
     "Perspectiva boa.",
     "As perspectivas não são tão boas.",
     "Sim.",
     "Concentre-se e pergunte novamente.",
     "Sinais apontam que sim."
 ]

 
 function fazerPergunta() {

    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
      }

      buttonPerguntar.setAttribute("disabled", true )

      const pergunta = "<div>" + inputPergunta.value + "</div>"



    const totalRespostas = respostas.length
    const numerosAleatorios = Math.floor(Math.random() * totalRespostas);
    console.log(respostas[numerosAleatorios]);

    elementoResposta.innerHTML = pergunta + respostas[numerosAleatorios];

    elementoResposta.style.opacity = 1

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    },3000 )
    
 }