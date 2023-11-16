import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-white" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-white" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link text-white" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-white" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}