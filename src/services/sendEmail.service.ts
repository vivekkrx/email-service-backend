import nodemailer, { Transporter } from 'nodemailer'
import { Exception } from '../exceptions'
import { DUMMY_EMAIL_PAYLOAD, DUMMY_SMTP_CONFIG } from '../utils/dummyValues'

export default class SendEmailService {
  public sendEmail: SendEmailServiceType = async (smtpConfig, emailPayload) => {
    try {
      const transporter: Transporter = nodemailer.createTransport({
        service: smtpConfig?.host || DUMMY_SMTP_CONFIG.host,
        auth: {
          user: smtpConfig?.authemail || DUMMY_SMTP_CONFIG.authemail,
          pass: smtpConfig?.authpassword || DUMMY_SMTP_CONFIG.authpassword,
        },
      })

      const mailOptions: IMailOptions = {
        from: smtpConfig?.authemail || DUMMY_SMTP_CONFIG.authemail,
        to: emailPayload?.recepients.length
          ? emailPayload.recepients.toString()
          : DUMMY_EMAIL_PAYLOAD.recepients.toString(),
        subject: emailPayload?.subject || DUMMY_EMAIL_PAYLOAD.subject,
        html: emailPayload?.emailBodyHtml || DUMMY_EMAIL_PAYLOAD.emailBodyHtml,
      }

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          throw new Exception('500', err.message)
        } else {
          console.log(data)
        }
      })
    } catch (error) {
      let errorMessage = ''
      if (error instanceof Error) errorMessage = error.message
      throw new Exception('500', errorMessage)
    }
  }
}
