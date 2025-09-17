import { useRef, useState, useEffect } from "react";
import { constants, APIs } from "../../../constants/constants";
import RandomImage from "../../../elements/random/RandomImage";
import RandomText from "../../../elements/random/RandomText";
import FormatNumber from "../../../ts-utils/random/FormatNumber";

const SectionCategories = () => {
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
        <div className='flex flex-col w-1/5 cursor-pointer items-center hover:scale-105 active:scale-110 transition-all'>
            <div className='relative flex flex-col w-full aspect-video rounded z-1'>
                <RandomImage api={APIs.streams} className='absolute w-1/2 h-full left-1/2 -translate-x-1/2 object-cover z-0'/>
            </div>

            <div className='flex gap-2 text-white'>
                <div className='flex flex-col ml-1'>
                    <RandomText/>
                    <span className='text-[#6a6a6a] text-[12px]'> 
                        <RandomText/>
                    </span>
                    <div className='flex gap-1 flex-wrap my-1'>
                        <div className='bg-sidebar text-[12px] truncate px-1.5 text-shadowed rounded-full w-fit h-fit'>
                            Game
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCategories;