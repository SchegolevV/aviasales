export const formatText = (count) => {
  if (count === 0) {
    return 'Без пересадок'
  }
  if (count === 1) {
    return '1 пересадка'
  }

  return `${count} пересадки`
}
