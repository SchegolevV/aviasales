/* eslint-disable no-case-declarations */
/* eslint-disable indent */
export default function filterTickets(ticketsArray, filtersArray) {
  let resultArray = []
  let target = []
  filtersArray.forEach((filter) => {
    switch (filter) {
      case 'all':
        resultArray.push(...ticketsArray)
        break
      case 'noTransfers':
        target = ticketsArray.filter((ticket) => {
          return ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0
        })
        resultArray.push(...target)
        break
      case 'transfer1':
        target = ticketsArray.filter((ticket) => {
          return ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1
        })
        resultArray.push(...target)
        break
      case 'transfer2':
        target = ticketsArray.filter((ticket) => {
          return ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2
        })
        resultArray.push(...target)
        break
      case 'transfer3':
        target = ticketsArray.filter((ticket) => {
          return ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3
        })
        resultArray.push(...target)
        break
      default:
        throw new Error('ffuck')
    }
  })
  const result = new Set(resultArray)
  return [...result]
}
