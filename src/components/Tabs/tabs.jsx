import useChangeTab from '../../helpers/hooks/useChangeTab'

import classes from './tabs.module.scss'

export default function Tabs() {
  const changeTabs = useChangeTab()

  return (
    <fieldset className={classes.tabs}>
      <label className={classes.fast} htmlFor="fast">
        <input type="radio" name="tab" id="fast" onChange={changeTabs} />
      </label>
      <label className={classes.cheap} htmlFor="cheap">
        <input type="radio" name="tab" id="cheap" defaultChecked={true} onChange={changeTabs} />
      </label>
    </fieldset>
  )
}
