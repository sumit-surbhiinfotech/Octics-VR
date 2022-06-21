import Login from './components/Login';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import './css/themes/vertical-modern-menu-template/materialize.css'
import './css/themes/vertical-modern-menu-template/style.css'
import './css/pages/login.css';
import './css/pages/dashboard.css';
import './css/custom/custom.css';
import './js/plugins.js';
import './js/search.js';
import './js/custom/custom-script.js';
import './js/scripts/customizer.js';
import './js/scripts/dashboard-ecommerce.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllOrder from './components/Orders/AllOrder';
import ProductListing from './components/Products/ProductListing';
import ViewOrder from './components/Orders/ViewOrders';
import CustomerView from './components/Customer/CustomerView';
import CustomerListing from './components/Customer/CustomerListing';

function App() {
  return (
    <BrowserRouter>
      <div className="App"  >
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order-listing" element={<AllOrder />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/view-orders" element={<ViewOrder />} />
          <Route path="/customer-view" element={<CustomerView />} />
          <Route path="/customer-listing" element={<CustomerListing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
