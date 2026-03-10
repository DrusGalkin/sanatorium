import GreenButton from "../../../shared/ui/green-button.jsx";
import ServiceCart from "./service-cart.jsx";
import {Fade, Slide} from "react-awesome-reveal";

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

    return (
        <div className='flex w-full flex-1 flex-col items-center px-4 md:px-6 lg:px-8'>
            <div className='flex flex-col justify-center items-center w-full max-w-[1600px] mb-8 md:mb-10 lg:mb-12'>
                <Fade triggerOnce>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] text-center mb-4 md:mb-6'>
                        Услуги
                    </h1>

                    <p className='text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.642rem] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[1040px] leading-relaxed'>
                        Санаторий "Чистый Воздух" предлагает широкий спектр услуг, направленных на восстановление здоровья и
                        общее оздоровление гостей. Мы создаем комфортные условия для отдыха и лечения, сочетая современные
                        технологии с природными ресурсами.
                    </p>
                </Fade>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10 lg:mb-15 max-w-[1600px]'>
                <Fade cascade delay={20} triggerOnce>
                    {services.map((service, index) => (
                        <ServiceCart
                            key={index}
                            title={service.title}
                            description={service.description}
                            url={service.url}
                        />
                    ))}
                </Fade>

            </div>

            <div className="w-full flex justify-center mb-8 md:mb-10 lg:mb-12">
                <GreenButton>
                    Забронировать отдых
                </GreenButton>
            </div>
        </div>
    )
}