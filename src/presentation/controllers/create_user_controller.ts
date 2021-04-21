import { UserCreator } from '@/domain/usecases/users/create'
import { Controller } from '@/presentation/interfaces/controllers'
import { HttpRequest, HttpResponse } from '@/presentation/interfaces/http'

export class CreateUserController implements Controller {
  constructor (private readonly userCreator: UserCreator) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const name = request.body.name
    const newUser = this.userCreator.create(name)

    const response: HttpResponse = { statusCode: 200, body: newUser }
    return response
  }
}
