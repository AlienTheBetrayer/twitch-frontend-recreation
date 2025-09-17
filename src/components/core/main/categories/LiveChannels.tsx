import { useEffect, useRef, useState } from "react";


import { APIs, constants } from "../../../constants/constants";
import RandomImage from "../../../elements/random/RandomImage";
import RandomText from "../../../elements/random/RandomText";
import FormatNumber from "../../../ts-utils/random/FormatNumber";
import SectionStream from "./SectionStream";
import Section from "./Section";

const LiveChannels = () => {
    return (
        <Section contentType='stream'>
            <b className='text-violet-400 cursor-pointer hover:underline hover:text-violet-500'>Live channels</b> we think you'll like
        </Section>
    )
}

export default LiveChannels;