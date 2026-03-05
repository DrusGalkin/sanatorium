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
        <div className='flex w-full flex-1 flex-col items-center'>
            <h1 className='text-[4rem]'>О нас</h1>

            <div className='w-full mt-14 max-w-[1600px]'>
                <div className='flex w-full justify-center'>
                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col  text-[1.642rem] max-w-[800px] gap-5'>
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


                        <div className='flex gap-8'>
                            <div className='flex flex-col gap-7'>
                                {
                                    left.map((item, index) => (
                                        <img
                                            className='h-[270px] object-cover border-5 rounded border-[#777C5C] w-[250px]'
                                            key={index}
                                            src={item}
                                            alt=""
                                        />
                                    ))
                                }
                            </div>

                            <div className='flex flex-col gap-7'>
                                {
                                    right.map((item, index) => (
                                        <img
                                            className='h-[420px] object-cover border-5 rounded border-[#777C5C] w-[350px]'
                                            key={index}
                                            src={item}
                                            alt=""
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