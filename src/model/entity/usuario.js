export class TipoDeUsuario {
  Auxiliar = 'Auxiliar'
  Aluno = 'Aluno'
  Professor = 'Professor'
}

export class Usuario {
  constructor(nome, senha, tipoDeUsuario, matricula = crypto.randomUUID()) {
    this.matricula = matricula
    this.nome = nome
    this.senha = senha
    this.tipoDeUsuario = tipoDeUsuario
  }
}
