import Booking from "../../widgets/ui/booking/booking.jsx";

export default function BookingWrapperRouter({ children }) {
    return (
        <div className='mt-10 mb-10'>
            {
                children
            }
         <Booking/>
        </div>
    )
}