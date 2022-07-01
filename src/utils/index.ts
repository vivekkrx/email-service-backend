export const getBoolean = (probabilityForTRUE: number): boolean => {
  const randomInt = Math.random()
  return randomInt < probabilityForTRUE
}
