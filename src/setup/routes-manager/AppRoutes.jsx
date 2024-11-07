import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


const IPO = React.lazy(() => import('../../pages/ipo'))
const IPODetails = React.lazy(() => import('../../pages/ipo/ipo-details'))

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/ipo"
                element={
                    <Suspense fallback={<div className="text-center pt-5">Loading...</div>}>
                        <IPO />
                    </Suspense>
                }
            />
            <Route
                path="/ipo/:id"
                element={
                    <Suspense fallback={<div className="text-center pt-5">Loading...</div>}>
                        <IPODetails />
                    </Suspense>
                }
            />
            <Route path="/" element={<Navigate replace to="/ipo" />} />
            <Route path='*' element={<Navigate replace to="/ipo" />} />
        </Routes>
    )
}