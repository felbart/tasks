import PropTypes from "prop-types";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";


const DefaultLayout = ({ children }) => {
  return (
    <>
        <Header />
        <Sidebar />
        <main>{children}</main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, // Valida que 'children' é um nó React e é obrigatório
};

export default DefaultLayout;