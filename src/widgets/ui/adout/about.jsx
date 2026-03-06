import {useEffect, useState} from "react";
import photo1 from '/1.jpg'
import photo2 from '/2.jpg'
import photo3 from '/3.jpg'
import photo4 from '/4.jpg'
import photo5 from '/5.jpg'

export default function About() {
    const [left, setLeft] = useState([])
    const [right, setRight] = useState([])

    useEffect(() => {
        // аля с бд получил все ссылки дадада
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
        <div className='flex w-full flex-1 flex-col items-center px-4 md:px-6 lg:px-8'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] text-center'>
                О нас
            </h1>

            <div className='w-full mt-8 md:mt-10 lg:mt-14 max-w-[1600px]'>
                <div className='flex flex-col lg:flex-row w-full justify-center gap-8 lg:gap-12'>
                    <div className='flex-1 order-2 lg:order-1'>
                        <div className='flex flex-col text-base sm:text-lg md:text-xl lg:text-[1.642rem] max-w-[800px] gap-6 md:gap-8 lg:gap-10'>
                            <p>
                                Лечебно-курортный санаторий "Чистый воздух" — это уникальное место, где каждый гость может
                                восстановить здоровье и насладиться атмосферой умиротворения. Расположенный в живописной
                                местности, окружённой лесами и чистыми водоёмами, санаторий предлагает идеальные условия для
                                лечения и отдыха.
                            </p>
                            <p>
                                Санаторий специализируется на лечении различных заболеваний, включая заболевания органов
                                дыхания, сердечно-сосудистой системы и опорно-двигательного аппарата. В медицинском центре
                                работают квалифицированные специалисты, которые разрабатывают индивидуальные программы
                                лечения, основанные на современных методах и природных факторах.
                            </p>
                            <p>
                                На территории санатория созданы все условия для активного отдыха: прогулочные зоны,
                                спортивные площадки и возможности для занятий йогой на свежем воздухе. Для любителей природы
                                предусмотрены экскурсии и пешие прогулки по живописным маршрутам.
                            </p>
                            <p>
                                "Чистый воздух" — это не только лечение, но и возможность отвлечься от повседневной суеты,
                                восстановить силы и зарядиться положительной энергией.
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
                        <div className='flex gap-4 md:gap-6 lg:gap-8 flex-wrap lg:flex-nowrap justify-center'>
                            <div className='flex flex-col gap-4 md:gap-5 lg:gap-7'>
                                {
                                    left.map((item, index) => (
                                        <img
                                            className='h-[180px] sm:h-[200px] md:h-[220px] lg:h-[270px]
                                                     object-cover border-4 rounded border-[#777C5C]
                                                     w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]'
                                            key={index}
                                            src={item}
                                            alt="Санаторий Чистый воздух"
                                        />
                                    ))
                                }
                            </div>

                            <div className='flex flex-col gap-4 md:gap-5 lg:gap-7'>
                                {
                                    right.map((item, index) => (
                                        <img
                                            className='h-[240px] sm:h-[280px] md:h-[320px] lg:h-[420px]
                                                     object-cover border-4 rounded border-[#777C5C]
                                                     w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px]'
                                            key={index}
                                            src={item}
                                            alt="Санаторий Чистый воздух"
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}