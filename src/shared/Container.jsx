import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="px-4 mt-14 md:mt-28">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
