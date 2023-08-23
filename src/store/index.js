import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filterSlice'
import ticketSlice from './ticketSlice'

export default configureStore({
  reducer: {
    filters: filterReducer,
    tickets: ticketSlice,
  },
})
