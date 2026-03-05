import GreenButton from "../../../shared/ui/green-button.jsx";
import ServiceCart from "./service-cart.jsx";

export default function Service() {

    return (
        <div className='flex w-full flex-1 flex-col items-center'>


            <div className='flex flex-col justify-center items-center w-full '>
                <h1 className='text-[4rem]'>Услуги</h1>

                <p className='text-center min-w-[200px] max-w-[1040px] text-[1.642rem]'>
                    Санаторий "Чистый Воздух" предлагает широкий спектр услуг, направленных на восстановление здоровья и
                    общее оздоровление гостей. Мы создаем комфортные условия для отдыха и лечения, сочетая современные
                    технологии с природными ресурсами.
                </p>
            </div>


            <div className='w-full flex gap-4 justify-between mb-15 mt-14 max-w-[1600px]'>
                <ServiceCart title={"Физиотерапия"} description={"Санаторий предлагает комфортабельный крытый \n" +
                    "и открытый бассейны \n" +
                    "с подогревом, где гости могут наслаждаться плаванием \n" +
                    "в любое время года."}
                             url={"https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"}/>
                <ServiceCart title={"Физиотерапия"} description={"Санаторий предлагает комфортабельный крытый \n" +
                    "и открытый бассейны \n" +
                    "с подогревом, где гости могут наслаждаться плаванием \n" +
                    "в любое время года."}
                             url={"https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"}/>
                <ServiceCart title={"Физиотерапия"} description={"Санаторий предлагает комфортабельный крытый \n" +
                    "и открытый бассейны \n" +
                    "с подогревом, где гости могут наслаждаться плаванием \n" +
                    "в любое время года."}
                             url={"https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"}/>
                <ServiceCart title={"Физиотерапия"} description={"Санаторий предлагает комфортабельный крытый \n" +
                    "и открытый бассейны \n" +
                    "с подогревом, где гости могут наслаждаться плаванием \n" +
                    "в любое время года."}
                             url={"https://img.freepik.com/premium-photo/hands-masseur-female-caucasian-back-horizontal-view-body-healthy-procedure_246930-3561.jpg?semt=ais_hybrid&w=740&q=80"}/>

            </div>

            <GreenButton children='Забронировать отдых'/>


        </div>
    )
}