import Procedure1 from "../../assets/procedure/1Procedure.svg"
import Procedure2 from "../../assets/procedure/2Procedure.svg"
import Procedure3 from "../../assets/procedure/3Procedure.svg"
import Procedure1A from "../../assets/procedure/1AProcedure.svg"
import Procedure2A from "../../assets/procedure/1BProcedure.svg"
import Procedure3A from "../../assets/procedure/1CProdecure.svg"

export default function ProcedureRegistration() {
    return (
        <section className="mx-5 lg:mx-18 py-20 lg:py-20">
            <div className="text-primary-50 flex flex-col items-center justify-center py-8 lg:py-18 border bg-secondary-50 rounded-[32px] lg:rounded-[54px]">
                <h1 className="font-bold tracking-wide text-2xl leading-[38.40px] md:text-5xl xl:text-6xl lg:leading-[72px] mb-8 lg:mb-12">Registrant Procedure</h1>
                <div className="hidden sm:block">
                    <div className="flex flex-col items-center">
                        <img src={Procedure1} className="mb-10 w-[90%] xl:w-[100%]" />
                        <img src={Procedure2} className="mb-10 w-[90%] xl:w-[100%]" />
                        <img src={Procedure3} className="mb-0  w-[90%] xl:w-[100%]" />
                    </div>
                </div>
                <div className="block sm:hidden">
                    <img src={Procedure1A} className="mb-8  " />
                    <img src={Procedure2A} className="mb-8  " />
                    <img src={Procedure3A} className="mb-8  " />
                </div>
            </div>
        </section>
    )
}