import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const LayoutPage = () => {
  return (
    <>
      <Heading
        title="Welcome"
      />

      <Outlet />
    </>
  )
}

export default LayoutPage;