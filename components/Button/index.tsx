import React from "react";
import PropTypes from "prop-types";

const CustomButton = (props: any) => {
  const { disabled, version, txtColor, clickFunction, children } = props;
  return (
    <button
      onClick={clickFunction}
      className={`inline-flex sm:ml-3 items-start justify-start px-6 py-3 ${version} hover:bg-indigo-600 focus:outline-none rounded`}
      disabled={disabled}
    >
      <p className={`text-sm font-medium leading-none ${txtColor}`}>
        {children}
      </p>
    </button>
  );
};

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  version: PropTypes.string,
  clickFunction: PropTypes.func,
  children: PropTypes.node,
  txtColor: PropTypes.string,
};

CustomButton.defaultProps = {
  disabled: false,
  version: "bg-primaryBlue",
  txtColor: "text-white",
};

export default CustomButton;
