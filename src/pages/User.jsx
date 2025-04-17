import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function User() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default User;
