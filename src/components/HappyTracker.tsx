import { type FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { happyMomentSelector } from '../selectors';
import type { Moment } from '../store';
import { happyCleared } from '../actions';

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
                <button
                    onClick={() => dispatch(happyCleared())}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded font-semibold text-sm"
                >
                    Clear
                </button>
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