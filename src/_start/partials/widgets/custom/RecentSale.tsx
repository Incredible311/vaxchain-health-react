/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

type Props = {
  className: string;
  innerPadding?: string;
};

const RecentSale: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`custom-card-header justify-between align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <p className="fs-2">Recent Sales</p>
        <img src="/media/icons/duotone/General/3dotted.svg" style={{ marginTop: '-25px' }} />
      </div>
      {/* end::Header */}

      <div className="recent-sale-list">
        
        <div className="recent-sale-item">
            <div className="round-box"></div>
            <div className="recent-sale-item-content">
              <p className="recent-sale-item-text">Henry Rashford <span style={{color: '#809FB8'}}>5 minutes ago</span></p>
              <p className="recent-sale-item-price">$129.00</p>
            </div>
        </div>

        <div className="recent-sale-item">
            <div className="round-box"></div>
            <div className="recent-sale-item-content">
              <p className="recent-sale-item-text">Jack <span style={{color: '#809FB8'}}>25 minutes ago</span></p>
              <p className="recent-sale-item-price">$39.00</p>
            </div>
        </div>

        <div className="recent-sale-item">
            <div className="round-box"></div>
            <div className="recent-sale-item-content">
              <p className="recent-sale-item-text">Json William <span style={{color: '#809FB8'}}>5 minutes ago</span></p>
              <p className="recent-sale-item-price">$459.00</p>
            </div>
        </div>

        <div className="recent-sale-item">
            <div className="round-box"></div>
            <div className="recent-sale-item-content">
              <p className="recent-sale-item-text">Rashford <span style={{color: '#809FB8'}}>5 minutes ago</span></p>
              <p className="recent-sale-item-price">$129.00</p>
            </div>
        </div>

        <div className="recent-sale-item">
            <div className="round-box"></div>
            <div className="recent-sale-item-content">
              <p className="recent-sale-item-text">Chris <span style={{color: '#809FB8'}}>5 minutes ago</span></p>
              <p className="recent-sale-item-price">$129.00</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export { RecentSale };


