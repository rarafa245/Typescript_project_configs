import faker from 'faker'
import { PgConnectionHandler } from '@/infra/pg_connection_handler'
import { UsersRepository } from './users_repository'

describe('#UsersRepository', () => {
  const pgConnectionHandler = new PgConnectionHandler()
  const usersRepo = new UsersRepository()

  describe('#insert', () => {
    let name: string

    afterAll(async () => {
      try {
        const pgConn = await pgConnectionHandler.connect()
        await pgConn.query('DELETE FROM users WHERE name = $1;', [name])
      } catch (err) {
        console.log(err)
      } finally {
        await pgConnectionHandler.disconnect()
      }
    })

    test('Should Insert a correct registry in Users table', async () => {
      name = faker.random.alphaNumeric(8)
      const response = await usersRepo.insert(name)
      expect(response).toHaveProperty('name', name)
    })
  })
})
