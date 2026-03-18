import { type FC, memo } from "react";
import HappyTracker from "../components/HappyTracker";
import SadTracker from "../components/SadTracker";
import HappyIncrementor from "../components/HappyIncrementor";
import SadIncrementor from "../components/SadIncrementor";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export const HomePage: FC = () => {
    return (
        <div>
            <HappyTracker happyCount={0} />
            <SadTracker sadCount={0} />
            <HappyIncrementor />
            <SadIncrementor />
            <div className="p-2"><Link to="/products"><Button>Products</Button></Link></div>
            <div className="p-2"><Link to="/orders"><Button>Orders</Button></Link></div>
        </div>
    );
};

export default memo(HomePage);