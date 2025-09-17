import { useState, useEffect, useRef } from "react";
import { APIs } from "../../constants/constants";

const RandomImage = ({className, api: string = APIs.streamers, ...rest}: any) => {
    const [url, setUrl] = useState('');
    const hasFetched = useRef(false);

    useEffect(() => {
        if(hasFetched.current)
            return;
        
        hasFetched.current = true;
        fetch(string).then(r => {
            setUrl(r.url);
        });
    }, []);

    return (
        <div>
            {url ? (
                <img className={className} src={url} {...rest}/>
            ): (
                <div className={`${className} bg-active opacity-20`}/>
            )}
        </div>
    );
}

export default RandomImage;