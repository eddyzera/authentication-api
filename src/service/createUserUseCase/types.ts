import { User } from '@prisma/client'

export interface ICreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

export interface ICreateUserUseCaseResponse {
  user: User
}
