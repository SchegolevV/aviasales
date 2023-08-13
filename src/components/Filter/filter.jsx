import classes from './filter.module.scss'

function Filter({ children, toggleFilter, isChecked }) {
  return (
    <label className={classes.label}>
      <input className={classes.input} type="checkbox" onChange={toggleFilter} checked={isChecked} />
      {children}
    </label>
  )
}
export default Filter
