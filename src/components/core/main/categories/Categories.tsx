import { APIs } from "../../../constants/constants";

import RandomImage from "../../../elements/random/RandomImage";
import RandomText from "../../../elements/random/RandomText";
import Section from "./Section";

const Categories = () => {  
    return (
        <Section contentType='categories'>
            <b className='text-violet-400 cursor-pointer hover:underline hover:text-violet-500'>Hot categories</b> that you could play
        </Section>
    )
}

export default Categories;