export class EmailAlreadyExist extends Error {
  constructor() {
    super('This Email Already Exists')
  }
}
