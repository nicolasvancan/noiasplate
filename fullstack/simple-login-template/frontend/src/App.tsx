import Login from './pages/Login';
import {
  Routes,
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'landing'} element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
