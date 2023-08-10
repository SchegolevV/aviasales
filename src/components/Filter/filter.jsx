import classes from './filter.module.scss'

export default function Filter() {
  return (
    <fieldset className={classes.filters}>
      <h3 className={classes.title}>Количество пересадок</h3>

      <ul className={classes.list}>
        <li className={classes.filter}>
          <label className={classes.label}>
            <input className={classes.input} type="checkbox" />
            Все
          </label>
        </li>
        <li className={classes.filter}>
          <label className={classes.label}>
            <input className={classes.input} type="checkbox" />
            Без пересадок
          </label>
        </li>
        <li className={classes.filter}>
          <label className={classes.label}>
            <input className={classes.input} type="checkbox" />1 пересадка
          </label>
        </li>
        <li className={classes.filter}>
          <label className={classes.label}>
            <input className={classes.input} type="checkbox" />2 пересадки
          </label>
        </li>
        <li className={classes.filter}>
          <label className={classes.label}>
            <input className={classes.input} type="checkbox" />3 пересадки
          </label>
        </li>
      </ul>
    </fieldset>
  )
}
