export default function EmployeeProfile({ fullName, specialization, experience, description }) {
    const images = [
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/4a78d9a578409c0070afdd0c3813094ed8f0b60b",
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/e4b57a669ec5001e48c1f256920f3f5c1eeba3bd",
        "https://www.figma.com/file/bFXHSayrihGj2e58mzfpVo/image/465e0b484fb908a35a1dbb1eeace5feb55fb6c20",
    ];

    return (
        <div className='flex mt-10 mb-20 justify-center text-[#142C12] items-center px-4 md:px-6'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 w-full max-w-[1420px] items-center lg:items-start'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full lg:max-w-[808px]'>
                    <div className='w-full md:w-2/3'>
                        <img
                            className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[20rem] xs:h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[45rem]'
                            src={images[0]}
                            alt={fullName}
                        />
                    </div>

                    <div className='flex flex-row md:flex-col gap-4 w-full md:w-1/3'>
                        <div className='flex-1 md:flex-auto'>
                            <img
                                className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[10rem] xs:h-[12rem] sm:h-[15rem] md:h-[21.5rem] lg:h-[21.5rem]'
                                src={images[1]}
                                alt={`${fullName} 2`}
                            />
                        </div>
                        <div className='flex-1 md:flex-auto'>
                            <img
                                className='w-full rounded-[12px] border-[5px] border-[#777C5C] object-cover object-center md:object-left h-[10rem] xs:h-[12rem] sm:h-[15rem] md:h-[21.5rem] lg:h-[21.5rem]'
                                src={images[2]}
                                alt={`${fullName} 3`}
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full lg:max-w-[600px] flex flex-col gap-4 md:gap-6 text-center lg:text-left'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-bold leading-tight'>
                        {fullName}
                    </h1>

                    <div className='space-y-3 md:space-y-4'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-[1.2rem]'>
                            <span className='font-semibold'>Специализация:</span> {specialization}
                        </p>

                        <p className='text-sm sm:text-base md:text-lg lg:text-[1.2rem]'>
                            <span className='font-semibold'>Стаж работы:</span> {experience}
                        </p>

                        <p className='text-sm sm:text-base md:text-lg lg:text-[1.2rem] leading-relaxed'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}