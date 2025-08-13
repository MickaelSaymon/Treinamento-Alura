// Minha versão personalizada do código da aula

alert('Sou apenas um curioso! Bem-vindo');

// Declarando variáveis iniciais
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Mensagem inicial solicitando dados
let mensagemDeErro = 'Me passe seus dados pessoais...';
alert(mensagemDeErro);

// Coletando informações do usuário
nome = prompt('Digite o seu nome.');
idade = prompt('Digite a sua idade.');

// Estrutura condicional para verificar idade
if (idade >= 18) {
    alert('Já pode ser um CLT!');
} else {
    alert('Aproveite a vida, criança!!!');
}
