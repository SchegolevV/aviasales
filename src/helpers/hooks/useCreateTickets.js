import { useState } from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../../components/Ticket/ticket'

const useCreateTickets = () => {
  const [createdTickets, setCreatedTickets] = useState(5)
  const currentTickets = useSelector((state) => state.tickets.currentTickets)

  const createMoreTickets = () => {
    setCreatedTickets((state) => (state += 5))
  }

  const createTickets = () => {
    let key = 1
    const defTickets = currentTickets.map((ticket, idx) => {
      if (idx < createdTickets) {
        return <Ticket key={key++} {...ticket} />
      } else {
        return null
      }
    })
    return defTickets
  }

  return [createTickets, createMoreTickets]
}

export default useCreateTickets
