import Filter from '../Filter/filter'
import Header from '../Header/header'
import Tabs from '../Tabs/tabs'
import TicketList from '../TicketList/ticketList'

import classes from './app.module.scss'

const App = () => {
  return (
    <main>
      <Header />
      <section className={classes['content-wrapper']}>
        <Filter />
        <Tabs />
        <TicketList />
      </section>
    </main>
  )
}
export default App
