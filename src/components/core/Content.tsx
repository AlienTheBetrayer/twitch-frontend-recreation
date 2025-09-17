import { useState } from 'react';
import { motion } from 'motion/react';

import heart from '../../assets/heart.svg'
import video from '../../assets/video.png'
import collapse from '../../assets/collapse.svg'

import Button from '../elements/ui/Button';
import ChannelCard from '../elements/website/ChannelCard';
import InteractiveButton from '../elements/ui/InteractiveButton';
import HoverComponent from '../elements/ui/HoverComponent';
import Main from './Main';


const Content = () => {
    const generateImages = (n: number, expanded: boolean) => {
        return Array.from({ length: n }).map((_, i) => (
            <ChannelCard key={i} expanded={expanded}/>
        ))
    };
    
    const [expanded, setexpanded] = useState(false);
    const sidebarClass = expanded ? 'lg:w-60' : 'lg:w-14';

    return (
        <div>
            <motion.div 
                className={`${sidebarClass} z-50 overflow-y-auto fixed flex flex-col items-center py-2 w-14 mt-12 h-full [scrollbar-width:none] bg-sidebar`}
                initial={{ x: -100}}
                animate={{ x : 0}}
                transition={{ease: 'easeOut', delay: 0.3, duration: 0.5 }}>
                <div className='lg:flex justify-between w-full hidden text-gray-200 self-start px-3 text-[1.2rem] my-2 font-bold'>
                    {expanded ? 'For You' : ''}
                    <Button onClick={() => setexpanded(!expanded)} className={`w-8 my-[-4px] justify-center ${expanded ? 'rotate-180' : 'rotate-0'}`}>
                        <img src={collapse} className='invert'/>
                    </Button>
                </div>

                <InteractiveButton className={`w-8 justify-center ${expanded ? 'lg:hidden' : ''}`}>
                    <img className='grayscale invert-75 w-6 h-8' src={heart}/>
                    <HoverComponent className='shadow-[0_0_10px_#000000] bg-gray-200 text-black min-w-20 px-2 h-7 mt-0.5 text-[0.8rem] left-16 flex justify-center items-center'>
                        Followed Channels
                    </HoverComponent>
                </InteractiveButton>

                { expanded ? (
                <div className='lg:flex hidden text-gray-200 self-start ml-3 text-[0.8rem] font-bold [font-variant:small-caps]'>
                    FOLLOWED CHANNELS
                </div>) : '' }


                <motion.div     
                className='pt-2 flex gap-0.5 flex-col items-center w-full'
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: 'anticipate' }}>
                    {generateImages(5, expanded)}

                    <InteractiveButton className={`w-8 my-2 justify-center ${expanded ? 'lg:hidden' : ''}`}>
                        <img className='grayscale invert-75 w-5' src={video}/>
                        <HoverComponent className='shadow-[0_0_10px_#000000] bg-gray-200 text-black min-w-20 px-2 h-7 mt-2 text-[0.8rem] left-16 flex justify-center items-center'>
                            Live Channels
                        </HoverComponent>
                    </InteractiveButton>
                    { expanded ? (
                    <div className='lg:flex hidden text-gray-200 self-start ml-3 text-[0.8rem] my-3 font-bold [font-variant:small-caps]'>
                        LIVE CHANNELS
                    </div>) : '' }
                    
                    {generateImages(25, expanded)}
                </motion.div>
            </motion.div>





            <Main expanded={expanded}/>
        </div>
    );
}

export default Content;