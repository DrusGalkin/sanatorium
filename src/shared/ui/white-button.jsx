export default function WhiteButton({children}) {
    return (
        <button
            className='bg-[#EFE6D7] p-[2px] text-[#777C5C] min-w-[260px] pl-4 pr-4 h-[50px]  rounded-[0.7rem] text-[22px] transition cursor-pointer hover:scale-105'
        >
            <h1>
                {children}
            </h1>
        </button>
    )
}