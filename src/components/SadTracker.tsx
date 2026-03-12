import { type FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sadMomentSelector } from '../selectors';
import type { Moment } from '../store';
import { sadCleared } from '../actions';

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
                <button
                    onClick={() => dispatch(sadCleared())}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded font-semibold text-sm"
                >
                    Clear
                </button>
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