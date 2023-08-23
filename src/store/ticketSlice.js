import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import filterTickets from '../helpers/filterTickets'

export const getSearchId = createAsyncThunk('tickets/getSearchId', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error('Error with fetch searchId')
    }
    const searchId = await response.json()
    return searchId.searchId
  } catch (err) {
    rejectWithValue(err.message)
  }
})

export const getTickets = createAsyncThunk('tickets/getTickets', async function (searchId, { rejectWithValue }) {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

    const body = await response.json()
    return body
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    currentTickets: [],
    cheapest: true,
    searchId: null,
    isLoading: true,
    error: null,
    stop: false,
  },
  reducers: {
    changeTab(state) {
      state.cheapest = !state.cheapest
    },
    sortByTab(state) {
      if (state.cheapest) {
        state.currentTickets = state.currentTickets.sort((a, b) => a.price - b.price)
      } else {
        state.currentTickets = state.currentTickets.sort((a, b) => {
          return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        })
      }
    },
    handleLoader(state) {
      if (!state.error && !state.stop) {
        state.isLoading = true
      } else {
        state.isLoading = false
      }
    },
    filter(state, { payload }) {
      state.currentTickets = filterTickets(state.tickets, payload)
      if (state.currentTickets.length === 0) {
        state.error = 'Рейсов, подходящих под заданные фильтры, не найдено'
      } else {
        state.error = null
      }
    },
  },
  extraReducers: {
    [getSearchId.fulfilled]: (state, { payload }) => {
      state.searchId = payload
    },

    [getTickets.fulfilled]: (state, { payload }) => {
      state.tickets = [...state.tickets, ...payload.tickets]
      state.currentTickets = [...state.tickets, ...payload.tickets]
      state.stop = payload.stop
    },
  },
})

export const { changeTab, sortByTab, handleLoader, filter } = ticketSlice.actions

export default ticketSlice.reducer
