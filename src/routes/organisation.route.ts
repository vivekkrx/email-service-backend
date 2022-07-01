import { Router } from 'express'
import { EmailIdsController } from '../controllers'

export default class OrganisationRoute {
  constructor() {
    this.initialiseRoutes()
  }

  public router: Router = Router()
  private path: string = '/me/org/email-ids'

  private initialiseRoutes(): void {
    this.router.get(
      this.path,
      new EmailIdsController().getOrganisationEmailIdsController
    )
  }
}
