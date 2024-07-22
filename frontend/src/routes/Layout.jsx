import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Topbar } from "../components";
import { MyContext } from "../context/MyContext";

const Layout = () => {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(MyContext);

  // Check if the user is logged in, if not, redirect to the sign-in page
  useEffect(() => {
    console.log(loggedUser);
    if (!loggedUser) {
      // setLoggedUser(""); // You might uncomment this line if needed to set the logged user to an empty state
      navigate("/signin");
    }
  }, []);

  return (
    <>
      {/* Main layout container with sidebar, topbar, secondary column, and bottom bar */}
      <div className="flex h-full bg-seconday-shade">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Topbar */}
          <Topbar />
          {/* Main content area */}
          <div className="flex flex-1 items-stretch overflow-hidden">
            {/* Render nested routes within the main content area */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
