import {useEffect, useState} from "react";
import EmployeeCart from "./employee-cart.jsx";

export default function Employees() {
    const [up, setUp] = useState([])
    const [down, setDown] = useState([])

    useEffect(() => {
        const empls = [
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Иванов Петр Сергеевич",
                role: "Главный врач"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Смирнова Анна Владимировна",
                role: "Физиотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Козлов Дмитрий Николаевич",
                role: "Массажист"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Морозова Татьяна Игоревна",
                role: "Медицинская сестра"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Волков Андрей Павлович",
                role: "Реабилитолог"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Соколова Наталья Михайловна",
                role: "Диетолог"
            },
        ]

        setUp(empls.slice(0, 3))
        setDown(empls.slice(3, 7))
    }, [])

    return (
        <div className='flex w-full flex-1 flex-col items-center px-4 md:px-6 lg:px-8'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] text-center mb-6 md:mb-8 lg:mb-10'>
                Медицинский персонал
            </h1>

            <div className='w-full flex flex-col gap-4 md:gap-5 lg:gap-6 max-w-[1600px]'>
                <div className='flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 lg:w-3/4'>
                        {up.map((item, index) => (
                            <EmployeeCart
                                url={item.url}
                                role={item.role}
                                name={item.name}
                                key={index}
                            />
                        ))}
                    </div>

                    <div className='lg:w-1/4 flex items-center'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-[1.21rem] leading-relaxed bg-[#EFE6D7] p-4 md:p-5 lg:p-6 rounded-lg'>
                            В санатории "Чистый Воздух" трудится опытный медицинский персонал, который является основой
                            нашего оздоровительного подхода.
                            Наши врачи и медсестры имеют специальное образование в курортологии, физиотерапии и
                            реабилитации. Каждый сотрудник предлагает индивидуальные программы лечения, учитывая состояние
                            здоровья каждого гостя.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6'>
                    {down.map((item, index) => (
                        <EmployeeCart
                            url={item.url}
                            role={item.role}
                            name={item.name}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}