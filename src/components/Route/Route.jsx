import { formatDateToTime, formatMinutes } from '../../helpers/formatDate'
import { formatText } from '../../helpers/formatText'

import classes from './Route.module.scss'

export default function Route({ to, off }) {
  let rout = to ? to : off
  let transfers = rout.stops.length

  return (
    <div className={classes.route}>
      <div className={classes['route-info']}>
        <p className={classes['route-title']}>
          {rout.origin} – {rout.destination}
        </p>
        <p className={classes['route-value']}>
          {formatDateToTime(rout.date)} - {formatDateToTime(rout.date, rout.duration)}
        </p>
      </div>
      <div className={classes['route-info']}>
        <p className={classes['route-title']}>в пути</p>
        <p className={classes['route-value']}>{formatMinutes(rout.duration)}</p>
      </div>
      <div className={classes['route-info']}>
        <p className={classes['route-title']}>{formatText(transfers)}</p>
        <p className={classes['route-value']}>{rout.stops.join(', ')}</p>
      </div>
    </div>
  )
}
