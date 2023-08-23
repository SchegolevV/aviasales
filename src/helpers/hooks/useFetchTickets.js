import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getTickets, handleLoader } from '../../store/ticketSlice'

const useFetchTickets = () => {
  const tickets = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    const id = tickets.searchId
    const int = setInterval(() => dispatch(getTickets(id)), 2000)
    if (!tickets.searchId || tickets.stop) {
      clearInterval(int)
      dispatch(handleLoader())
    }
    return () => clearInterval(int)
  }, [dispatch, tickets.searchId, tickets.stop])
}

export default useFetchTickets
