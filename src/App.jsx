import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Survey from './pages/Survey';
import Login from './pages/Login';
import Layout from './layouts/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path="" element={<Survey />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
