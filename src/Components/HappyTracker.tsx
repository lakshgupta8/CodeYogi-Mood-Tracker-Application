import { type FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { happyMomentSelector } from '../Selectors/mood';
import type { Moment } from '../types';
import { happyCleared } from '../Actions/mood';
import Button from './Button';
import HappyIncrementor from './HappyIncrementor';

const HappyTracker: FC = () => {
    const happyMoment = useSelector(happyMomentSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='bg-orange-700 px-8 py-4 rounded-md text-white'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl">Happy Moments</h2>
                    <Button
                        variant="secondary"
                        onClick={() => dispatch(happyCleared())}
                    >
                        Clear
                    </Button>
                </div>
                {happyMoment.map((moment: Moment, index: number) => (
                    <div key={index} className='bg-orange-200 my-2 px-8 py-4 rounded-md text-black text-lg'>
                        <p>Happiness Intensity: {moment.intensity}</p>
                        <p>When: {moment.when.toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <HappyIncrementor />
        </div>
    );
};

export default memo(HappyTracker);