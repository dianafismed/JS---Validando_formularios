import validaCpf from "./valida-cpf.js"; // importa a função para validação do cpf
import maiorDeIdade from "./valida-idade.js";

const campos = document.querySelectorAll('[required]'); // todos os elementos que contiverem o required

campos.forEach((campo) =>{
  campo.addEventListener('blur', ()=>verificaCampo(campo)) // blur = quando tira o foco do campo em questão
  campo.addEventListener('invalid', evento => evento.preventDefault()) // agora não aparece mais a mensagem de erro padrao nos campos
})

function verificaCampo(campo){
  let mensagem = ''
  campo.setCustomValidity('') // apaga a mensagem de erro

  if(campo.name == 'cpf' && campo.value.length >= 11){
    validaCpf(campo)
  }
  if(campo.name == 'aniversario' && campo.value != ''){
    maiorDeIdade(campo)
  }

  tiposDeErro.forEach(erro =>{
    if(campo.validity[erro]){
      mensagem = mensagens[campo.name][erro]
    }
  })
  const msgErro = campo.parentNode.querySelector('.mensagem-erro') //parentNode procura o campo de span perto do campo que está sendo tratado
  const validadorInput = campo.checkValidity()
  if(!validadorInput){
    msgErro.textContent = mensagem
  }else{
    msgErro.textContent = ''
  }

}

// Submetendo os dados preenchidos
const formulario = document.querySelector('[data-formulario]')
formulario.addEventListener('submit', (e)=>{
  e.preventDefault()
  const listaRespostas = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "rg": e.target.elements["rg"].value,
    "cpf": e.target.elements["cpf"].value,
    "aniversario": e.target.elements["aniversario"].value,
  }
  localStorage.setItem("cadastro", JSON.stringify(listaRespostas)); //gera um json com todas as respostas
  window.location.href = "./abrir-conta-form-2.html"; // direciona para a página seguinte
})