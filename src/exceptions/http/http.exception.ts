import Exception from '../exception'

export default class HTTPException extends Exception {
  constructor(
    httpStatusCode: number,
    errorCode: number,
    errorMessage?: string,
    innerException?: Error
  ) {
    super(errorCode, errorMessage, innerException)
    this.httpStatusCode = httpStatusCode
  }

  public httpStatusCode: number
}
