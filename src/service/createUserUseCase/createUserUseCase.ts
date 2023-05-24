import { hash } from 'bcryptjs'
import { IUserRepository } from '@/repository/userRepository/types'
import { ICreateUserUseCaseRequest, ICreateUserUseCaseResponse } from './types'
import { EmailAlreadyExist } from '@/error/emailAlreadyExist/EmailAlreadyExist'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
  }: ICreateUserUseCaseRequest): Promise<ICreateUserUseCaseResponse> {
    const passwordHash = await hash(password, 10)
    const hasSameEmail = await this.userRepository.findByEmail(email)

    if (hasSameEmail) {
      throw new EmailAlreadyExist()
    }

    const user = await this.userRepository.create({
      name,
      email,
      password_hash: passwordHash,
    })

    return {
      user,
    }
  }
}
