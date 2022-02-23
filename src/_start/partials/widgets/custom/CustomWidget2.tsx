/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
  innerPadding?: string;
};

const CustomWidget2: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`custom-card-header align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <div className="card-icon-div">
          <img src="/media/icons/duotone/General/card.svg" />
        </div>

        <div className="arrow-down-icon-div">
          <img src="/media/icons/duotone/General/arrow-down.svg" />
        </div>

        <span className="percent-text red-text">-10.82%</span>
      </div>
      {/* end::Header */}

      <h4 className="card-content-title">PURCHASES</h4>
      <h1 className="card-content-number">$ 14,850.00</h1>
      <p className="card-sub-text">Compared to ($17,980.00 last year)</p>
    </div>
  );
};

export { CustomWidget2 };


