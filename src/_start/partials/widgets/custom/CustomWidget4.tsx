/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Chart from "react-apexcharts";

type Props = {
  className: string;
  innerPadding?: string;
};

const chartOptions = {
  series: [70],
  
  options: {
    chart: {
      foreColor: '#373d3f'
    },
    colors: ['#ffffff'],
    fill: {
      colors: ['#4C48EC']
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "40px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold"
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    labels: ['Marketing'],
  },
}

const CustomWidget4: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`custom-card-header justify-between align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <p>Marketing goal for the past year</p>
        <img src="/media/icons/duotone/General/3dotted.svg" style={{ marginTop: '-25px' }} />
      </div>
      {/* end::Header */}

      <div className="card-content-flex">
        <div>
          <h1 className="card-content-number">$6,525.00</h1>
          <p className="card-sub-text text-light">Compared to ($4,310.00 last year)</p>
        </div>
        <div className="percent-chart-div">
          <Chart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={200} />
        </div>
      </div>
    </div>
  );
};

export { CustomWidget4 };


