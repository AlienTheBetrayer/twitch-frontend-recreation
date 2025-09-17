import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';

import Button from "../../elements/ui/Button";
import RandomImage from "../../ts-utils/random/RawImage";

import arrow from '../../../assets/arrow.svg'
import loading from '../../../assets/loading.png'
import TopChannelsUI from "./TopChannelsUI";


const TopChannels = () => {
    // generating random "streams"
    const [channels, setChannels]: any = useState([]);
    const streamsMax = 10;
    const channelsGenerated = useRef(false);
    useEffect(() => {
        if(channelsGenerated.current)
            return;
        channelsGenerated.current = true;
        
        const channelArr: string[] = [];
        const load = async() => {
            for(let i = 0; i < streamsMax; ++i) {
                await RandomImage().then(t => {
                    channelArr.push(t);
                });
            }
        }
        load().then(() => setChannels(channelArr));
    }, []);


    // handling stream rotating
    const handleStreamPos = (side: string) => {
        if(side == 'left') { // flip right to left
            const newChannels: string[] = [...channels];
            newChannels.pop();
            newChannels.unshift(channels[channels.length - 1]);
            setChannels(newChannels);
        } else {
            const newChannels: string[] = [...channels];
            newChannels.shift();
            newChannels.push(channels[0]);
            setChannels(newChannels);
        }
    }

    const [currentButtonSide, setCurrentButtonSide] = useState('left');
    useEffect(() => {
        console.log(currentButtonSide);
    }, [currentButtonSide])

    return (
        <div className='w-full overflow-x-hidden h-fit flex my-5 justify-center select-none'>

            <div className='relative shadow-[0_0_20px_#000000] w-100 sm:w-150 md:w-175 h-fit my-5 aspect-video'>
                <TopChannelsUI/>
                <div>
                    { channels[0] ? (
                        <AnimatePresence>
                                <motion.img 
                                    className='rounded absolute w-100 sm:w-150 md:w-175 object-cover'
                                    key={channels[3]}
                                    src={channels[3]} 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0, x: (currentButtonSide == 'right' ? 100 : -100)}}>

                                    </motion.img>
                        </AnimatePresence>
                        
                    ) : (
                        <motion.img src={loading} initial={{opacity: 0}} animate={{opacity: 1}} className='brightness-[15%] grayscale'/> 
                    ) }
                </div>

                <motion.div 
                    className='left-0 top-1/2 absolute z-2'
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}>
                    <Button onClick={() => handleStreamPos('left')} onMouseEnter={() => setCurrentButtonSide('left')} className='absolute select-none flex justify-center items-center left-0 ml-5 bottom-1/2 translate-y-1/2 w-9 h-9 bg-main'>
                        <img src={arrow} className='grayscale invert w-4 h-4 rotate-180'/>
                    </Button>
                </motion.div>

                <motion.div 
                    className='right-0 top-1/2 absolute z-2'
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}>
                    <Button onClick={() => handleStreamPos('right')} onMouseEnter={() => setCurrentButtonSide('right')} className='absolute flex select-none justify-center items-center right-0 mr-5 bottom-1/2 translate-y-1/2 w-9 h-9 bg-main'>
                        <img src={arrow} className='grayscale invert w-4 h-4'/>
                    </Button>
                </motion.div>
                
            </div>
        </div>
    )
}

export default TopChannels;