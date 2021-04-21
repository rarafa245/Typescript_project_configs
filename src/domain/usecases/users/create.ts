import { Users } from '@/domain/models/users'

export interface UserCreator {
  create (name: string): Promise<Users>
}
