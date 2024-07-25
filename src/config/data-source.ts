import { DataSource } from 'typeorm'
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config()

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env
const PORT = DB_PORT ? parseInt(DB_PORT) : 3306

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  logging: false,
  entities: [join(__dirname, '../entities/*.entity.{ts,js}')],
  migrations: [join(__dirname, '../config/migrations/*.{ts,js}')],
  synchronize: false
})
