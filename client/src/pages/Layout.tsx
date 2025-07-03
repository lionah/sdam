import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Layout = () => {
  return (
    <>
      <Heading
        title="Welcome"
      />

      <Outlet />
    </>
  )
}

export default Layout;