import { hash } from 'bcryptjs'
import { IUserRepository } from '@/repository/userRepository/types'
import { ICreateUserUseCaseRequest, ICreateUserUseCaseResponse } from './types'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
  }: ICreateUserUseCaseRequest): Promise<ICreateUserUseCaseResponse> {
    const passwordHash = await hash(password, 10)
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
