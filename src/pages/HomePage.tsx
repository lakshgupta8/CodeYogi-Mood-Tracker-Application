import { type FC, memo } from "react";
import HappyTracker from "../components/HappyTracker";
import SadTracker from "../components/SadTracker";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export const HomePage: FC = () => {
    return (
        <div>
            <div className="gap-4 grid grid-cols-2 mb-12">
                <HappyTracker />
                <SadTracker />
            </div>
            <Button className="m-2"><Link to="/products">Products</Link></Button>
            <Button className="m-2"><Link to="/orders">Orders</Link></Button>
        </div>
    );
};

export default memo(HomePage);