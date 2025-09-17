import Button from "../../../elements/ui/Button";
import SectionStream from "./SectionStream";
import arrow from '../../../../assets/arrow.svg'
import SectionCategories from "./SectionCategories";

const Section = ({className, children, contentType='stream'}: any) => {
    return (
        <div className='flex flex-col w-full h-fit px-5 gap-5'> 
            {/* text  */}
            <div className='flex gap-1 w-full'>
                <span className='text-gray-50'>
                    {children}
                </span>
            </div>

            {/* live streams  */}
            <div className='flex flex-wrap w-full justify-evenly gap-y-5'>
                { contentType === 'stream' ? (
                    <>
                        <SectionStream/>
                        <SectionStream/>
                        <SectionStream/>
                    </>
                ) : (
                    <>
                        <SectionCategories/>
                        <SectionCategories/>
                        <SectionCategories/>
                        <SectionCategories/>
                        <SectionCategories/>
                    </>
                )}
            </div>

            <div className='flex justify-between items-center mt-2 mb-12'>
                <div className='w-[40%] mx-auto h-[0.3px] bg-[#2b2b2b]'/>
                <Button className='text-violet-400 min-w-fit'>
                    Show More
                </Button>
                <div className='w-[40%] mx-auto h-[0.3px] bg-[#2b2b2b]'/>
            </div>
        </div>
    )
}

export default Section;