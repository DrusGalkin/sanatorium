import RoomCart from "./room-cart.jsx";
import {Fade, Slide} from "react-awesome-reveal";
import {Element} from "react-scroll";

export default function Rooms() {
    const rooms = [
        {
            id: 1,
            url: 'https://avatars.mds.yandex.net/i?id=a313444da6696969417dff22489c6caa_l-8253146-images-thumbs&n=13',
            title: "Полулюкс",
            price: 2000,
            maxPeople: 4,
            description: 'В номер входит: двуспальная кровать и раскладной диван, телевизор, мини-бар, санузел, балкон, кондиционер',
        },
        {
            id: 2,
            url: 'https://avatars.mds.yandex.net/i?id=a313444da6696969417dff22489c6caa_l-8253146-images-thumbs&n=13',
            title: "Люкс",
            price: 3500,
            maxPeople: 2,
            description: 'Просторный номер с двуспальной кроватью, гостиной зоной, джакузи, телевизором, мини-баром и панорамным балконом',
        },
        {
            id: 3,
            url: 'https://avatars.mds.yandex.net/i?id=a313444da6696969417dff22489c6caa_l-8253146-images-thumbs&n=13',
            title: "Семейный домик",
            price: 5000,
            maxPeople: 6,
            description: 'Отдельный домик с двумя спальнями, гостиной, кухней, террасой и сауной. Идеально для большой семьи или компании',
        },
    ]

    return (
        <Element name={'rooms'} className='flex w-full flex-1 flex-col items-center px-4 md:px-6 lg:px-8'>
            <div className='flex flex-col justify-center items-center w-full max-w-[1600px] mb-6 md:mb-8 lg:mb-10'>
                <Fade cascade triggerOnce delay={20}>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] text-center mb-4 md:mb-6'>
                        Номера/Домики
                    </h1>

                    <p className='text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.642rem] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[1150px] leading-relaxed'>
                        Санаторий "Чистый Воздух" предлагает разнообразное жилье: уютные стандартные номера, полулюксы и
                        люксы для пар и семей, а также комфортабельные домики для уединенного отдыха. Семейные домики
                        подходят для больших компаний, а эко-домики создают атмосферу близости к природе. Каждый номер
                        оборудован всем необходимым для комфортного отдыха.
                    </p>
                </Fade>
            </div>

            <div className='w-full flex flex-col gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10 lg:mb-15 max-w-[1600px]'>
                {rooms.map((item, index) => (
                    <Slide duration={1500} triggerOnce direction={(index + 1) % 2 === 0 ? 'left' : 'right'} key={index}>
                        <RoomCart
                            key={item.id || index}
                            revers={(index + 1) % 2 === 0}
                            url={item.url}
                            title={item.title}
                            description={item.description}
                            maxPeople={item.maxPeople}
                            price={item.price}
                            id={item.id}
                        />
                    </Slide>
                ))}
            </div>
        </Element>
    )
}