import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { filter } from '../../store/ticketSlice'

const useFilterTickets = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters.filters)
  const tickets = useSelector((state) => state.tickets.tickets)

  useEffect(() => {
    const activeFilters = filters.filter((elem) => elem.isChecked).map((filter) => filter.name)
    dispatch(filter(activeFilters))
  }, [filters, tickets, dispatch])
}

export default useFilterTickets
