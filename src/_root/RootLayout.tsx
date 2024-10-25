import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../components"

const RootLayout = () => {

  return (
    <main >
      <NavBar/>
      <section>
        <Outlet />
      </section>
      <Footer/>
    </main>
  )
}

export default RootLayout