import {useEffect, useState} from "react";
import WhiteButton from "../../../shared/ui/white-button.jsx";

export default function RoomCart({revers = false, url, title, price, id, maxPeople, description}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getContainerClass = () => {
        const baseClass = 'flex w-full rounded-2xl bg-[#777C5C] overflow-hidden';

        if (isMobile) {
            return `${baseClass} flex-col`;
        }

        return `${baseClass} ${revers ? 'flex-row-reverse' : 'flex-row'}`;
    };

    return (
        <div className={getContainerClass()}>
            <div className={`
                ${isMobile ? 'w-full h-64' : 'w-full md:w-2/5 lg:w-1/3'} 
                flex-shrink-0
            `}>
                <img
                    className='w-full h-full object-cover'
                    src={url}
                    alt={title}
                />
            </div>

            <div className={`
                flex flex-col flex-1 
                ${isMobile ? 'p-4' : 'p-4 md:p-6 lg:p-8 xl:p-10'}
                text-[#EFE6D7] 
                ${isMobile ? 'gap-2' : 'gap-3 md:gap-4'}
            `}>
                <h1 className={`
                    font-light
                    ${isMobile ? 'text-2xl' : 'text-2xl md:text-3xl lg:text-4xl xl:text-[3rem]'}
                `}>
                    {title}
                </h1>

                <p className={`
                    font-light
                    ${isMobile ? 'text-base' : 'text-base md:text-lg lg:text-xl xl:text-[1.642rem]'}
                `}>
                    Вместимость: {maxPeople} {maxPeople === 1 ? 'человек' : 'человека'}
                </p>

                <p className={`
                    font-light
                    ${isMobile ? 'text-sm' : 'text-sm md:text-base lg:text-lg xl:text-[1.2rem]'}
                    ${isMobile ? 'h-auto' : 'h-auto md:h-20 lg:h-24 xl:h-[100px]'}
                    break-words
                `}>
                    {description}
                </p>

                <div className={`
                    flex 
                    ${isMobile ? 'flex-col gap-3' : 'flex-row justify-between items-center'}
                    mt-2 md:mt-4
                `}>
                    <h2 className={`
                        font-light
                        ${isMobile ? 'text-2xl' : 'text-2xl md:text-3xl lg:text-4xl xl:text-[3rem]'}
                    `}>
                        {price.toLocaleString()} руб
                    </h2>

                    <WhiteButton
                        onClick={() => window.location.href = "/rooms/" + id}
                        className={`
                            ${isMobile ? 'w-full' : 'w-auto'}
                        `}
                    >
                        Подробнее
                    </WhiteButton>
                </div>
            </div>
        </div>
    )
}