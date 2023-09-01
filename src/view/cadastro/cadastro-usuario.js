

console.log('cadastro de usuario')

const inputNomeDeUsuario = document.querySelector('#inputNomeDeUsuario')
const selectUsuario = document.querySelector('#selectUsuario')
const buttonSalvar = document.querySelector('#buttonSalvar')
const buttonVoltar = document.querySelector('#buttonVoltar')

buttonSalvar.addEventListener('click', cadastrarUsuario)

function cadastrarUsuario() {
    console.log('cadastrando usuário');
    
    const nomeDeUsuario = inputNomeDeUsuario.value
    const tipoDeUsuario = selectUsuario.value

    console.log('nome de usuário: ', nomeDeUsuario);
    console.log('select usuário: ', tipoDeUsuario)

    usuarios.push({ nomeDeUsuario, tipoDeUsuario })
    console.log('Usuarios: ', usuarios)

    escolaControle.cadastrarUsuario(usuario)
}

