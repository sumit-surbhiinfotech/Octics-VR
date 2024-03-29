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
  useNavigate
} from "react-router-dom";
import AllOrder from './components/Orders/AllOrder';
import ProductListing from './components/Products/ProductListing';
import ViewOrder from './components/Orders/ViewOrders';
import CustomerView from './components/Customer/CustomerView';
import CustomerListing from './components/Customer/CustomerListing';
import AddNewProduct from './components/Products/AddNewProduct';
import EditProduct from './components/Products/EditProduct';
import ProductView from './components/Products/ProductView';
import ManagesCustomer from './components/Customer/ManagesCustomer';
import PendingOrderlist from './components/Orders/PendingOrderlist';
import OrderFulfillAndTracking from './components/Orders/OrderFulfillAndTracking';
import ListOfAddedDiscount from './components/Discount/ListOfAddedDiscount';
import AddNewDiscount from './components/Discount/AddNewDiscount';
import ListOfReturnOrder from './components/Return/ListOfReturnOrder';
import ReturnOrderView from './components/Return/ReturnOrderView';
import EditYourProfile from './components/Profile/EditYourProfile';
import ChangedProfileInformation from './components/Profile/ChangedProfileInformation';
import ListOfUpload3DModal from './components/3DModal/ListOfUpload3DModal';
import Refund from './components/Return/Refund';
import ListofCollection from './components/Products/ListofCollection';
import CreateCollections from './components/Products/CreateCollections';
import User from './components/User/User';
import UserList from './components/User/UserList';
import { useEffect } from 'react';
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  // useEffect(() => {
  //   if (localStorage.getItem('admin')) {
  //   } else {
  //     if (window.location.href.split('/').pop() !== 'login') {
  //       window.location.href = '/login'
  //     }
  //   }
  // }, []);
  return (
    <BrowserRouter>
      <div className="App"  >
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order-listing" element={<AllOrder />} />
            <Route path="/product-listing" element={<ProductListing />} />
            <Route path="/view-orders" element={<ViewOrder />} />
            <Route path="/customer-view" element={<CustomerView />} />
            <Route path="/customer-listing" element={<CustomerListing />} />
            <Route path="/add-new-product" element={<AddNewProduct />} />
            <Route path="/edit-product" element={<EditProduct />} />
            <Route path="/product-view" element={<ProductView />} />
            <Route path="/manages-customer" element={<ManagesCustomer />} />
            <Route path="/pending-order-list" element={<PendingOrderlist />} />
            <Route path="/order-fulfill-and-tracking" element={<OrderFulfillAndTracking />} />
            <Route path="/list-of-addes-discount" element={<ListOfAddedDiscount />} />
            <Route path="/add-new-discount" element={<AddNewDiscount />} />
            <Route path="/list-of-return-order" element={<ListOfReturnOrder />} />
            <Route path="/return-order-view" element={<ReturnOrderView />} />
            <Route path="/edit-your-profile" element={<EditYourProfile />} />
            <Route path="/changed-profile-information" element={<ChangedProfileInformation />} />
            <Route path="/list-upload-3d-modal" element={<ListOfUpload3DModal />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/list-of-collection" element={<ListofCollection />} />
            <Route path="/create-collection" element={<CreateCollections />} />
            <Route path="/user" element={<User />} />
            <Route path="/user-list" element={<UserList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
