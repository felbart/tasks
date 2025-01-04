import PropTypes from "prop-types";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;