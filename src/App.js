import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/layout/MainLayout';
import IndexPage from './pages/indexPage/IndexPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import PasswordResetPage from './pages/passwordResetPage/PasswordResetPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path='/reset-password' element={<PasswordResetPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
