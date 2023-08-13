/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: [
      { id: 1, name: 'all', isChecked: false, value: 'Все' },
      { id: 2, name: 'noTransfers', isChecked: false, value: 'Без пересадок' },
      { id: 3, name: 'transfer1', isChecked: false, value: '1 пересадка' },
      { id: 4, name: 'transfer2', isChecked: false, value: '2 пересадки' },
      { id: 5, name: 'transfer3', isChecked: false, value: '3 пересадки' },
    ],
  },
  reducers: {
    toggleFilter({ filters }, action) {
      const checkbox = filters.find((filter) => filter.id === action.payload)
      checkbox.isChecked = !checkbox.isChecked
      if (action.payload === 1) {
        filters.map((el) => (el.isChecked = checkbox.isChecked))
      }
      const exceptAll = filters.filter((el) => el.id !== 1)
      const all = filters.find((el) => el.id === 1)
      const allControl = exceptAll.some((el) => el.isChecked === false)
      allControl ? (all.isChecked = false) : (all.isChecked = true)
    },
  },
})

export const { toggleFilter } = filterSlice.actions

export default filterSlice.reducer
