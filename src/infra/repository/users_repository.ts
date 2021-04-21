import { PgConnectionHandler, PgConnectionHandlerInterface } from '@/infra/pg_connection_handler'
import { Users as UsersModel } from '@/infra/entities/users'
import { Users } from '@/domain/models/users'

export class UsersRepository {
  pgConnectionHandler: PgConnectionHandlerInterface

  constructor () { this.pgConnectionHandler = new PgConnectionHandler() }

  async insert (name: string): Promise<Users> {
    try {
      const pgConn = await this.pgConnectionHandler.connect()
      const result = await pgConn
        .createQueryBuilder()
        .insert()
        .into(UsersModel)
        .values([{ name: name }])
        .returning('*')
        .execute()
      return result.raw[0]
    } catch (err) {
      throw new Error(err)
    } finally {
      await this.pgConnectionHandler.disconnect()
    }
  }
}
