import GreenButton from "../../../shared/ui/green-button.jsx";
import {HeaderNav} from "../../../shared/tools/header-nav.js";
import {useEffect, useState} from "react";
import {Slide} from "react-awesome-reveal";
import {Link, Element, scroller} from 'react-scroll'
import {useLocation, useNavigate} from "react-router";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 808);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNavigation = (item) => {
        if (location.pathname === '/') {
            scroller.scrollTo(item.path.replace('#', ''), {
                smooth: true,
                duration: 500,
                offset: -70
            })
        } else {
            navigate('/', {
                state: { scrollTo: item.path.replace('#', '') }
            })
        }
    }

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
        console.log(window.location.pathname);
    }, [isMobile]);

    return (

        <header className='w-full mt-[40px] max-w-[1920px] sticky z-50 flex justify-around items-center'>
            <Slide direction='down'>
                <nav className='flex text-[25px] font-light items-center gap-20 justify-between relative'>
                    {isMobile && (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="z-50 relative"
                            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                        >
                            {!isOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            )}
                        </button>
                    )}

                    {isMobile && isOpen && (
                        <>
                            <div
                                className="fixed inset-0 bg-black/50 z-40"
                                onClick={() => setIsOpen(false)}
                            />

                            <div
                                className='absolute left-0 top-15 bg-white shadow-lg rounded-lg p-4 z-50 min-w-[200px]'>
                                {HeaderNav.map((item, i) => (
                                    <h1
                                        className='transition cursor-pointer hover:scale-110 py-2 px-4 hover:bg-gray-100 rounded'
                                        key={i}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </h1>
                                ))}
                            </div>
                        </>
                    )}

                    {!isMobile && HeaderNav.map((item, i) => (
                        <Link
                            to={window.location.pathname === "/" ? item.path : null}
                            smooth={true}
                            duration={500}
                        >
                            <h1
                                onClick={() => handleNavigation(item)}
                                className='transition cursor-pointer hover:scale-110'
                                key={i}
                            >
                                {item.title}
                            </h1>
                        </Link>

                    ))}
                </nav>

                <GreenButton>
                    Связаться
                </GreenButton>
            </Slide>

        </header>

    )
}