import {Usuario} from '../entity/usuario.js'
import { InvalidCredentialsException, StorageServiceException, UsernameConflictException } from '../exception/exceptions.js'
import { StorageService } from './storage.service.js'

export class UsuarioService {
  usuariosKey = 'usuarios'

  //TODO transformar em propriedades da classe
  constructor() {
    this.storageService = new StorageService()
    this.usuarios = this.storageService.carregar(this.usuariosKey) ?? []
  }

  login(nomeDeUsuario, senha) {
    const usuario = this.buscar(nomeDeUsuario)
    
    if (senha !== usuario?.senha) {
      throw new InvalidCredentialsException()
    }

    return usuario
  }
  
  buscar(nomeDeUsuario) {
    for (let posicao = 0; posicao < this.usuarios.length; posicao++) {
      const elementoNaPosicao = this.usuarios[posicao]
      const {nome, senha } = elementoNaPosicao
      if (nome === nomeDeUsuario) {
        return elementoNaPosicao
      }
    }
  }

  /* 
  @throws StorageServiceException
   */
  cadastrar(nomeDeUsuario, senha, tipoDeUsuario) {
    if (this.buscar(nomeDeUsuario)) {
      throw new UsernameConflictException()
    }

    this.usuarios.push(new Usuario(nomeDeUsuario, senha, tipoDeUsuario))
    this._salvar()
  }

   /* 
  @throws StorageServiceException
   */
  _salvar() {
    try {
      this.storageService.salvar(this.usuariosKey, this.usuarios)  
    } catch (error) {
      throw new StorageServiceException(error.message)
    }
  }
}