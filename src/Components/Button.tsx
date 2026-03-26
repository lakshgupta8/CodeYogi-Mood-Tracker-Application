export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className, onClick, ...props }: ButtonProps) => {
    const base = 'px-4 py-2 text-white rounded font-semibold transition duration-200 focus:outline-none focus:ring-2';
    const variants = {
        primary: 'bg-blue-500 hover:bg-gray-600 focus:ring-blue-500',
        secondary: 'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-700',
        tertiary: 'bg-orange-700 hover:bg-orange-800 focus:ring-orange-700'
    };

    return (
        <div>
            <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
                {children}
            </button>
        </div>
    );
};

export default Button;
