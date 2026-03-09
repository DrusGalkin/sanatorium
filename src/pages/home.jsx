import MiddleBlock from "../widgets/ui/middle-block/middle-block.jsx";
import About from "../widgets/ui/adout/about.jsx";
import Service from "../widgets/ui/services/service.jsx";
import Employees from "../widgets/ui/employee/employees.jsx";
import Rooms from "../widgets/ui/rooms-houses/rooms.jsx";
import Booking from "../widgets/ui/booking/booking.jsx";
import FrequentQuestions from "../widgets/ui/frequent-questions/frequent-questions.jsx";

export default function Home() {
    return (
        <div className='flex flex-col gap-15'>
            <MiddleBlock/>
            <About/>
            <Service/>
            <Employees/>
            <Rooms/>
            <Booking/>
            <FrequentQuestions/>
        </div>
    )
}