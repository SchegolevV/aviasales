import { useDispatch, useSelector } from 'react-redux'

import { toggleFilter } from '../../store/filterSlice'
import Filter from '../Filter/filter'

import classes from './filterList.module.scss'

export default function FilterList() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters.filters)

  const toggleAppFilter = (value) => {
    return dispatch(toggleFilter(value))
  }

  const checkboxes = filters.map((filter) => {
    const { id, value, isChecked } = filter
    return (
      <li className={classes.filter} key={id}>
        <Filter isChecked={isChecked} toggleFilter={() => toggleAppFilter(id)}>
          {value}
        </Filter>
      </li>
    )
  })
  return (
    <fieldset className={classes['filter-list']}>
      <h3 className={classes.title}>Количество пересадок</h3>

      <ul className={classes.list}>{checkboxes}</ul>
    </fieldset>
  )
}
