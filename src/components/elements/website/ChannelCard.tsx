import HoverComponent from "../ui/HoverComponent";
import InteractiveButton from "../ui/InteractiveButton";
import RandomImage from "../random/RandomImage"
import RandomText from "../../ts-utils/random/RawText";

import { constants } from "../../constants/constants";
import { useEffect, useRef, useState } from "react";
import FormatNumber from "../../ts-utils/random/FormatNumber";

const ChannelCard = ({className, expanded, ...rest}: any) => {
    // generating random category and viewer count
    const calculated = useRef(false);
    const [category, setCategory] = useState('');
    const [viewers, setViewers] = useState('');

    const [text, setText] = useState('');
    const textGenerated = useRef(false);
    useEffect(() => {
        // generating random streamer's name
        if(textGenerated.current)
            return;
        textGenerated.current = true;
        RandomText().then(t => setText(t));

        // random viewers + category
        if(!calculated.current) {
            setCategory(constants.categories[Math.floor(Math.random() * constants.categories.length)])
            setViewers(FormatNumber(Math.floor(Math.random() * ( constants.viewers[0] - constants.viewers[1] + 1)) + constants.viewers[1]));
            calculated.current = true;
        }
    }, []);
    
    return (
        <InteractiveButton className={`${expanded ? 'lg:min-w-full lg:rounded-[0px]' : ''} flex`} {...rest}>
            <div className='flex items-center justify-center w-full'>
                {/* user's profile image  */}
                <RandomImage className='rounded-full p-1 group-hover:scale-125 transition-all min-w-10 h-10'/>
                
                <div className={`hidden ${expanded ? 'lg:flex' : ''}  items-center w-full`}>
                    {/* left side with name and category  */}
                    <div className='flex flex-col mx-2'>
                        <span className='text-[0.8rem] font-semibold'>
                            { text }                           
                        </span>
                        <span className='text-[0.7rem] text-shadowed'>
                            { category }
                        </span>
                    </div>

                    {/* right side with live / offline and viewer count  */}
                    <div className='flex items-center ml-auto w-12'>
                        <div className='flex bg-red-500 w-2 h-2 rounded-full'/>
                        <span className='text-[0.8rem] ml-1 text-center'>
                            { viewers }
                        </span>
                    </div>
                </div>
            </div>

            <HoverComponent className={`shadow-[0_0_10px_#000000] bg-sidebar text-white text-[0.8rem] pb-3 w-50 left-16 ${expanded ? 'lg:left-62' : ''} items-center p-2`}>
                {expanded ? 
                    <div>
                        <span className='line-clamp-2 text-gray-50'> 
                            Some generated description that I couldn't be arsed to build (fuck off)
                        </span>
                    </div>
                :
                <div className='flex flex-col'>
                    <span className='text-violet-300'>
                        { text } · { category } 
                    </span>

                    <span className='line-clamp-2 text-gray-50'> 
                        Some generated description that I couldn't be arsed to build (fuck off)
                    </span>

                    <div className='flex items-center gap-1 text-shadowed'>
                        <div className='w-2 h-2 bg-red-500 rounded-full'/>
                        Live | { viewers } viewers
                    </div>
                </div> }
            </HoverComponent>
        </InteractiveButton>
    )
}

export default ChannelCard;