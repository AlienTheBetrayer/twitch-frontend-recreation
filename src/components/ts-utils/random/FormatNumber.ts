const FormatNumber = (v: number): string => {
        const vstr = v.toString();
        if(v <= 999)
            return vstr;

        const digits = vstr.length;
        const format = `${vstr.substring(0, digits - 3)}.${vstr[digits - 3]}K`;
        
        return format;
}

export default FormatNumber;