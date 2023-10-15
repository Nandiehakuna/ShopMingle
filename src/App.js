import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/layout/MainLayout';
import IndexPage from './pages/indexPage/IndexPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import PasswordResetPage from './pages/passwordResetPage/PasswordResetPage';
import SaleWithUsPage from './pages/saleWithUsPage/SaleWithUsPage';
import DashBoardPage from './pages/dashboardPage/DashBoardPage';
import DashBoardIndexPage from './pages/DashNoardIndexPage/DashBoardIndexPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path='/reset-password' element={<PasswordResetPage/>}/>
        <Route path='/register-business' element={<SaleWithUsPage/>}/>
        <Route path='/dashboard' element={<DashBoardPage/>}>
          <Route index element={<DashBoardIndexPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
