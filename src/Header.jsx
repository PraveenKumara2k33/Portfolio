import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu icon
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-cyan-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="../img/logo1.png" alt="Logo" className="w-12 h-auto rounded-full" />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" smooth className="navbtn text-black">Home</Link>
          <Link to="/#about" smooth className="navbtn text-black">About</Link>
          <Link to="/#qualification" smooth className="navbtn text-black">Qualification</Link>
          <Link to="/#skills" smooth className="navbtn text-black">Skills</Link>
          <Link to="/#projects" smooth className="navbtn text-black">Projects</Link>
          <Link to="/#publication" smooth className="navbtn text-black">Publication</Link>
          <Link to="/#footer" smooth className="navbtn text-black">Footer</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={28}  /> : <FaBars size={28} className='text-black' />}
          </button>
        </div>

        {/* Mobile Offcanvas Navbar */}
        {isOpen && (
          <nav className="offcanvas-menu lg:hidden fixed top-0 right-0 w-2/4 h-full bg-cyan-50 p-6 shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="HeaderHeading text-black text-3xl">Portfolio</h2>
              <button onClick={toggleMenu}>
                <FaTimes size={28} className='font-thin text-red-500' />
              </button>
            </div>
            {/* Stacked Links */}
            <div className="space-y-6 flex flex-col items-start text-start">
              <Link to="/" smooth className="navbtn text-black w-40" onClick={toggleMenu}>Home</Link>
              <Link to="/#about" smooth className="navbtn text-black w-40" onClick={toggleMenu}>About</Link>
              <Link to="/#qualification" smooth className="navbtn text-black w-40" onClick={toggleMenu}>Qualification</Link>
              <Link to="/#skills" smooth className="navbtn text-black w-40" onClick={toggleMenu}>Skills</Link>
              <Link to="/#projects" smooth className="navbtn text-black w-40" onClick={toggleMenu}>Projects</Link>
              <Link to="/#publication" smooth className="navbtn text-black w-40" onClick={toggleMenu}>Publication</Link>
              <Link to="/#footer" smooth className="navbtn text-black w-40" onClick={toggleMenu}>Footer</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
