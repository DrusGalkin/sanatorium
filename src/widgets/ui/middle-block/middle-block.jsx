import MiddleBlockWrapper from "./middle-block-wrapper.jsx";
import {useEffect, useState} from "react";

export default function MiddleBlock(){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 808);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={ isMobile ? 'w-full z-100' : "w-full"}>
            <MiddleBlockWrapper>
                <section className='text-[#142C12] text-center px-4'>
                    <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 opacity-90">
                        Лечебно-курортный санаторий
                    </p>

                    <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                        Чистый воздух
                    </h1>

                    <div className='w-full flex items-center justify-center mt-4 md:mt-6'>
                        <p className="text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl opacity-90 leading-relaxed px-4">
                            Санаторий "Чистый Воздух" предлагает уникальную возможность
                            восстановить здоровье и гармонию с природой в окружении
                            живописного леса и свежего воздуха.
                        </p>
                    </div>
                </section>
            </MiddleBlockWrapper>
        </div>
    )
}