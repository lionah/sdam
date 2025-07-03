import { Outlet, NavLink } from "react-router-dom";

function LayoutPage() {
  return (
    <>
      <header className="LayoutPage-container">
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