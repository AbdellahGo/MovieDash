import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="w-full md:flex">

      <section >
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout