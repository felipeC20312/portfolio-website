import { Route, Routes } from 'react-router-dom';
import HomePage from './views/home/HomePage';
import ErrorPage from './views/error/ErrorPage';

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
