type FixMeLater = any

type EmailIdType = string

type GetCandidateEmailIdsServiceType = (
  candidateId: string
) => Promise<EmailIdType[]>

type GetOrganisationEmailIdsServiceType = (
  organisationId: string
) => Promise<EmailIdsType[]>

interface IEmailPayload {
  recepients: EmailIdType[]
  cc: EmailIdType[]
  emailBodyHtml: string
  attachments: FixMeLater[]
  subject: string
}

interface ISmtpConfig {
  host: string
  port: number
  authemail: string
  authpassword: string
  connectionURL: string
}

type SendEmailServiceType = (
  smtpConfig: ISmtpConfig,
  emailPayload: IEmailPayload
) => Promise<void>

interface IRequestBodyForSendEmail {
  smtpConfig: ISmtpConfig
  emailPayload: IEmailPayload
}

interface IMailOptions {
  from: string
  to: string
  subject: string
  html: string
}
