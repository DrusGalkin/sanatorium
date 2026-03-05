export default function GreenButton({children}) {
    return (
        <button
            className='bg-[#777C5C] p-[2px] text-[#EFE6D7] pl-4 pr-4 pt-2 pb-2 rounded-[0.7rem] text-[22px] transition cursor-pointer hover:scale-105'
        >
            {children}
        </button>
    )
}