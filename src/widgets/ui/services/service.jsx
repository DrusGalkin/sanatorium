import GreenButton from "../../../shared/ui/green-button.jsx";
import ServiceCart from "./service-cart.jsx";
import {Fade, Slide} from "react-awesome-reveal";
import {Element} from "react-scroll";
import { useState, useEffect } from "react";

export default function Service() {
    const services = [
        {
            title: "Физиотерапия",
            description: "Физиотерапевтические процедуры включают в себя такие методы, как электрофорез, ультразвуковая терапия и магнитотерапия.",
            url: "https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            title: "Физиотерапия",
            description: "Физиотерапевтические процедуры включают в себя такие методы, как электрофорез, ультразвуковая терапия и магнитотерапия.",
            url: "https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            title: "Физиотерапия",
            description: "Физиотерапевтические процедуры включают в себя такие методы, как электрофорез, ультразвуковая терапия и магнитотерапия.",
            url: "https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            title: "Физиотерапия",
            description: "Физиотерапевтические процедуры включают в себя такие методы, как электрофорез, ультразвуковая терапия и магнитотерапия.",
            url: "https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"
        }
    ];

    const [gridCols, setGridCols] = useState('lg:grid-cols-4');

    useEffect(() => {
        const updateGridCols = () => {
            if (window.innerWidth < 640) {
                setGridCols('grid-cols-1');
            } else if (window.innerWidth < 768) {
                setGridCols('grid-cols-2');
            } else if (window.innerWidth < 1024) {
                setGridCols('grid-cols-2 md:grid-cols-2');
            } else {
                setGridCols('grid-cols-2 md:grid-cols-3 lg:grid-cols-4');
            }
        };

        updateGridCols();
        window.addEventListener('resize', updateGridCols);
        return () => window.removeEventListener('resize', updateGridCols);
    }, []);

    return (
        <Element name={'services'} className='flex w-full flex-1 flex-col items-center px-4 sm:px-5 md:px-6 lg:px-8'>
            <div className='flex flex-col justify-center items-center w-full max-w-[1600px] mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
                <Fade triggerOnce>
                    <h1 className='
                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4rem]
                        text-center font-light mb-3 sm:mb-4 md:mb-6
                        px-2 sm:px-0
                    '>
                        Услуги
                    </h1>

                    <p className='
                        text-center
                        text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[1.642rem]
                        max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[1040px]
                        leading-relaxed px-3 sm:px-4 md:px-0
                    '>
                        Санаторий "Чистый Воздух" предлагает широкий спектр услуг, направленных на восстановление здоровья и
                        общее оздоровление гостей. Мы создаем комфортные условия для отдыха и лечения, сочетая современные
                        технологии с природными ресурсами.
                    </p>
                </Fade>
            </div>

            <div className={`
                w-full grid 
                grid-cols-1 
                xs:grid-cols-2 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4
                gap-3 sm:gap-4 md:gap-5 lg:gap-6
                mb-6 sm:mb-8 md:mb-10 lg:mb-15
                max-w-[1600px]
                px-2 sm:px-3 md:px-4
            `}>
                <Fade cascade damping={0.1} delay={20} triggerOnce>
                    {services.map((service, index) => (
                        <div key={index} className="w-full flex justify-center">
                            <ServiceCart
                                title={service.title}
                                description={service.description}
                                url={service.url}
                            />
                        </div>
                    ))}
                </Fade>
            </div>

            <div className="w-full flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-0">
                <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
                    <GreenButton>
                        Забронировать отдых
                    </GreenButton>
                </div>
            </div>
        </Element>
    )
}