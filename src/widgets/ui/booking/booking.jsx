import BookingWrapper from "./booking-wrapper.jsx";
import { useState } from "react";
import GreenButton from "../../../shared/ui/green-button.jsx";
import WhiteButton from "../../../shared/ui/white-button.jsx";
import DatePicker from "./date-picker.jsx"; // Импортируем новый компонент

export default function Booking() {
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

    const roomType = [
        'Тип номера*',
        'Стандарт',
        'Комфорт',
        'Люкс',
        'Семейный',
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-full '>
            <BookingWrapper>
                <section className='text-[#142C12] w-full flex gap-10 flex-1 flex-col items-center justify-center max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-center leading-tight'>
                        Забронировать отдых
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className='bg-[#777C5C] flex flex-col justify-center gap-4 sm:gap-6 rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[997px] mx-auto'
                        action=""
                    >
                        <div>
                            <p className='text-center text-base sm:text-lg md:text-xl lg:text-[1.7rem] text-[#EFE6D7] font-light'>
                                Пожалуйста, заполните форму ниже для бронирования вашего отдыха в нашем санатории.
                            </p>
                        </div>

                        <div className='flex flex-col gap-3 sm:gap-4'>
                            <input
                                className="w-full h-[50px] sm:h-[55px] md:h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] placeholder:text-[#EFE6D7]/70 focus:outline-none focus:ring-2 focus:ring-[#EFE6D7]"
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder={'ФИО*'}
                                required
                            />

                            <input
                                className="w-full h-[50px] sm:h-[55px] md:h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] placeholder:text-[#EFE6D7]/70 focus:outline-none focus:ring-2 focus:ring-[#EFE6D7]"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={'Номер телефона*'}
                                required
                            />

                            <input
                                className="w-full h-[50px] sm:h-[55px] md:h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] placeholder:text-[#EFE6D7]/70 focus:outline-none focus:ring-2 focus:ring-[#EFE6D7]"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={'Email*'}
                                required
                            />

                            <div className='flex flex-col lg:flex-row w-full gap-4'>
                                <div className='flex flex-col w-full lg:w-1/2 gap-4'>
                                    <DatePicker
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleInputChange}
                                        placeholder="Дата заезда*"
                                        required
                                    />




                                    <div className="relative w-full">
                                        <input
                                            className="w-full h-[50px] sm:h-[55px] md:h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] placeholder:text-[#EFE6D7]/70 focus:outline-none focus:ring-2 focus:ring-[#EFE6D7]"
                                            type="text"
                                            disabled
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleInputChange}
                                            placeholder={'Количество человек*'}
                                            min="1"
                                            required
                                        />
                                        <div className="absolute flex gap-2 right-4 top-1/2 transform -translate-y-1/2">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({
                                                    ...formData,
                                                    guests: Math.max(1, (Number(formData.guests) || 0) - 1)
                                                })}
                                                className="cursor-pointer hover:opacity-80 transition-opacity"
                                            >
                                                <svg width="20" height="14" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M27 0L0 0L13.5 18L27 0Z" fill="#EFE6D7"/>
                                                </svg>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setFormData({
                                                    ...formData,
                                                    guests: (Number(formData.guests) || 0) + 1
                                                })}
                                                className="rotate-180 cursor-pointer hover:opacity-80 transition-opacity"
                                            >
                                                <svg width="20" height="14" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M27 0L0 0L13.5 18L27 0Z" fill="#EFE6D7"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>


                                </div>

                                <div className='flex flex-col w-full lg:w-1/2 gap-4'>
                                    <DatePicker
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleInputChange}
                                        placeholder="Дата выезда*"
                                        required
                                    />

                                    <div className="relative w-full">
                                        <select
                                            className="w-full h-[50px] sm:h-[55px] md:h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] focus:outline-none focus:ring-2 focus:ring-[#EFE6D7] appearance-none"
                                            name="roomType"
                                            value={formData.roomType}
                                            onChange={handleInputChange}
                                            required
                                            style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                                        >
                                            {roomType.map((item, index) => (
                                                <option key={index} className="text-gray-600" value={item.id || item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27 0L0 0L13.5 18L27 0Z" fill="#EFE6D7"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                             <textarea
                                 className="w-full h-[120px] sm:h-[136px] md:h-[152px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] p-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] placeholder:text-[#EFE6D7]/70 focus:outline-none focus:ring-2 focus:ring-[#EFE6D7] resize-none"
                                 name="comments"
                                 value={formData.comments}
                                 onChange={handleInputChange}
                                 placeholder='Дополнительные пожелания'
                             />

                            <div className='text-[0.904rem] text-[#EFE6D7] pl-5'>
                                <p>
                                    Нажимая кнопку, вы даете согласие на обработку ваших персональных данных.
                                </p>

                                <a className='underline cursor-pointer'>
                                    Политика конфиденциальности
                                </a>
                            </div>
                        </div>


                        <div className='flex justify-center mt-2 sm:mt-4'>
                            <WhiteButton type="submit">
                                Забронировать
                            </WhiteButton>
                        </div>
                    </form>
                </section>
            </BookingWrapper>
        </div>
    );
}