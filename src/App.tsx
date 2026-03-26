import ProductListPage from "./Pages/ProductListPage";
import HomePage from "./Pages/HomePage";
import OrderListPage from "./Pages/OrderListPage";
import { Routes, Route } from "react-router-dom";
import { OrderDetailPageConnected } from "./Pages/OrderDetailPageWithRedux";
import UserPage from "./Pages/UserPage";
import Layout from "./Components/Layout";

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