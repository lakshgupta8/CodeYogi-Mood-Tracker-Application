import { type FC, memo } from "react";
import HappyTracker from "../components/HappyTracker";
import SadTracker from "../components/SadTracker";


export const HomePage: FC = () => {
    return (
        <div className="py-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center italic">How are you feeling today?</h1>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
                <HappyTracker />
                <SadTracker />
            </div>
        </div>
    );
};

export default memo(HomePage);