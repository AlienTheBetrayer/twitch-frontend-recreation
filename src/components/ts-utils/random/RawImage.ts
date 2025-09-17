import { APIs } from "../../constants/constants";

const RawImage = async(api: string = APIs.streams) => {
    const response = await fetch(api);
    return response.url;
}

export default RawImage;