import { describe, it, expect, beforeEach } from 'vitest'
import { CreateUserUseCase } from '../createUserUseCase/createUserUseCase'
import { IUserRepository } from '@/repository/userRepository/types'
import { User, UserRepositoryInMemory } from '@/mock'

let sut: CreateUserUseCase
let userRepositoryInMemory: IUserRepository

describe('Create User Use Case', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    sut = new CreateUserUseCase(userRepositoryInMemory)
  })
  it('should create a user using the parameters email, name, password', async () => {
    const { user } = await sut.execute(User)

    expect(user.id).toEqual(expect.any(String))
  })
})
