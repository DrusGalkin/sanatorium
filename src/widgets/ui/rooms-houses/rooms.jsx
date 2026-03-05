import RoomCart from "./room-cart.jsx";

export default function Rooms() {
    const tmpArr = [
        {
            url: 'https://avatars.mds.yandex.net/i?id=a313444da6696969417dff22489c6caa_l-8253146-images-thumbs&n=13',
            title: "Полулюкс",
            price: 2000,
            maxPeople: 4,
            description: 'В номер входит: двуспальная кровать и раскладной диван, телевизор, мини-бар, санузел, балкон, кондиционер',
        },
        {
            url: 'https://avatars.mds.yandex.net/i?id=a313444da6696969417dff22489c6caa_l-8253146-images-thumbs&n=13',
            title: "Полулюкс",
            price: 2000,
            maxPeople: 4,
            description: 'В номер входит: двуспальная кровать и раскладной диван, телевизор, мини-бар, санузел, балкон, кондиционер',
        },
        {
            url: 'https://avatars.mds.yandex.net/i?id=a313444da6696969417dff22489c6caa_l-8253146-images-thumbs&n=13',
            title: "Полулюкс",
            price: 2000,
            maxPeople: 4,
            description: 'В номер входит: двуспальная кровать и раскладной диван, телевизор, мини-бар, санузел, балкон, кондиционер',
        },
    ]


    return (
        <div className='flex w-full flex-1 flex-col items-center'>


            <div className='flex flex-col justify-center items-center w-full '>
                <h1 className='text-[4rem]'>Номера/Домики</h1>

                <p className='text-center min-w-[200px] max-w-[1150px] text-[1.642rem]'>
                    Санаторий "Чистый Воздух" предлагает разнообразное жилье: уютные стандартные номера, полулюксы и
                    люксы для пар и семей, а также комфортабельные домики для уединенного отдыха. Семейные домики
                    подходят для больших компаний, а эко-домики создают атмосферу близости к природе. Каждый номер
                    оборудован всем необходимым для комфортного отдыха.
                </p>
            </div>


            <div className='w-full flex-col flex gap-4 justify-between mb-15 mt-14 max-w-[1600px]'>
                {
                    tmpArr.map((item, index) => (
                        <RoomCart
                            revers={(index + 1) % 2 === 0}
                            url={item.url}
                            title={item.title}
                            description={item.description}
                            maxPeople={item.maxPeople}
                            price={item.price}
                        />
                    ))
                }
            </div>


        </div>
    )
}