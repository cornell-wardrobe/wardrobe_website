import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landingpage from './screens/landingpage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
