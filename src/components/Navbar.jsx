import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="relative top-0 left-0 right-0 bg-black shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center justify-center flex-1 space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-green-500' : 'bg-white'} text-black font-bold`}
              aria-label="Navigate to Home"
              tabIndex="0">
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-green-500' : 'bg-white'} text-black font-bold`}
              aria-label="Navigate to About"
              tabIndex="0">
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-green-500' : 'bg-white'} text-black font-bold`}
              aria-label="Navigate to Contact"
              tabIndex="0">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;