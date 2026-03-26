import ProductListPage from "./pages/ProductListPage";
import HomePage from "./pages/HomePage";
import OrderListPage from "./pages/OrderListPage";
import { Routes, Route } from "react-router-dom";
import { OrderDetailPageConnected } from "./pages/OrderDetailPageWithRedux";
import UserPage from "./pages/UserPage";
import Layout from "./components/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductListPage />} />
                <Route path="/orders" element={<OrderListPage />} />
                <Route path="/orders/:orderId" element={<OrderDetailPageConnected orderId={2} />} />
                <Route path="/users" element={<UserPage />} />
            </Routes>
        </Layout>
    );
}

export default App;