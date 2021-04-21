import { Users } from '@/domain/models/users'

export interface UsersRepository {
    insert (name: string): Promise<Users>
}
