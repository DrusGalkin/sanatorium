import GreenButton from "../../../shared/ui/green-button.jsx";
import {HeaderNav} from "../../../shared/tools/header-nav.js";

export default function Header() {
    return (
        <header className='w-full mt-[40px] max-w-[1920px] sticky z-50 flex justify-around items-center'>
            <nav className='flex text-[25px] font-light items-center gap-20 justify-between'>
                {
                    HeaderNav.map((item, i) => {
                        return (
                            <p
                                className='transition cursor-pointer hover:scale-110'
                                key={i}>
                                {item.title}
                            </p>
                        )
                    })
                }
            </nav>


            <GreenButton children="Связаться"/>

        </header>
    )
}