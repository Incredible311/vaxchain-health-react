/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
  innerPadding?: string;
};

const CustomWidget1: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`custom-card-header align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <div className="card-icon-div">
          <img src="/media/icons/duotone/General/bucket.svg" />
        </div>

        <div className="arrow-icon-div">
          <img src="/media/icons/duotone/General/arrow-up.svg" />
        </div>

        <span className="percent-text">+16.24%</span>
      </div>
      {/* end::Header */}

      <h4 className="card-content-title">TOTAL SALES</h4>
      <h1 className="card-content-number">$ 23,090.00</h1>
      <p className="card-sub-text">Compared to ($19,340.00 last year)</p>
    </div>
  );
};

export { CustomWidget1 };


