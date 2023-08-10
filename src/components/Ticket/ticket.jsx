import Route from '../Route/Route'
import s7Logo from '../../images/S7 Logo.png'

import classes from './ticket.module.scss'

export default function Ticket() {
  return (
    <li className={classes.ticket}>
      <div className={classes.offer}>
        <span className={classes['ticket-price']}>13 400 P</span>
        <div className={classes['company-image-wrapper']}>
          <img className={classes['company-image']} src={s7Logo} alt="s7airlines" />
        </div>
      </div>
      <Route />
      <Route />
    </li>
  )
}
