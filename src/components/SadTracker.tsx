import { type FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { sadCountSelector } from '../selectors';

export interface SadTrackerProps {
    sadCount: number;
}

const SadTracker: FC<SadTrackerProps> = () => {
    const sadCount = useSelector(sadCountSelector);
    return (
        <div className='bg-indigo-700 px-8 py-4'>
            Total sad points: {sadCount}
        </div>
    );
};

export default memo(SadTracker);