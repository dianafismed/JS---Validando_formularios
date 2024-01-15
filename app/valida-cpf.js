// a função para validar o cpf já está sendo exportada
export default function validaCpf(campo){
  const cpf = campo.value.replace(/\.|-/g, "") // vai substituir estes caracteres por uma string vazia
  if(repeticao(cpf) || primeiroDigitoVerificador(cpf) || segundoDigitoVerificador(cpf)){
    campo.setCustomValidity('Esse CPF não é válido')
  }
}

function repeticao(cpf) {
  const numeros = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  return numeros.includes(cpf)  // se contiver algum destes blocos de números repetidos vai retornar true
}

function primeiroDigitoVerificador(cpf) {
  let soma = 0
  let multiplicador = 10

  for (let i = 0; i < 9; i++) {
    soma += cpf[i] * multiplicador;
    multiplicador--
  }
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[9];
}

function segundoDigitoVerificador(cpf) {
  let soma = 0
  let multiplicador = 11

  for (let i = 0; i < 10; i++) {
    soma += cpf[i] * multiplicador;
    multiplicador--
  }
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[10];
}