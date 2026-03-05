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
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
            {
                url: "https://s11.stc.yc.kpcdn.net/share/i/12/14836414/wr-960.webp",
                name: "Федорова Елена Анатольевна",
                role: "Психотерапевт"
            },
        ]

        setUp(empls.slice(0, 3))
        setDown(empls.slice(3, 7))
    }, [])

    return (
        <div className='flex w-full flex-1 flex-col items-center'>
            <h1 className='text-[4rem]'>Медицинский персонал</h1>

            <div className='w-full flex flex-col gap-6 mt-14 max-w-[1600px]'>

                <div className='flex gap-4 justify-between'>
                    {
                        up.map((item, index) => (
                            <EmployeeCart url={item.url} role={item.role} name={item.name} key={index}/>
                        ))
                    }

                    <p className='max-w-[340px] text-[1.21rem]'>
                        В санатории "Чистый Воздух" трудится опытный медицинский персонал, который является основой
                        нашего оздоровительного подхода.
                        Наши врачи и медсестры имеют специальное образование в курортологии, физиотерапии и
                        реабилитации. Каждый сотрудник предлагает индивидуальные программы лечения, учитывая состояние
                        здоровья каждого гостя.
                    </p>
                </div>

                <div className='flex gap-4 justify-between'>
                    {
                        down.map((item, index) => (
                            <EmployeeCart url={item.url} role={item.role} name={item.name} key={index}/>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}