export class Exception extends Error {}

export class InvalidCredentialsException extends Exception {
  constructor(message = 'Usuário ou senha inválidos') {
    super(message)
  }
}

export class UsernameConflictException extends Exception {
  constructor(message = 'Nome de usuário já existe') {
    super(message)
  }
}

export class InvalidUserTypeException extends Exception {
  constructor(message = 'Tipo de usuário inválido') {
    super(message)
  }
}

export class StorageServiceException extends Exception {}

//User friendly exceptions (frontend exception)
export class ExternalException extends Exception {
  constructor(message = 'Oops...Alguma coisa saiu errado. Tente novamente mais tarde.') {
    super(message)
  }
}