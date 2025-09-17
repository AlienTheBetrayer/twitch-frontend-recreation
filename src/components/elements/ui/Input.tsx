const Input = ({children, className, ...rest}: any) => {
    return (
        <input type='text' placeholder={children} className={`bg-transparent text-gray-200 outline-[1.5px] outline-gray-500 py-1 px-2 rounded focus:outline-purple-700 ${className}`} {...rest}/>
    )
}

export default Input;