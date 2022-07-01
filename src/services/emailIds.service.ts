import { BadRequestException, Exception } from '../exceptions'
import { getBoolean } from '../utils'

const candidateEmailIds: EmailIdType[] = [
  'mads.neilson@gmail.com',
  'neilson.mads@gmail.com',
  'mads.1986@gmail.com',
]

const organisationEmailIds: EmailIdType[] = [
  'ulrich.org@dark.com',
  'jonas.org@dark.com',
  'mikkel.org@dark.com',
  'helge.org@dark.com',
]

export default class EmailIdsService {
  public getCandidateEmailIdsService: GetCandidateEmailIdsServiceType =
    async candidateId => {
      const isUserFound = getBoolean(0.9)
      if (!candidateId)
        throw new BadRequestException('101', `Candidate ID is required.`)
      else if (!isUserFound)
        throw new Exception(
          '404',
          `Candiate with ID ${candidateId} is not found.`
        )
      return candidateEmailIds
    }

  public getOrganisationEmailIdsService: GetOrganisationEmailIdsServiceType =
    async organisationId => {
      const isOrganisationFound = getBoolean(0.9)
      if (!organisationId)
        throw new BadRequestException('101', `Organisation ID is required.`)
      else if (!isOrganisationFound)
        throw new Exception(
          '404',
          `Organisation with ID ${organisationId} is not found.`
        )
      return organisationEmailIds
    }
}
