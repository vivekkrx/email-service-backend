export default class Exception extends Error {
  constructor(
    errorCode: number,
    errorMessage?: string,
    innerException?: Error
  ) {
    super(errorMessage)
    this.errorCode = errorCode
    this.innerException = innerException
  }
  public errorCode: number
  public innerException?: Error
}
