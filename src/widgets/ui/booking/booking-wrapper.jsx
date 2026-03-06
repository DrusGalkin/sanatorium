import photo from '/booking-photo.jpg'

export default function BookingWrapper({ children }){
    return (
        <div className='w-full relative -top-20'>
            <img
                className='w-full object-cover max-h-[1080px]'
                src={photo}
                alt="Санаторий"
            />
            <div className="absolute inset-0 bg-[#EFE6D7BA] pointer-events-none" />

            {children && (
                <div className="absolute inset-0 flex p-7   pointer-events-none">
                    <div className="pointer-events-auto">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}