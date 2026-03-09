import RoomCart from "../rooms-houses/room-cart.jsx";
import Question from "./question.jsx";

export default function FrequentQuestions() {
    const questions = [
        {
           title: "Как добраться до санатория?",
           description: "Как добраться до санатория? Как добраться до санатория? Как добраться до санатория?",
        },
               {
           title: "Как забронировать номер в санатории?",
           description: "Как забронировать номер в санатории? Как забронировать номер в санатории? Как забронировать номер в санатории?",
        },
               {
           title: "Какие развлечения доступны на территории санатория?",
           description: "Какие развлечения доступны на территории санатория? Какие развлечения доступны на территории санатория? Какие развлечения доступны на территории санатория?",
        },
               {
           title: "Какой режим питания в санатории?",
           description: "Какой режим питания в санатории? Какой режим питания в санатории? Какой режим питания в санатории? Какой режим питания в санатории?",
        },
        {
            title: "Какие медицинские услуги предоставляет санаторий?",
            description: "Какие медицинские услуги предоставляет санаторий? Какие медицинские услуги предоставляет санаторий? Какие медицинские услуги предоставляет санаторий?",
        },

    ]

    return (
        <div className='flex w-full flex-1 flex-col items-center px-4 md:px-6 lg:px-8'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] text-center mb-4 md:mb-6'>
                Часто задаваемые вопросы
            </h1>

            <div className='w-full flex flex-col gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10 lg:mb-15 max-w-[1400px]'>
                {questions.map((item, index) => (
                    <Question key={index} title={item.title} description={item.description}/>
                ))}
            </div>
        </div>
    )
}