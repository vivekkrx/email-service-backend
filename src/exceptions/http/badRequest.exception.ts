import HTTPException from './http.exception'

export default class BadRequestException extends HTTPException {
  constructor(
    errorCode: number,
    errorMessage?: string,
    innerException?: Error
  ) {
    super(400, errorCode, errorMessage, innerException)
  }
}
