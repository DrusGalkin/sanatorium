import photo from '/middle-photo.jpg'

export default function MiddleBlockWrapper({ children }){
    return (
        <div className='w-full relative -top-29'>
            <img
                className='w-full object-cover max-h-[480px] md:max-h-[720px] lg:max-h-[1080px]'
                src={photo}
                alt="Санаторий"
            />
            <div className="absolute inset-0 bg-[#EFE6D7BA] pointer-events-none" />

            {children && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                    <div className="pointer-events-auto w-full max-w-6xl">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}