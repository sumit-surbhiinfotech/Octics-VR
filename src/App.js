import Login from './components/Login';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import './css/themes/vertical-modern-menu-template/materialize.css'
import './css/themes/vertical-modern-menu-template/style.css'
import './css/pages/login.css';
import './css/custom/custom.css'

import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App"  >
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
