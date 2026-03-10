import {useEffect, useState} from "react";
import photo1 from '/1.jpg'
import photo2 from '/2.jpg'
import photo3 from '/3.jpg'
import photo4 from '/4.jpg'
import photo5 from '/5.jpg'
import { Link, Element } from 'react-scroll'
import {Fade, Slide} from "react-awesome-reveal";

export default function About() {
    const [left, setLeft] = useState([])
    const [right, setRight] = useState([])

    useEffect(() => {
        const photos = [
            photo1,
            photo2,
            photo3,
            photo4,
            photo5,
        ]

        setLeft(photos.slice(0, 3))
        setRight(photos.slice(3, 5))
    }, []);

    return (
        <Element name={'about'} className='flex w-full flex-1 flex-col items-center px-4 sm:px-6 lg:px-8'>
            <Fade triggerOnce>
                <h1 className='text-3xl font-tenor sm:text-4xl md:text-5xl lg:text-[4rem] text-center font-light'>
                    О нас
                </h1>
            </Fade>

            <div className='w-full mt-8 sm:mt-10 md:mt-14 max-w-[1600px]'>
                <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-12 xl:gap-16'>


                    <div className='flex-1 text-base sm:text-lg md:text-xl lg:text-[1.642rem] space-y-4 sm:space-y-6 lg:space-y-10'>
                        <Slide triggerOnce direction='left'>
                            <p className="leading-relaxed">
                                Лечебно-курортный санаторий "Чистый воздух" — это уникальное место, где каждый гость может
                                восстановить здоровье и насладиться атмосферой умиротворения. Расположенный в живописной
                                местности, окружённой лесами и чистыми водоёмами, санаторий предлагает идеальные условия для
                                лечения и отдыха.
                            </p>
                            <p className="leading-relaxed">
                                Санаторий специализируется на лечении различных заболеваний, включая заболевания органов
                                дыхания, сердечно-сосудистой системы и опорно-двигательного аппарата. В медицинском центре
                                работают квалифицированные специалисты, которые разрабатывают индивидуальные программы
                                лечения, основанные на современных методах и природных факторах.
                            </p>
                            <p className="leading-relaxed">
                                На территории санатория созданы все условия для активного отдыха: прогулочные зоны,
                                спортивные площадки и возможности для занятий йогой на свежем воздухе. Для любителей природы
                                предусмотрены экскурсии и пешие прогулки по живописным маршрутам.
                            </p>
                            <p className="leading-relaxed">
                                "Чистый воздух" — это не только лечение, но и возможность отвлечься от повседневной суеты,
                                восстановить силы и зарядиться положительной энергией.
                            </p>
                        </Slide>
                    </div>

                    <div className='flex gap-4 sm:gap-6 lg:gap-8 justify-center'>
                        <div className='flex flex-col gap-4 sm:gap-5 lg:gap-7'>
                            <Slide direction='down' triggerOnce>
                                {left.map((item, index) => (
                                    <img
                                        className='h-[180px] sm:h-[200px] md:h-[230px] lg:h-[270px]
                                             w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px]
                                             object-cover border-2 sm:border-3 lg:border-5
                                             rounded border-[#777C5C] shadow-lg hover:shadow-xl
                                             transition-shadow duration-300'
                                        key={index}
                                        src={item}
                                        alt={`Санаторий Чистый воздух - фото ${index + 1}`}
                                    />
                                ))}
                            </Slide>

                        </div>

                        <div className='flex flex-col gap-4 sm:gap-5 lg:gap-7'>
                            <Slide direction='up' triggerOnce>
                                {right.map((item, index) => (
                                    <img
                                        className='h-[280px] sm:h-[320px] md:h-[370px] lg:h-[420px]
                                             w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]
                                             object-cover border-2 sm:border-3 lg:border-5
                                             rounded border-[#777C5C] shadow-lg hover:shadow-xl
                                             transition-shadow duration-300'
                                        key={index}
                                        src={item}
                                        alt={`Санаторий Чистый воздух - фото ${index + 4}`}
                                    />
                                ))}
                            </Slide>

                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}