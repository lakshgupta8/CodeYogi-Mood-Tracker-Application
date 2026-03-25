import type { FC, ReactNode } from 'react';
import Skeleton from './Skeleton';

interface LoadingStateProps {
    isLoading: boolean;
    children: ReactNode;
    skeletonClassName?: string;
}

const LoadingState: FC<LoadingStateProps> = ({ isLoading, children, skeletonClassName }) => {
    if (isLoading) {
        return <Skeleton className={skeletonClassName} />;
    }
    return <>{children}</>;
};

export default LoadingState;
