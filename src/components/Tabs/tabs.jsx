import classes from './tabs.module.scss'

export default function Tabs() {
  return (
    <fieldset className={classes.tabs}>
      <label className={classes.fast} htmlFor="fast">
        <input type="radio" name="tab" id="fast" />
      </label>
      <label className={classes.cheap} htmlFor="cheap">
        <input type="radio" name="tab" id="cheap" />
      </label>
    </fieldset>
  )
}
