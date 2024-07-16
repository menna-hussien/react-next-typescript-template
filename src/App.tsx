import { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';

import { changeLanguage } from './i18n/changeLanguage';

//import { RootState } from './store';
import { getItem } from './utils/localStorage';

import Spinner from './core/Spinner';

const Users = lazy(() => import('./pages/Users/Users'));

function App() {
  /*  */
  const [isloading /*  setIsLoading */] = useState(false);
  //const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    void changeLanguage(getItem('code') ?? 'ar');
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner color="#000000" loading={isloading} />}>
              {/* <LandingPage /> */}
              <h1>Landing Page</h1>
            </Suspense>
          }
        />
        <Route
          path="/Users"
          element={
            <Suspense fallback={<Spinner color="#000000" loading={isloading} />}>
              <Users />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
