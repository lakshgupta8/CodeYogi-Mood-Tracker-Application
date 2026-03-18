import { type FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { happyMomentSelector } from '../selectors/mood';
import type { Moment } from '../types';
import { happyCleared } from '../actions/mood';
import Button from './Button';

export interface HappyTrackerProps {
    happyCount: number;
}

const HappyTracker: FC<HappyTrackerProps> = () => {
    const happyMoment = useSelector(happyMomentSelector);
    const dispatch = useDispatch();

    return (
        <div className='bg-orange-700 px-8 py-4 text-white'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">Happy Moments</h2>
                <Button
                    onClick={() => dispatch(happyCleared())}
                >
                    Clear
                </Button>
            </div>
            {happyMoment.map((moment: Moment, index: number) => (
                <div key={index}>
                    Happiness Intensity: {moment.intensity}, When: {moment.when.toLocaleString()}
                </div>
            ))}
        </div>
    );
};

export default memo(HappyTracker);