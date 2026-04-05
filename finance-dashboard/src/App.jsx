// src/App.jsx
import { useEffect } from 'react';
import './App.css';
import './index.css';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="dashboard-container">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;