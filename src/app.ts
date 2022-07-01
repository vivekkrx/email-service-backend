import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import env from './utils/envars'
import { CandidateRoute, OrganisationRoute, SendEmailRoute } from './routes'

class App {
  public app: Application
  public port: number

  constructor() {
    this.app = express()
    this.port = parseInt(env.SERVER_PORT!) || 8080

    this.initialiseMiddlewares()
    this.initialiseRoutes()
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`)
    })
  }

  private initialiseMiddlewares(): void {
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private initialiseRoutes(): void {
    this.app.get('/', (req: Request, res: Response): void => {
      const routes = {
        '/people/:candidateId/email-ids': 'GET',
        '/me/org/email-ids': 'GET',
        '/send-email': 'POST',
      }
      res.json({ routes })
    })
    this.app.use(new CandidateRoute().router)
    this.app.use(new OrganisationRoute().router)
    this.app.use(new SendEmailRoute().router)
  }
}

export default App
