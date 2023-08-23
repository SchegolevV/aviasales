import { format } from 'date-fns'

export const formatMinutes = (min) => {
  const hours = Math.floor(min / 60)
  const minutes = min % 60
  return `${hours}ч ${minutes}м`
}

export const formatDateToTime = (date, addedMins) => {
  let parsedDate = Date.parse(date)
  if (addedMins) {
    const addedMs = addedMins * 60 * 1000
    parsedDate += addedMs
  }
  return format(parsedDate, 'HH:mm')
}
