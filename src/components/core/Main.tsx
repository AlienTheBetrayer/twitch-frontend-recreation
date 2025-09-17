import { motion } from "motion/react";

import LiveChannels from "./main/categories/LiveChannels";
import RecommendedChannels from "./main/categories/RecommendedChannels";
import TopChannels from "./main/TopChannels";
import NewGames from "./main/categories/NewGames";
import Categories from "./main/categories/Categories";


const Main = ({className, expanded}: any) => { 
    const paddingLeft = expanded ? 'pl-14 lg:pl-60' : 'pl-14 lg:pl-14';

    return (
        <section className={`${className} bg-main pt-12 ${paddingLeft} w-full h-max flex flex-col transition-all`}>
            <TopChannels/>
            
            <motion.div 
            className='flex flex-col'
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ease: 'easeOut', delay: 0.8, duration: 0.5 }}>
                <LiveChannels/>
                <RecommendedChannels/>
                <NewGames/>
                <Categories/>
                <NewGames/>
                <RecommendedChannels/>
                <LiveChannels/>
                <Categories/>
                <LiveChannels/>
                <RecommendedChannels/>
                <NewGames/>
                <Categories/>
                <NewGames/>
                <RecommendedChannels/>
                <LiveChannels/>
                <Categories/>
            </motion.div>
        </section>
    )
}

export default Main;