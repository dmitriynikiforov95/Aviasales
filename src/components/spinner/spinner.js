import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="lds-css wrapper">
        <div className="lds-magnify">
            <div><div>
                <div></div>
                <div></div>
            </div></div>
        </div>
    </div>
);
;
};

export default Spinner;
