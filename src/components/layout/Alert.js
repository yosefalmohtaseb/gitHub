import React, { useContext } from "react";
import AlertContext from "../../context/alert/alerContext";

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const {alert} = alertContext;
  return (
    alert !== null && (
      <div className={`alert alret-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
