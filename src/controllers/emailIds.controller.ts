import {
  GetCandiateEmailIdsControllerType,
  GetOrganisationEmailIdsControllerType,
} from '../../@types/types'
import { EmailIdsService } from '../services'

export default class EmailIdsController {
  private emailIdsService = new EmailIdsService()

  private DEFAULT_ID = '1234'

  public getCandiateEmailIdsController: GetCandiateEmailIdsControllerType =
    async (req, res, next) => {
      try {
        const { candidateId = this.DEFAULT_ID } = req.params
        const emailIds = await this.emailIdsService.getCandidateEmailIdsService(
          candidateId
        )
        res.status(200).send(emailIds)
      } catch (error) {
        next(error)
      }
    }

  public getOrganisationEmailIdsController: GetOrganisationEmailIdsControllerType =
    async (req, res, next) => {
      try {
        const organisationId = this.DEFAULT_ID
        const emailIds =
          await this.emailIdsService.getOrganisationEmailIdsService(
            organisationId
          )
        res.status(200).send(emailIds)
      } catch (error) {
        next(error)
      }
    }
}
