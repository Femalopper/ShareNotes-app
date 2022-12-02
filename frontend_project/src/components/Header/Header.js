import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Header.css';

const Header = (props) => {
  const catries = props.data.nav;
  const cat = catries.map((item, index) => (
    <li key={index}>
      <NavLink to={item.link} className="navlink">
        {item.text}
      </NavLink>
    </li>
  ));
  return (
    <>
      <div className="header">
        <p className="logo">ShareNotes</p>
        <nav>
          <ul>{cat}</ul>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
