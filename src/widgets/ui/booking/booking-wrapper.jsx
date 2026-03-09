import photo from '/booking-photo.jpg'

export default function BookingWrapper({ children }){
    return (
        <div className='w-full relative'>
            <div className="relative w-full">
                <img
                    className='w-full object-cover h-[1080px]'
                    src={photo}
                    alt="Санаторий"
                />
                <div className="absolute inset-0 bg-[#EFE6D7BA]" />
            </div>

            {children && (
                <div className="absolute inset-0  w-full flex items-center justify-center ">
                    <div className="w-full flex items-center justify-center">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}