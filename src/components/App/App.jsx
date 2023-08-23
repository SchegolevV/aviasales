import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getSearchId } from '../../store/ticketSlice'
import FilterList from '../FilterList/filterList'
import Header from '../Header/header'
import Tabs from '../Tabs/tabs'
import TicketList from '../TicketList/ticketList'

import classes from './app.module.scss'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])
  return (
    <main>
      <Header />
      <section className={classes['content-wrapper']}>
        <FilterList />
        <Tabs />
        <TicketList />
      </section>
    </main>
  )
}
export default App
