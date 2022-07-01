import dotenv from 'dotenv'

dotenv.config()

export const DUMMY_SMTP_CONFIG: ISmtpConfig = {
  host: 'gmail',
  port: 345,
  authemail: process.env.FROM_EMAIL!, // your email address
  authpassword: process.env.FROM_PASSWORD!, // your google app password, refer -> https://support.google.com/accounts/answer/185833?hl=en
  connectionURL: '',
}

export const DUMMY_EMAIL_PAYLOAD: IEmailPayload = {
  recepients: [process.env.TO_EMAIL!], // recepient email address
  cc: [],
  emailBodyHtml: '<b>This is for test</b>',
  subject: 'Sending email via nodemailer',
  attachments: [],
}
