import { UsersRepository } from '@/infra/repository/users_repository'
import { UserCreator } from '@/data/usecases/users/user_creator'
import { CreateUserController } from '@/presentation/controllers/create_user_controller'
import { Controller } from '@/presentation/interfaces/controllers'

export const makeCreateUserController = (): Controller => {
  const userRepo = new UsersRepository()
  const useCase = new UserCreator(userRepo)
  const controller = new CreateUserController(useCase)

  return controller
}
