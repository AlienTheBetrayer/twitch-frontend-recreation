import { APIs } from "../../constants/constants";

const RawText = async() => {
    const response = await fetch(APIs.text);
    const json = await response.json();
    return json;
}

export default RawText;