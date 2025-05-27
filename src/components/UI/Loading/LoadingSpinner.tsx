import React from "react";
import classes from "./LoadingSpinner.module.css"; // CSS styling

const LoadingSpinner: React.FC = () => {
  return (
    <div className={`${classes.spinner_container} `}>
      <div className={`${classes.spinner} `} />
    </div>
  );
};

export default LoadingSpinner;