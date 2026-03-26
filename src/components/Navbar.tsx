import { type FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'Orders', path: '/orders' },
        { label: 'Users', path: '/users' },
    ];

    return (
        <nav className="bg-indigo-700 shadow-lg mb-8 text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="font-bold text-xl tracking-tight">MoodTracker</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4 ml-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                                            ? 'bg-indigo-800 text-white'
                                            : 'text-indigo-100 hover:bg-indigo-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden flex items-center space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`p-1 rounded-md text-xs font-medium ${isActive(item.path)
                                        ? 'text-white underline underline-offset-4 decoration-2'
                                        : 'text-indigo-200'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default memo(Navbar);
