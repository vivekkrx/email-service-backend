import { Request, Response, NextFunction } from 'express'

export type GetCandiateEmailIdsControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>

export type GetOrganisationEmailIdsControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>
