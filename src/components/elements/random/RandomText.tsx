import { useState, useEffect, useRef } from "react";
import { APIs } from "../../constants/constants";

const RandomText = ({ api: string = APIs.text, className }: any) => {
    const [txt, setTxt] = useState('');
    const hasFetched = useRef(false);

    useEffect(() => {
        if(hasFetched.current)
            return;
        
        hasFetched.current = true;
        fetch(string).then(r => {
            r.json().then(j => setTxt(j));
        });
    }, []);

    return (
        <div className={className}>
            {txt ? txt : ''}
        </div>
    );
}

export default RandomText;