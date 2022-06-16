import logo from './logo.svg';
import './App.css';

import {Home} from './components/Home'
import Login from './components/Login';
import Footer from './components/Footer';
import './css/themes/vertical-modern-menu-template/materialize.css'
import './css/themes/vertical-modern-menu-template/style.css'
import './css/pages/login.css';
import './css/custom/custom.css'

function App() {
  return (
    <div className="App"  >
      <div className='login-bg'>
        <Login />

      </div>
    </div>
  );
}

export default App;
