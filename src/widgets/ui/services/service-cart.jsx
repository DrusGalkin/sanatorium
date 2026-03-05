export default function ServiceCart({ url, title, description }) {
    return (
        <div className='w-full transition-all hover:scale-105 cursor-pointer flex flex-col justify-center gap-3 items-center max-w-[350px] '>
            <img
                className='h-[360px] border-5 rounded border-[#777C5C] w-full object-cover'
                src={url}
                alt=""/>

            <h1 className='text-[2rem]'>{title}</h1>

            <p className='text-[1.25rem]'>
                {description}
            </p>
        </div>
    )
}