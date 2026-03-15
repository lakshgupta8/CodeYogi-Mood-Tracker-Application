import { type FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sadMomentSelector } from '../selectors/mood';
import type { Moment } from '../store';
import { sadCleared } from '../actions/mood';
import Button from './Button';

export interface SadTrackerProps {
    sadCount: number;
}

const SadTracker: FC<SadTrackerProps> = () => {
    const sadMoment = useSelector(sadMomentSelector);
    const dispatch = useDispatch();

    return (
        <div className='bg-indigo-700 px-8 py-4 text-white'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">Sad Moments</h2>
                <Button
                    onClick={() => dispatch(sadCleared())}
                >
                    Clear
                </Button>
            </div>
            {sadMoment.map((moment: Moment, index: number) => (
                <div key={index}>
                    Sadness Intensity: {moment.intensity}, When: {moment.when.toLocaleString()}
                </div>
            ))}
        </div>
    );
};

export default memo(SadTracker);