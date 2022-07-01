import { Router } from 'express'
import { SendEmailController } from '../controllers/'

export default class SendEmailRoute {
  constructor() {
    this.initialiseRoutes()
  }

  public router: Router = Router()
  private path: string = '/send-email'

  private initialiseRoutes(): void {
    this.router.post(this.path, new SendEmailController().sendEmailController)
  }
}
