import { TipoDeUsuario } from "../model/entity/usuario.js";
import { ExternalException, InvalidUserTypeException, InvalidCredentialsException } from "../model/exception/exceptions.js";
import { UsuarioService } from "../model/service/usuario.service.js";

class UsuarioController {
  constructor() {
    this.usuarioService = new UsuarioService()
  }
  login(nomeDeUsuario, senha) {
    try {
      const usuario = this.usuarioService.login(nomeDeUsuario, senha)
    switch (usuario.tipoDeUsuario) {
      case TipoDeUsuario.Auxiliar:
        window.location.href = '../secretaria/secretaria.html'
        break;
      case TipoDeUsuario.Professor:
        window.location.href = '../usuario/professor/professor.html'
        break;
        case TipoDeUsuario.Aluno:
          window.location.href = '../usuario/aluno/aluno.html'
          break;
      default:
        throw new InvalidUserTypeException(`Tipo de usuário ${usuario.tipoDeUsuario} inválido`)
    }
    } catch(error) {
      console.error(error) //tratar (enviar p backend, etc)

      if (error instanceof InvalidCredentialsException) {
        throw new ExternalException(error.message)
      }
      
      throw new ExternalException()
    }
  }

  existe(nomeDeUsuario) {
    return this.usuarioService.buscar(nomeDeUsuario)
  }

  cadastrar(nomeDeUsuario, senha, tipoDeUsuario) {
    try {
      return this.usuarioService.cadastrar(nomeDeUsuario, senha, tipoDeUsuario)
    } catch(error) {
      console.error(error) //tratar (enviar p backend, etc)
      throw new ExternalException()
    }
  }
}


export default UsuarioController