import BookingWrapper from "./booking-wrapper.jsx";
import {useState} from "react";

export default function Booking(){
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        roomType: '',
        comments: ''
    });


    return (
        <div className='w-full'>
            <BookingWrapper>
                <section className='text-[#142C12] flex flex-1 flex-col items-center justify-center max-w-6xl px-4'>
                    <h1 className='text-[4rem]'>Услуги</h1>

                    <form className='bg-[#777C5C]  w-[997px]' action="">
                        <input
                            className="w-full h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-[20px] md:text-[25px]"
                            type="text"
                            placeholder={'ФИО*'}
                        />

                    </form>
                </section>
            </BookingWrapper>
        </div>
    )
}