/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG } from "../../../../_start/helpers";
import {
  CustomWidget1,
  CustomWidget2,
  CustomWidget3,
  CustomWidget4,
  SaleAnalytics,
  RecentSale,
  LatestInvoices
} from "../../../../_start/partials/widgets";

export const DarkDashboardPage: React.FC = () => {

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-3">
          <CustomWidget1 className="card-stretch custom-card mb-5  mb-xxl-8" />
        </div>

        <div className="col-xl-3">
          <CustomWidget2 className="card-stretch custom-card mb-5  mb-xxl-8" />
        </div>

        <div className="col-xl-3">
          <CustomWidget3 className="card-stretch custom-card mb-5  mb-xxl-8" />
        </div>

        <div className="col-xl-3">
          <CustomWidget4 className="card-stretch custom-percent-card mb-5  mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-9">
          <SaleAnalytics className="card-stretch text-light custom-card mb-5  mb-xxl-8" />
        </div>

        <div className="col-xl-3">
          <RecentSale className="card-stretch custom-card text-light mb-5  mb-xxl-8" />
        </div>
      </div>

      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-12">
          <LatestInvoices className="card-stretch text-light custom-card mb-5  mb-xxl-8" />
        </div>
      </div>
    </>
  );
};
