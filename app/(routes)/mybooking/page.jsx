'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from './_components/BookingHistoryList'
import GlobalApi from '@/app/_services/GlobalApi'
import {useSession} from 'next-auth/react'
import { useEffect, useState } from "react";
import moment from "moment"
function MyBooking() {
  const { data } = useSession();
  const [bookingHistory, setBookingHistory] = useState([])

  useEffect(() => {
    data && GetUserBookingHistory();
  }, [data])
  
  /**
   * Used to get user booking history
   */

  const GetUserBookingHistory = () => {
    GlobalApi.GetUserBookingHistory(data?.user?.email).then(resp => {
      console.log(resp)
      setBookingHistory(resp.bookings)
    })
  }
  const filterData = (type) => {
    const result = bookingHistory.filter(item => type == 'booked' ?
      new Date(item.date) > new Date()
      : new Date(item.date) < new Date());
    return result;
  }
  return (
    <div className='my-10 mx-5 md:mx-36'>
      <h2 className='text-[20px] my-2 font-bold'>My Bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
  <TabsList className="w-full justify-start">
    <TabsTrigger value="booked">Booked</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={filterData('booked')}/>
  </TabsContent>
        <TabsContent value="completed">
          <BookingHistoryList bookingHistory={filterData('completed')}/>
  </TabsContent>
</Tabs>

    </div>
  )
}

export default MyBooking
