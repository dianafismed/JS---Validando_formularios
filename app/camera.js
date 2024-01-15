const btnCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')
const msgQuadro = document.querySelector('#msg-quadro')
btnCamera.addEventListener('click', async function(){
  const iniciaCamera = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
  btnCamera.style.display = 'none'
  msgQuadro.style.display = 'none'
  campoCamera.style.display = 'block'
  video.srcObject = iniciaCamera;
})

const btnTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
let imagemURL = "";
btnTirarFoto.addEventListener('click', function () {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); 
  imagemURL = canvas.toDataURL('image/jpeg'); 
  campoCamera.style.display = "none";
  mensagem.style.display = "block";
});

const btnEnviarFoto = document.querySelector("[data-enviar]")
btnEnviarFoto.addEventListener('click', () => {
  const receberDadosExistentes = localStorage.getItem("cadastro") // busca os dados inseridos no formulário
  const converteRetorno = JSON.parse(receberDadosExistentes) // faz um json destes dados
  converteRetorno.imagem = imagemURL // adiciona a imagem capturada ao arquivo já existente
  localStorage.setItem('cadastro', JSON.stringify(converteRetorno)) // converte em json e salva no localStorage
  window.location.href = '../pages/abrir-conta-form-3.html' // direciona para a próxima página
})