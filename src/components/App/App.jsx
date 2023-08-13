import FilterList from '../FilterList/filterList'
import Header from '../Header/header'
import Tabs from '../Tabs/tabs'
import TicketList from '../TicketList/ticketList'

import classes from './app.module.scss'

const App = () => {
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
