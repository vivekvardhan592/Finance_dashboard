// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 ml-72 min-w-0 overflow-hidden">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden w-full">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;