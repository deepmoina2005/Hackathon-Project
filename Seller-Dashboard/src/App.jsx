import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import AddProduct from "./pages/AddProduct";
import AllProduct from "./pages/AllProduct";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext"; // Import Auth Context

function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth(); // Authentication state

  const isLoginPage = location.pathname === "/login";

  // Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <div
      className={`flex w-full ${
        isLoginPage ? "min-h-screen bg-gray-900" : "h-screen"
      } text-gray-100 overflow-hidden`}
    >
      {!isLoginPage && (
        <>
          {/* Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          <Sidebar />
        </>
      )}
      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-auto">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute element={<OverviewPage />} />} />
          <Route path="/products" element={<ProtectedRoute element={<ProductsPage />} />} />
          <Route path="/users" element={<ProtectedRoute element={<UsersPage />} />} />
          <Route path="/sales" element={<ProtectedRoute element={<SalesPage />} />} />
          <Route path="/orders" element={<ProtectedRoute element={<OrdersPage />} />} />
          <Route path="/analytics" element={<ProtectedRoute element={<AnalyticsPage />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<SettingsPage />} />} />
          <Route path="/add-product" element={<ProtectedRoute element={<AddProduct />} />} />
          <Route path="/all-product" element={<ProtectedRoute element={<AllProduct />} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
