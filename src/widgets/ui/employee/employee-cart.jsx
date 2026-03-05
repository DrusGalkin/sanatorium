export default function EmployeeCart({ url, name, role }) {
    return (
        <div className='w-full transition-all hover:scale-105 cursor-pointer flex flex-col justify-center gap-3 items-center max-w-[360px] '>
            <img
                className='h-[340px] border-5 rounded border-[#777C5C] w-full object-cover'
                src={url}
                alt=""/>

            <h1 className='text-[1.5rem]'>{name}</h1>

            <p className='text-[1.25rem] text-center'>
                {role}
            </p>
        </div>
    )
}