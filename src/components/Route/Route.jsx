import classes from './Route.module.scss'

export default function Route() {
  return (
    <div className={classes.route}>
      <div className={classes['route-info']}>
        <p className={classes['route-title']}>MOW – HKT</p>
        <p className={classes['route-value']}>10:45 – 08:00</p>
      </div>
      <div className={classes['route-info']}>
        <p className={classes['route-title']}>в пути</p>
        <p className={classes['route-value']}>21ч 15м</p>
      </div>
      <div className={classes['route-info']}>
        <p className={classes['route-title']}>2 пересадки</p>
        <p className={classes['route-value']}>21ч 15м</p>
      </div>
    </div>
  )
}
