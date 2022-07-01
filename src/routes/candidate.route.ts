import { Router } from 'express'
import { EmailIdsController } from '../controllers'

export default class CandidateRoute {
  constructor() {
    this.initialiseRoutes()
  }

  public router: Router = Router()
  private path: string = '/people/:candidateId/email-ids'

  private initialiseRoutes(): void {
    this.router.get(
      this.path,
      new EmailIdsController().getCandiateEmailIdsController
    )
  }
}
