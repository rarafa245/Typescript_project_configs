import { UserCreator as UserCreatorInterface } from '@/domain/usecases/users/create'
import { Users } from '@/domain/models/users'
import { UsersRepository } from '@/data/interfaces/users_repository'

export class UserCreator implements UserCreatorInterface {
  constructor (private readonly usersRepo: UsersRepository) {}

  async create (name: string): Promise<Users> {
    const newUser = await this.usersRepo.insert(name)
    return newUser
  }
}
