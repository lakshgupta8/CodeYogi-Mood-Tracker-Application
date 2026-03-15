import HappyIncrementor from "./components/HappyIncrementor";
import SadIncrementor from "./components/SadIncrementor";
import HappyTracker from "./components/HappyTracker";
import SadTracker from "./components/SadTracker";
import ProductListPage from "./ProductListPage";
import { Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";

function App() {
    return (
        <div className="space-y-2 p-2">

            <Routes>
                <Route path="/" element={
                    <>
                        <HappyTracker happyCount={0} />
                        <SadTracker sadCount={0} />
                        <HappyIncrementor />
                        <SadIncrementor />
                        <Link to="/products"><Button>Products</Button></Link>
                    </>
                } />
                <Route path="/products" element={<ProductListPage />} />
            </Routes>
        </div>
    );
}

export default App;