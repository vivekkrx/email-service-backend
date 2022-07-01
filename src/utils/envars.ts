import dotenv from 'dotenv'

dotenv.config()

const { SERVER_PORT } = process.env

const env = { SERVER_PORT }

export default env
