import Button from "../../elements/ui/Button";

import play from '../../../assets/play.svg'
import volumelow from '../../../assets/volume-low.svg'
import fullscreen from '../../../assets/fullscreen.svg'
import settings from '../../../assets/settings.svg'

const TopChannelsUI = () => {
    return (
        <div className='h-full w-full flex flex-col justify-between absolute z-1 group'>
            <div className='self-start p-2 md:p-3'>
                <div className='rounded w-fit px-1 bg-red-500 flex justify-center items-center'>
                    <span className='text-gray-50 text-base font-semibold [font-variant:small-caps]'>
                        LIVE
                    </span>
                </div>
            </div>

            <div className='p-2 group-hover:opacity-100 opacity-0 transition-all text-white flex justify-between'>
                <div className='flex gap-1'>
                    <Button>
                        <img src={play} className='w-5 invert grayscale'/>
                    </Button>
                    <Button>
                        <img src={volumelow} className='w-5 invert grayscale'/>
                    </Button>
                </div>

                <div className='flex gap-1'>
                    <Button>
                        <img src={settings} className='w-5 invert grayscale'/>
                    </Button>
                    <Button>
                        <img src={fullscreen} className='w-5 invert grayscale'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopChannelsUI;