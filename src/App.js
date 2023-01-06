import './App.css';
import Admin from './components/Admin';
import User from './components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>

<Router>
      <Header />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
