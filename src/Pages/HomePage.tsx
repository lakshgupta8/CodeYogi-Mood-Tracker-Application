import { type FC, memo } from "react";
import HappyTracker from "../Components/HappyTracker";
import SadTracker from "../Components/SadTracker";


export const HomePage: FC = () => {
    return (
        <div className="py-8">
            <h1 className="mb-8 font-extrabold text-gray-900 text-4xl text-center italic">How are you feeling today?</h1>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
                <HappyTracker />
                <SadTracker />
            </div>
        </div>
    );
};

export default memo(HomePage);