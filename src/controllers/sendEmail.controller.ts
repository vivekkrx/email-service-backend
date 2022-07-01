import { SendEmailControllerType } from '../../@types/types'
import { SendEmailService } from '../services'

export default class SendEmailController {
  private sendEmailService = new SendEmailService()

  public sendEmailController: SendEmailControllerType = async (
    req,
    res,
    next
  ) => {
    try {
      const {
        body: { smtpConfig, emailPayload },
      }: { body: IRequestBodyForSendEmail } = req
      await this.sendEmailService.sendEmail(smtpConfig, emailPayload)
      res.status(200).send({ message: 'Email sent successfully' })
    } catch (err) {
      next(err)
    }
  }
}
