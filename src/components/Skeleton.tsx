import type { FC } from "react";

const Skeleton: FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col space-y-6 bg-white dark:bg-gray-300 p-6 animate-pulse ${className}`}>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-200 dark:bg-gray-200 rounded-lg w-12 h-12"></div>
                        <div className="space-y-2">
                            <div className="bg-gray-200 dark:bg-gray-200 rounded-md w-32 h-4"></div>
                            <div className="bg-gray-200 dark:bg-gray-200 rounded-md w-24 h-3"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skeleton;
