import { Route, Routes } from "react-router-dom"
import AuthLayout from "./_auth/AuthLayout"
import SignupForm from "./_auth/forms/SignupForm"
import SigninForm from "./_auth/forms/SigninForm"
import RootLayout from "./_root/RootLayout"
import Home from "./_root/pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element={<SignupForm />} />
          <Route path='/sign-in' element={<SigninForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer theme="dark" />
    </main>
  )
}

export default App
