type FixMeLater = any

type EmailIdType = string

type GetCandidateEmailIdsServiceType = (
  candidateId: string
) => Promise<EmailIdType[]>

type GetOrganisationEmailIdsServiceType = (
  organisationId: string
) => Promise<EmailIdsType[]>
