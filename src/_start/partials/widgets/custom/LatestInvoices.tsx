/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

type Props = {
  className: string;
  innerPadding?: string;
};

const LatestInvoices: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`custom-card-header justify-between align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <p className="fs-2">Latest Invoices</p>
        <div className="d-flex">
          <button className="btn report-btn">Generate Report</button>
          <img src="/media/icons/duotone/General/3dotted.svg" style={{ marginTop: '-25px' }} />
        </div>
        
      </div>
      {/* end::Header */}
      <div style={{overflow: 'auto'}}>
      <table className="table gy-5">
        <thead>
          <tr className="fw-bolder fs-6" style={{color: '#809FB8'}}>
            <th>Invoice No</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Email</th>
            <th>Product ID</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className="text-light">
          <tr>
            <td>#2342</td>
            <td>Jonathan Downing</td>
            <td>11/10/2020</td>
            <td style={{color: '#1AD598'}}>$123.00</td>
            <td>email1434@domain.com</td>
            <td>003145</td>
            <td><img src="/media/icons/duotone/General/paid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>#2343</td>
            <td>Jason William</td>
            <td>12/2/2020</td>
            <td style={{color: '#1AD598'}}>$233.00</td>
            <td>json2324@domain.com</td>
            <td>034145</td>
            <td><img src="/media/icons/duotone/General/paid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>#2344</td>
            <td>Jaco</td>
            <td>1/11/2020</td>
            <td style={{color: '#1AD598'}}>$34.00</td>
            <td>email1434@domain.com</td>
            <td>003145</td>
            <td><img src="/media/icons/duotone/General/paid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>#2342</td>
            <td>Jonathan Downing</td>
            <td>11/10/2020</td>
            <td style={{color: '#1AD598'}}>$123.00</td>
            <td>email1434@domain.com</td>
            <td>003145</td>
            <td><img src="/media/icons/duotone/General/paid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>#2342</td>
            <td>Jonathan Downing</td>
            <td>11/10/2020</td>
            <td style={{color: '#EA3A3D'}}>$123.00</td>
            <td>email1434@domain.com</td>
            <td>003145</td>
            <td><img src="/media/icons/duotone/General/unpaid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>#2342</td>
            <td>Jonathan Downing</td>
            <td>11/10/2020</td>
            <td style={{color: '#1AD598'}}>$123.00</td>
            <td>email1434@domain.com</td>
            <td>003145</td>
            <td><img src="/media/icons/duotone/General/paid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>#2342</td>
            <td>Jonathan Downing</td>
            <td>11/10/2020</td>
            <td style={{color: '#1AD598'}}>$123.00</td>
            <td>email1434@domain.com</td>
            <td>003145</td>
            <td><img src="/media/icons/duotone/General/paid.svg" /></td>
            <td>
              <select className='invoice-table-option'>
                <option>Details</option>
              </select>
            </td>
          </tr>

        </tbody>
      </table>
      </div>
    </div>
  );
};

export { LatestInvoices };


