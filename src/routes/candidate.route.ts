import { Router } from 'express'

export default class CandidateRoute {
  constructor() {
    this.initialiseRoutes()
  }

  public router: Router = Router()
  private path: string = '/people/:candidateId/email-ids'

  private initialiseRoutes(): void {
    this.router.get(this.path, (req, res) =>
      res.send({ message: 'App is running fine!' })
    )
  }
}
