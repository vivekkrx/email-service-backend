import HTTPException from './http.exception'

export default class BadRequestException extends HTTPException {
  constructor(
    errorCode: string,
    errorMessage?: string,
    innerException?: Error
  ) {
    super('400', errorCode, errorMessage, innerException)
  }
}
