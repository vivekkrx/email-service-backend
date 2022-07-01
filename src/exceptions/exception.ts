export default class Exception extends Error {
  constructor(
    errorCode: string,
    errorMessage?: string,
    innerException?: Error
  ) {
    super(errorMessage)
    this.errorCode = errorCode
    this.innerException = innerException
  }
  public errorCode: string
  public innerException?: Error
}
