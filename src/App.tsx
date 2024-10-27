import { Route, Routes } from "react-router-dom"
import AuthLayout from "./_auth/AuthLayout"
import SignupForm from "./_auth/forms/SignupForm"
import SigninForm from "./_auth/forms/SigninForm"
import RootLayout from "./_root/RootLayout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AboutUs, ContactUs, FAQ, Home, MovieOrSerieDetails, Movies, Pricing, PrivacyPolicy, Search, Series, TermsOfUse } from "./_root/pages"

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
          <Route index element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/tv-shows"  element={<Series/>} />
          <Route path="/movie-details/:id"  element={<MovieOrSerieDetails type='movie' />} />
          <Route path="/serie-details/:id"  element={<MovieOrSerieDetails type='serie'/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      <ToastContainer theme="dark" />
    </main>
  )
}

export default App
