import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EuropeDetailedPage from './pages/EuropeDetailedPage';
import AsiaDetailedPage from './pages/AsiaDetailedPage';
import AmericaDetailedPage from './pages/AmericaDetailedPage';
import AfricaOceaniaDetailedPage from './pages/AfricaOceaniaDetailedPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import EuropeInventoryPage from './pages/EuropeInventoryPage';


function App() {
  return (
    <div id='project'>
      <header>
        <p>세계여행을 위한</p>
        <p>For World Travel</p>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/signup' element={<SignupPage />}></Route>
          <Route path='/eudetailed' element={<EuropeDetailedPage />}></Route>
          <Route path='/asdetailed' element={<AsiaDetailedPage />}></Route>
          <Route path='/amdetailed' element={<AmericaDetailedPage />}></Route>
          <Route path='/afdetailed' element={<AfricaOceaniaDetailedPage />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
          <Route path='/edit' element={<EditPage />}></Route>
          <Route path='/euinventory' element={<EuropeInventoryPage />}></Route>
          {/*
          <Route path='/aminventory' element={<AmericaInventoryPage />}></Route>
          <Route path='/asinventory' element={<AsiaInventoryPage />}></Route>
          <Route path='/aoventory' element={<AfricaOceaniaInventoryPage />}></Route>
          */}
        </Routes>
      </main>
      <footer>
        <p>© 2024 For World Travel</p>
      </footer>
    </div>
  );
}

export default App;
