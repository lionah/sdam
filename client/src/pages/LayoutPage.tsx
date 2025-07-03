import { NavLink, Outlet } from "react-router-dom";
import './LayoutPage.css';

function LayoutPage() {
  return (
    <>
      <header>
        <h1>SDAM</h1>

        <nav>
          <ul>
            <li><NavLink to="/assets">Assets</NavLink></li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default LayoutPage;