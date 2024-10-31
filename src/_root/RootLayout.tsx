import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../components"
import { IoIosArrowUp } from "react-icons/io"
import { useEffect, useState } from "react"
import { useUserContext } from "../context/AuthContext"

const RootLayout = () => {
  const { isAuthenticated } = useUserContext()
  const [showArrowUp, setShowArrowUp] = useState<boolean>(false)
  const [navHeight, setNavHeight] = useState(0)

  const handleClickArrowUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowArrowUp(false)
  }

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 500) {
        setShowArrowUp(true)
      } else {
        setShowArrowUp(false)
      }
    }
    window.addEventListener('scroll', handleScrollY)
    return () => {
      window.removeEventListener('scroll', handleScrollY)
    }
  }, [])


  return (
    <main className="relative">
      <button
        onClick={handleClickArrowUp}
        className={`${showArrowUp ? '-translate-y-[40px]' : 'translate-y-[300px]'} transition-transform fixed z-[999] bg-primary p-8 rounded-full text-20 sm:right-40 right-20 sm:bottom-[80px] bottom-[40px]`}>
        <IoIosArrowUp />
      </button>
      {isAuthenticated && (
        <NavBar setNavHeight={setNavHeight} />
      )}
      <section style={{ paddingTop: `${navHeight}px` }}>
        <Outlet />
      </section>
      {isAuthenticated && (
        <Footer />
      )}
    </main>
  )
}

export default RootLayout