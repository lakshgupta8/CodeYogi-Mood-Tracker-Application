import { type FC, memo, type ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                {children}
            </main>
        </div>
    );
}

export default memo(Layout);
