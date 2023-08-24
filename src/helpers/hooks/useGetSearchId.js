import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getSearchId } from '../../store/ticketSlice'

const useGetSearchId = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])
}

export default useGetSearchId
