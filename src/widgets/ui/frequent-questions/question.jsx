import { useState } from "react";
import {Slide} from "react-awesome-reveal";

export default function Question({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center w-full max-w-[1400px] mx-auto px-4 sm:px-6'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='w-full flex justify-between items-center gap-4 sm:gap-6
                         border-2 sm:border-[2.7px] border-[#142C12]
                         rounded-lg sm:rounded-xl
                         p-3 sm:p-4 md:p-5
                         pl-4 sm:pl-6 md:pl-10
                         pr-4 sm:pr-6 md:pr-10
                         cursor-pointer hover:bg-[#142C12]/5 transition-colors
                         min-h-[60px] sm:min-h-[70px] md:min-h-[80px]'
            >
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[2.115rem]
                             font-medium text-[#142C12] leading-tight'>
                    {title}
                </h1>

                <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px] 
                                transition-transform duration-300 flex-shrink-0
                                ${isOpen ? 'rotate-45' : ''}`}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="17.4659"
                        y="0.831689"
                        width="31.6042"
                        height="1.66338"
                        rx="0.831689"
                        transform="rotate(90 17.4659 0.831689)"
                        fill="#142C12"
                        stroke="#142C12"
                        strokeWidth="1.66338"
                    />
                    <rect
                        x="0.831689"
                        y="15.8024"
                        width="31.6042"
                        height="1.66338"
                        rx="0.831689"
                        fill="#142C12"
                        stroke="#142C12"
                        strokeWidth="1.66338"
                    />
                </svg>
            </div>

            {isOpen && (
                <div className='w-full overflow-hidden transition-all duration-300'>
                    <Slide direction='down' reverse={!isOpen}>
                        <div className='w-full p-4 sm:p-5 md:p-6
                                  bg-[#EFE6D7] mt-2 rounded-lg sm:rounded-xl
                                  text-sm sm:text-base md:text-lg
                                  text-[#142C12] leading-relaxed'>
                            {description}
                        </div>
                    </Slide>

                </div>
            )}
        </div>
    );
}