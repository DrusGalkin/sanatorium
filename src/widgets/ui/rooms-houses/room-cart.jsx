import {useEffect, useState} from "react";
import WhiteButton from "../../../shared/ui/white-button.jsx";

export default function RoomCart({revers = false, url, title, price, id, maxPeople, description}) {
    const [style, setStyle] = useState('flex justify-between bg-[#777C5C]')

    useEffect(()=>{
        setStyle(
            !revers === true
                ?
                'flex w-full rounded-2xl h-[22.563rem] gap-20 bg-[#777C5C]'
                :
                'flex w-full rounded-2xl h-[22.563rem] gap-20 bg-[#777C5C] flex-row-reverse'
        );
    }, [])

    return (
        <div className={style}>
            <img
                className='object-cover max-w-[34.125rem]  rounded-2xl object-center '
                src={url}
                alt=""/>

            <div className='w-full flex flex-col gap-4 font-light text-[#EFE6D7] max-w-[900px] p-10'>

                <h1 className='text-[3rem]'>
                    {title}
                </h1>

                <p className='text-[1.642rem]'>
                    Вместимость: {maxPeople} человека
                </p>

                <p className='h-[100px] text-[1.642rem] wrap-break-word'>
                    {description}
                </p>

                <div className='flex justify-between items-center'>
                    <h2 className='text-[3rem]'>
                        {price} руб
                    </h2>

                    <WhiteButton
                        onClick={() => window.location.href="/rooms/" + id}
                        children={'Подробнее'}/>
                </div>

            </div>
        </div>
    )
}