import { join } from 'path'
import { createConnection, Connection } from 'typeorm'

export interface PgConnectionHandlerInterface {
  connect (): Promise<Connection>
  disconnect (): Promise<void>
}

export class PgConnectionHandler implements PgConnectionHandlerInterface {
  conn: Connection|null

  constructor () { this.conn = null }

  async connect (): Promise<Connection> {
    this.conn = await createConnection({
      type: 'postgres',
      host: '172.17.0.2',
      port: 5432,
      username: 'postgres',
      password: 'Elipse0001',
      database: 'postgres',
      logging: false,
      entities: [
        join(__dirname, '/entities/*.{ts,js}')
      ]
    })
    return this.conn
  }

  async disconnect (): Promise<void> {
    await this.conn?.close()
  }
}
