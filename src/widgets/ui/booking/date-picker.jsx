import { useState, useRef, useEffect } from 'react';

export default function DatePicker({ name, value, onChange, placeholder, required = false }) {
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const calendarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleDateSelect = (day) => {
        const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const formattedDate = formatDate(selectedDate);

        const event = {
            target: {
                name: name,
                value: formattedDate
            }
        };
        onChange(event);
        setShowCalendar(false);
    };

    const changeMonth = (increment) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
    };

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    return (
        <div className="relative w-full" ref={calendarRef}>
            <div
                onClick={() => setShowCalendar(!showCalendar)}
                className="w-full h-[50px] justify-between sm:h-[55px] md:h-[63px] bg-transparent border border-[#EFE6D7] rounded-[12.7px] px-4 text-[#EFE6D7] font-montserrat text-base sm:text-lg md:text-[20px] lg:text-[25px] flex items-center cursor-pointer hover:bg-[#EFE6D7]/10 transition-colors"
            >
                {value ? value : placeholder}

                <div>
                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 26H27V0H0V26ZM2.45455 23.6364V7.09091H24.5455V23.6364H2.45455ZM4.90909 21.2727H7.36364V18.9091H4.90909V21.2727ZM4.90909 16.5455H7.36364V14.1818H4.90909V16.5455ZM9.81818 21.2727H12.2727V18.9091H9.81818V21.2727ZM9.81818 16.5455H12.2727V14.1818H9.81818V16.5455ZM14.7273 21.2727H17.1818V18.9091H14.7273V21.2727ZM4.90909 11.8182H7.36364V9.45455H4.90909V11.8182ZM14.7273 16.5455H17.1818V14.1818H14.7273V16.5455ZM9.81818 11.8182H12.2727V9.45455H9.81818V11.8182ZM19.6364 16.5455H22.0909V14.1818H19.6364V16.5455ZM14.7273 11.8182H17.1818V9.45455H14.7273V11.8182ZM19.6364 11.8182H22.0909V9.45455H19.6364V11.8182Z" fill="#EFE6D7"/>
                    </svg>
                </div>
            </div>

            {showCalendar && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-50 w-[280px] sm:w-[320px]">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            type="button"
                            onClick={() => changeMonth(-1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            ←
                        </button>
                        <span className="font-medium text-gray-800">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
                        <button
                            type="button"
                            onClick={() => changeMonth(1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            →
                        </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {weekDays.map(day => (
                            <div key={day} className="text-center text-sm font-medium text-gray-500">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: startOffset }).map((_, index) => (
                            <div key={`empty-${index}`} className="h-8 sm:h-10" />
                        ))}

                        {Array.from({ length: daysInMonth }).map((_, index) => {
                            const day = index + 1;
                            const dateStr = formatDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
                            const isSelected = value === dateStr;
                            const isToday = dateStr === formatDate(new Date());

                            return (
                                <button
                                    key={day}
                                    type="button"
                                    onClick={() => handleDateSelect(day)}
                                    className={`
                    h-8 sm:h-10 rounded-full text-sm font-medium transition-colors
                    ${isSelected ? 'bg-[#777C5C] text-white' : 'hover:bg-gray-100 text-gray-700'}
                    ${isToday && !isSelected ? 'border border-[#777C5C]' : ''}
                  `}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            const today = new Date();
                            setCurrentMonth(today);
                            handleDateSelect(today.getDate());
                        }}
                        className="mt-4 w-full py-2 text-sm text-[#777C5C] hover:bg-[#777C5C]/10 rounded-lg transition-colors"
                    >
                        Сегодня
                    </button>
                </div>
            )}
        </div>
    );
}