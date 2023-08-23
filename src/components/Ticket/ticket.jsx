import Route from '../Route/Route'

import classes from './ticket.module.scss'

export default function Ticket({ price, segments, carrier }) {
  return (
    <li className={classes.ticket}>
      <div className={classes.offer}>
        <span className={classes['ticket-price']}>{price}</span>
        <div className={classes['company-image-wrapper']}>
          <img className={classes['company-image']} src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </div>
      <Route to={segments[0]} />
      <Route off={segments[1]} />
    </li>
  )
}
