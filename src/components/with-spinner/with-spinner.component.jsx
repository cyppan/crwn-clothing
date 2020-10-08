import React from "react";

import "./with-spinner.styles.scss";

const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrapperComponent {...otherProps} />
  )
}

export default WithSpinner;