import { motion } from 'motion/react'

import Button from '../elements/ui/Button'
import Input from '../elements/ui/Input'

import logo from '../../assets/logo.png'
import heart from '../../assets/heart.svg'
import explore from '../../assets/explore.svg'
import dots from '../../assets/dots.svg'
import search from '../../assets/search.png'
import prime from '../../assets/prime.svg'
import notifs from '../../assets/notifs.svg'
import whispers from '../../assets/whispers.svg'
import battery from '../../assets/battery.svg'

const Header = () => {
    return (
        <motion.header 
        className='bg-header z-50 w-full h-12 flex items-center justify-between fixed'
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ease: 'easeOut', duration: 0.5, }}>
            <div className='fixed w-full border-b-3 self-end border-black'/>

            <motion.div 
            className='flex items-center gap-3 pl-2'
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'circOut' }}>
                <Button className='w-10 justify-center group'>
                    <img src={logo} className='min-w-5 w-5 group-hover:w-6 transition-all'/>
                </Button>

                <Button>
                    <img src={heart} className='min-w-7 w-7 grayscale invert block sm:hidden'/>
                    <span className='hover:text-violet-400 transition hidden sm:block font-semibold'>Following</span>
                </Button>

                <Button>
                    <img src={explore} className='min-w-6 w-6 grayscale invert block sm:hidden'/>
                    <span className='hover:text-violet-400 transition hidden sm:block font-semibold'>Browse</span>
                </Button>
                
                <Button>
                    <img src={dots} className='min-w-6 w-6 grayscale invert'/>
                </Button>

            </motion.div>
                <div className='flex gap-2'>
                    <Input className='hidden sm:block w-[25vw]'></Input>
                    <Button>
                        <img src={search} className='min-w-5 w-5 grayscale invert hidden sm:block'/>
                    </Button>
                </div>

            
            <motion.div 
            className='flex sm:gap-4 gap-1 items-center pr-2'
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'circOut' }}>
                <Button className='block sm:hidden'><img src={search} className='min-w-6 w-6 grayscale invert'/></Button>
                { ([prime, notifs, whispers, battery]).map((v, k) => (
                    <Button key={k}><img src={v} className='min-w-6 w-6 grayscale invert'/></Button> 
                ))}
            </motion.div>
        </motion.header>
    )
}

export default Header;