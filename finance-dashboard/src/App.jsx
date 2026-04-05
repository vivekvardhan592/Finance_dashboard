import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Dashboard from './pages/Dashboard';
import Allocations from './pages/Allocations';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/allocations" element={<Allocations />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;