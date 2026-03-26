import { type FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sadMomentSelector } from '../Selectors/mood';
import type { Moment } from '../types';
import { sadCleared } from '../Actions/mood';
import Button from './Button';
import SadIncrementor from './SadIncrementor';

const SadTracker: FC = () => {
    const sadMoment = useSelector(sadMomentSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='bg-indigo-700 px-8 py-4 rounded-md text-white'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl">Sad Moments</h2>
                    <Button
                        variant='tertiary'
                        onClick={() => dispatch(sadCleared())}
                    >
                        Clear
                    </Button>
                </div>
                {sadMoment.map((moment: Moment, index: number) => (
                    <div key={index} className='bg-indigo-200 my-2 px-8 py-4 rounded-md text-black text-lg'>
                        <p>Sadness Intensity: {moment.intensity}</p>
                        <p>When: {moment.when.toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <SadIncrementor />
        </div>
    );
};

export default memo(SadTracker);