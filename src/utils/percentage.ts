export const getPercentage = (initial: number, final: number) => {
  const value = ((final - initial) / initial) * 100
  return value.toFixed(2)
}
