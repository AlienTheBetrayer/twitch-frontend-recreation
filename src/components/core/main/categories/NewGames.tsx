import { APIs } from "../../../constants/constants";

import RandomImage from "../../../elements/random/RandomImage";
import RandomText from "../../../elements/random/RandomText";
import Section from "./Section";

const NewGames = () => {  
    return (
        <Section contentType='stream'>
            <b className='text-violet-400 cursor-pointer hover:underline hover:text-violet-500'>New games</b> that you cannot miss
        </Section>
    )
}

export default NewGames;