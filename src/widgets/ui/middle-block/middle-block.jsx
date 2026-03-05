import MiddleBlockWrapper from "./middle-block-wrapper.jsx";

export default function MiddleBlock(){
    return (
        <div className='w-full'>
            <MiddleBlockWrapper>
                <section className='text-[#142C12] text-center max-w-6xl px-4'>
                    <p className="text-sm uppercase tracking-wider mb-2 opacity-90">
                        Лечебно-курортный санаторий
                    </p>
                    <h1 className="text-[8rem]">
                        Чистый воздух
                    </h1>
                    <div className='w-full flex items-center justify-center'>
                        <p className="text-lg max-w-3xl opacity-90 leading-relaxed">
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