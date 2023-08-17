/*
Autor: Jorge Marcelo
Data de Criação: 17/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando os elementos pelo DOM*/
let gerarNumero = document.getElementById("gerarNumero");
let primeiroNum = document.getElementById("firstNum");
let segundoNum = document.getElementById("secondNum");
let numeroResultado = document.getElementById("resultado");

/*Função que vai gerar o numero aleatorio*/
function numeroAleatorio(evento) {
evento.preventDefault();

/*Converte o valor dos inputs para um número*/
let pNum = Number(primeiroNum.value);
let sNum = Number(segundoNum.value);

if (pNum > sNum) {

/*Faz a troca dos valores das variaveis*/
pNum = sNum + pNum;
sNum = pNum - sNum;
pNum = pNum - sNum;
    
/*Atualiza os valors dos inputs
para os valores que foram trocados
acima*/
primeiroNum.value = pNum;
segundoNum.value = sNum;
}

/*Gera um numero aleatorio entre as variveis*/
let numGerado = Math.floor(Math.random() * (sNum - pNum + 1) + pNum);
numeroResultado.textContent = `Numero gerado: ${numGerado}`;
}

/*Ouvintes de eventos de click e
de carregamento da pagina*/
gerarNumero.addEventListener("click", numeroAleatorio);
window.addEventListener("load", numeroAleatorio);

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})
