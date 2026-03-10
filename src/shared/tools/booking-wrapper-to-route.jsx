import Booking from "../../widgets/ui/booking/booking.jsx";

export default function BookingWrapperRouter({ children }) {
    return (
        <div className='mt-10 min-h-[100vh] mb-10 flex flex-col items-center'>

            <div className='flex flex-col w-full  flex-1'>
                {
                    children
                }
            </div>

         <Booking/>
        </div>
    )
}