const Button = ({children, className, ...rest}: any) => {
    return (
        <div className={`text-gray-200 cursor-pointer hover:bg-hover active:bg-active min-w-0 h-8 px-1 rounded flex items-center transition-all ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Button;