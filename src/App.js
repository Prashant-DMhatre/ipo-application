import React from 'react';
import AppRoutes from './setup/routes-manager/AppRoutes';

export default function App() {
  return (
    <>
      <div className="bg-slate-100 w-full min-h-screen p-10">
        <AppRoutes />
      </div>
    </>
  );
}