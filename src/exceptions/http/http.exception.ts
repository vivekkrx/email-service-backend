import Exception from '../exception'

export default class HTTPException extends Exception {
  constructor(
    httpStatusCode: string,
    errorCode: string,
    errorMessage?: string,
    innerException?: Error
  ) {
    super(errorCode, errorMessage, innerException)
    this.httpStatusCode = httpStatusCode
  }

  public httpStatusCode: string
}
