import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const MainLayout = () => {
  const location = useLocation()

  return (
    <>
        <Navbar />
        <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="page">
            <main className='w-full h-auto'>
                <Outlet />
            </main>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
    </>
  )
}

export default MainLayout