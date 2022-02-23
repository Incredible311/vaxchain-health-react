/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {
  className: string;
  innerPadding?: string;
};

const options: Highcharts.Options = {
  title: {
    text: ''
  },
  chart: {
    backgroundColor: '#384455',
    type: 'line'
  },
  xAxis: {
    visible: true,
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    lineColor: '#809FB8',
    lineWidth: 1
  },
  yAxis: {
    visible: true
  },

  tooltip: {
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 10,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: [{
    name: 'Marketing Sales',
    marker: {
      radius: 4
    },
    type: 'line',
    color: '#0090FF',
    data: [0.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 23.3, 18.3, 16.7, 13.0, 12.6]

  }, {
    name: 'Online Sales',
    type: 'line',
    color: '#DB5AEE',
    data: [ 0.0, 18.3, 13.9, 9.6, 14.2, 10.3, 6.6, 4.8, 14.5, 18.2, 21.5, 25.2]
  }]
}

const SaleAnalytics: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className={`custom-card-header justify-between align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <p className="fs-2">Sale Analytics</p>

      </div>
      {/* end::Header */}
      <div className="sale-chart-div">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
      
    </div>
  );
};

export { SaleAnalytics };


