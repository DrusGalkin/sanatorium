export default function ObjectProfile({ name, max, square, description, price}) {


    const images = [
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/3716fead942d2dba5c1fc721e6f30729fbec28d0",
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/db4453b2689b7f5404b4ed58a83b18277acab398",
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/2906d9cc5314ab745785f1939a216e52a86d1834",
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/bcc2e6305f39fc2bdc9253fc1f6386e87a2661db",
    ];

    return (
        <div className='flex mt-10 mb-45 justify-center text-[#142C12] items-center px-4 md:px-6'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 w-full max-w-[1420px] items-center lg:items-start'>
                <div className='flex flex-col  gap-4 md:gap-6 w-full lg:max-w-[808px]'>
                    <div className='w-full md:w-[49.25rem]'>
                        <img
                            className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[14rem] xs:h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[23.559rem]'
                            src={images[0]}
                            alt={name}
                        />
                    </div>

                    <div className='flex flex-row gap-4 w-full '>
                        <div className='flex-1 md:flex-auto'>
                            <img
                                className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[5rem] xs:h-[7rem] sm:h-[8.769rem] md:h-[10.769rem] lg:h-[13.769rem]'
                                src={images[1]}
                                alt={`${name} 2`}
                            />
                        </div>
                        <div className='flex-1 md:flex-auto'>
                            <img
                                className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[5rem] xs:h-[7rem] sm:h-[8.769rem] md:h-[10.769rem] lg:h-[13.769rem]'
                                src={images[2]}
                                alt={`${name} 3`}
                            />
                        </div>
                        <div className='flex-1 md:flex-auto'>
                            <img
                                className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[5rem] xs:h-[7rem] sm:h-[8.769rem] md:h-[10.769rem] lg:h-[13.769rem]'
                                src={images[3]}
                                alt={`${name} 4`}
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full lg:max-w-[600px] flex flex-col gap-4 md:gap-6 text-center lg:text-left'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-bold leading-tight'>
                        {name}
                    </h1>

                    <div className='space-y-3 md:space-y-4'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-[1.2rem]'>
                            <span className='font-semibold'>Вместимость:</span> {max} человека
                        </p>

                        <p className='text-sm sm:text-base md:text-lg lg:text-[1.2rem]'>
                            <span className='font-semibold'>Площадь:</span> {square} м²
                        </p>

                        <p className='text-sm mb-17 sm:text-base md:text-lg lg:text-[1.2rem] leading-relaxed'>
                            {description}
                        </p>

                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-bold leading-tight'>
                            {price} руб
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}