import UsuarioController from "../../controller/usuario.controller.js"


function carregarLogin() {
  const inputUsuario = document.querySelector('#inputUsuario')
  const inputSenha = document.querySelector('#inputSenha')
  const buttonEntrar = document.querySelector('#buttonEntrar')
  const labelErro = document.querySelector('#labelErro')

  buttonEntrar.addEventListener('click', login)

  const controller = new UsuarioController()

  function login() {
    try {
      labelErro.textContent = null
      controller.login(inputUsuario.value, inputSenha.value)
    } catch (e) {
      labelErro.textContent = e.message
    }
  }

}

carregarLogin()