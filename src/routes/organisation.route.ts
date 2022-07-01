import { Router } from 'express'

export default class OrganisationRoute {
  constructor() {
    this.initialiseRoutes()
  }

  public router: Router = Router()
  private path: string = '/me/org/email-ids'

  private initialiseRoutes(): void {
    this.router.get(this.path, (req, res) =>
      res.send({ message: 'App is running fine!' })
    )
  }
}
