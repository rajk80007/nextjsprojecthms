import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"

import { Button } from '@/components/ui/button'
import { CalendarDays, Clock } from 'lucide-react'
import { DialogClose } from '@radix-ui/react-dialog'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'


const BookAppointment = (doctor) => {

    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState();

    const [selectTimeSlot, setSelectTimeSlot] = useState();

    const [note, setNote] = useState();

    const {user} = useKindeBrowserClient();

    useEffect(() => {
        getTime();
    }, [])
    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ":00 AM"
        })
        timeList.push({
            time: i + ":30 AM"
        })
        
    }
    for (let i = 1; i <= 6; i++) {
        timeList.push({
            time: i + ":00 PM"
        })
        timeList.push({
            time: i + ":30 PM"
        })
        
    }
        setTimeSlot(timeList);
    }

    const saveBooking = () => {
        const data = {
            data: {
                UserName:user.given_name+ ""+user.family_name,
                Email:user.email,
                Date: date,
                Time: selectTimeSlot,
                Note: note,
                doctor: doctor.doctor.doctor.id
            }
        }
        console.log(data)
        GlobalApi.BookAppointment(data).then(resp=>{
            console.log(resp);
            if(resp){
                toast("Booking confirmation sent on Email");
            }
        }) 
    }

    const isPastDay = (day) => {
        return day<new Date();
    }

    return (
        <Dialog >
            <DialogTrigger>
                <Button className='w-full mt-5 rounded-full'>Book Appointment</Button>
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogDescription >
                        <div >
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                {/* Calendar */}
                                <div className='flex flex-col gap-3 items-center justify-center'>
                                    <h2 className='flex gap-2 items-center'>
                                    
                                        <CalendarDays className="h-5 w-5 text-blue-600" />
                                        Select Date
                                    </h2>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        disabled={isPastDay}
                                        className="rounded-md border"
                                    />
                                </div>

                                {/* Time Slot */}
                                <div className='flex items-center flex-col'>
                                    <h2 className='flex gap-2 items-center mb-3'>
                                        <Clock className='text-blue-600 h-5 w-5'/>
                                        Select Time Slot
                                    </h2>
                                    <div className='grid grid-cols-3 gap-2 border rounded-lg p-3 mt-10'>
                                        {timeSlot&&timeSlot.map((item, index)=>(
                                           <h2
                                           onClick={() => setSelectTimeSlot(item.time)}
                                           className={`px-2 text-[12px] hover:bg-primary cursor-pointer hover:text-white border rounded-full text-center  mx-1 my-2
                                           ${selectTimeSlot === item.time && "bg-primary text-white"}`}>{item.time}</h2>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                                    <textarea name="" id="" rows={3} className='w-full mt-5 border-[1px] border-gray-200 rounded-lg p-3' placeholder='Note'
                                    onChange={(e)=>setNote(e.target.value)}></textarea>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <>
            <Button type="button" variant="secondary"
            className='hover:bg-red-600 hover:text-white'>
              Close
            </Button>
            <Button type="button" variant="secondary" 
            className="hover:bg-primary hover:text-white"
            disabled={!(date&&selectTimeSlot)}
            onClick={saveBooking}>
              Submit
            </Button>
            </>
          </DialogClose>
        </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default BookAppointment