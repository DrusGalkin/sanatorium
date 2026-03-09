import {Route, Routes} from "react-router";
import Home from "./pages/home.jsx";
import Employee from "./pages/employee.jsx";
import Object from "./pages/object.jsx";
import Footer from "./widgets/ui/footer/footer.jsx";
import Header from "./widgets/ui/header/header.jsx";
import Booking from "./widgets/ui/booking/booking.jsx";
import BookingWrapperRouter from "./shared/tools/booking-wrapper-to-route.jsx";

function App() {

    return (
        <div className='w-fulltext-[#142C12]  h-full min-h-[100vh] flex flex-col items-center'>
            <Header/>
            <div className='flex flex-col w-full  flex-1'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/employee/:id" element={
                        <BookingWrapperRouter>
                            <Employee/>
                        </BookingWrapperRouter>
                    }/>
                    <Route path="/object/:id" element={
                        <BookingWrapperRouter>
                            <Object/>
                        </BookingWrapperRouter>
                    }/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
