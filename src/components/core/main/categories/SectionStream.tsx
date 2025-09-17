import { useRef, useState, useEffect } from "react";
import { APIs, constants } from "../../../constants/constants";
import RandomImage from "../../../elements/random/RandomImage";
import RandomText from "../../../elements/random/RandomText";
import FormatNumber from "../../../ts-utils/random/FormatNumber";

const SectionStream = ({className}: any) => {
    const calculated = useRef(false);
    const [categories, setCategories]: any = useState([]);
    const [viewers, setViewers]: any = useState('');

    // generating random viewers and categories
    useEffect(() => {
        if(calculated.current)
            return;
        calculated.current = true;
        
        const categoryArr = [];
        for(let i = 0; i < Math.floor(Math.random() * (6) + 1); ++i)
            categoryArr.push(constants.categories[Math.floor(Math.random() * constants.categories.length)]);
        setCategories(categoryArr);
        setViewers(FormatNumber(Math.floor(Math.random() * ( constants.viewers[0] - constants.viewers[1] + 1)) + constants.viewers[1]));
    }, []);

    return (
        <div className='flex flex-col gap-4 sm:w-[48%] lg:w-[30%] w-full cursor-pointer hover:scale-105 active:scale-110 transition-all'>
            <div className='relative flex flex-col w-full aspect-video rounded z-1'>
                <RandomImage api={APIs.streams} className='absolute w-full h-full object-cover z-0'/>

                <div className='flex flex-col absolute justify-between inset-0 p-1'>
                    <span className='z-2 w-fit h-fit rounded bg-red-500 px-1 text-gray-50 text-base font-semibold [font-variant:small-caps]'>
                        LIVE
                    </span>
                    <span className='z-2 w-fit h-fit rounded bg-[#000000ad] px-1 text-gray-50 text-sm font-semibold [font-variant:small-caps]'>
                        { viewers } VIEWERS
                    </span>
                </div>
            </div>



            <div className='flex gap-2 text-white'>
                <RandomImage className='max-w-8 rounded-full'/>
                
                <div className='flex flex-col ml-1'>
                    <RandomText/>
                    <span className='text-[#6a6a6a] text-[12px]'> 
                        <RandomText/>
                    </span>
                    <div className='flex gap-1 flex-wrap my-1'>
                        { categories.map((category: string, i: number) => (
                            <div key={i} className='bg-sidebar text-[12px] truncate px-1.5 text-shadowed rounded-full w-fit h-fit'>
                                { category }
                            </div>
                        ))}            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionStream;