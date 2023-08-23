import { useSelector } from 'react-redux'

import useFetchTickets from '../../helpers/hooks/useFetchTickets'
import useCreateTickets from '../../helpers/hooks/useCreateTickets'
import useFilterTickets from '../../helpers/hooks/useFilterTickets'
import LoadButton from '../LoadButton/loadButton'
import Loader from '../Loader/loader'

import classes from './ticketList.module.scss'

export default function TicketList() {
  const tickets = useSelector((state) => state.tickets)

  useFetchTickets()
  useFilterTickets()

  const [createTickets, createMoreTickets] = useCreateTickets()

  return (
    <>
      {tickets.isLoading && <Loader />}
      {tickets.error && <div className={classes['error']}>{tickets.error}</div>}
      <ul className={classes['ticket-list']}>
        {createTickets()}
        <LoadButton createMoreTickets={createMoreTickets} />
      </ul>
    </>
  )
}
