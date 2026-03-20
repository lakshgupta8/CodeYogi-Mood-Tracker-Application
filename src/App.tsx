import ProductListPage from "./pages/ProductListPage";
import HomePage from "./pages/HomePage";
import OrderListPage from "./pages/OrderListPage";
import { Routes, Route } from "react-router-dom";
import OrderDetailPage from "./pages/OrderDetailPageWithRedux";

function App() {
    return (
        <div className="p-2">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductListPage />} />
                <Route path="/orders" element={<OrderListPage />} />
                <Route path="/orders/:orderId" element={<OrderDetailPage />} />
            </Routes>
        </div>
    );
}

export default App;