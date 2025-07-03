import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

function LayoutPage() {
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