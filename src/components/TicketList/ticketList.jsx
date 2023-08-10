import LoadButton from '../LoadButton/loadButton'
import Ticket from '../Ticket/ticket'

import classes from './ticketList.module.scss'

export default function TicketList() {
  return (
    <ul className={classes['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <LoadButton />
    </ul>
  )
}
