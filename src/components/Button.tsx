export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className, onClick, ...props }: ButtonProps) => {
    const base = 'px-4 py-2 text-white rounded font-semibold transition duration-200 focus:outline-none focus:ring-2';
    const variants = {
        primary: 'bg-blue-500 hover:bg-gray-600 focus:ring-blue-500',
        secondary: 'bg-gray-500 hover:bg-blue-600 focus:ring-gray-500'
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
