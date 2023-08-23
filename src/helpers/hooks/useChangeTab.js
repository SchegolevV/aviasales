import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { changeTab, sortByTab } from '../../store/ticketSlice'

const useChangeTab = () => {
  const dispatch = useDispatch()
  const cheapest = useSelector((state) => state.tickets.cheapest)
  const tickets = useSelector((state) => state.tickets.currentTickets)

  useEffect(() => {
    const dispatchSortByTab = () => dispatch(sortByTab())
    dispatchSortByTab()
  }, [dispatch, cheapest, tickets])

  const dispatchChangeTab = () => dispatch(changeTab())
  return dispatchChangeTab
}

export default useChangeTab
