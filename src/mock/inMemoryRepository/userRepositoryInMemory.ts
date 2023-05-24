import { randomUUID } from 'node:crypto'
import { IUserRepository } from '@/repository/userRepository/types'
import { Prisma, User } from '@prisma/client'

export class UserRepositoryInMemory implements IUserRepository {
  public item: Array<User> = []
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }
    this.item.push(user)
    return user
  }
}
