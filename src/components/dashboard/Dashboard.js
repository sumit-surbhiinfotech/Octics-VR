import React from 'react';
import { NavLink } from 'react-router-dom';
import { Chart } from "react-google-charts";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

export const data = [
   ["x", "", ""],
   [0, 0, 0],
   [1, 10, 5],
   [2, 23, 15],
   [3, 17, 9],
   [4, 18, 10],
   [5, 9, 5],
   [6, 11, 3],
   [7, 27, 19],
];

export const options = {
   hAxis: {
      title: "Date",
      gridlines: {
         color: 'transparent'
      }
   },
   // vAxis: {
   //    title: "Popularity",

   // },
   series: {
      1: { curveType: "function" },
   },
};
const Dashboard = () => {

   return (
      <>
         <div id="main">

            <div className="row">

               <div className="col s12">

                  <div className="container">

                     <div className="section">
                        <div id="card-stats" className="pt-0">
                           <div className='row'>
                              <div className='col s12 m6 xl8'>

                              </div>
                              <div className='col s12 m6 l6 xl4'>
                                 <div className='filter-date'>
                                    Date Filter &nbsp;
                                    {/* <Space direction="vertical" size={12}> */}
                                    <RangePicker />
                                    {/* <div className='new-date-piker'>
                                       <div className='iner-new-date'>
                                          <span>Form </span>&nbsp;&nbsp;  <input type="date"></input>
                                       </div>
                                       <div className='iner-new-date'>
                                          &nbsp;&nbsp; <span>To</span>  &nbsp;&nbsp; <input type="date"></input>
                                       </div>
                                    </div> */}
                                    {/* </Space> */}
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col s12 m6 l6 xl2-new">
                                 <NavLink to="/order-listing">
                                    <div className="card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text animate fadeLeft">
                                       <div className="padding-4">
                                          <div className="row">
                                             <div className="col s7 m7">
                                                <i className="material-icons background-round mt-5">add_shopping_cart</i>
                                                <p>Total Orders</p>
                                             </div>
                                             <div className="col s5 m5 right-align">
                                                <h5 className="mb-0 white-text">690</h5>
                                                <p className="no-margin">New</p>
                                                <p>6,00,00</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="col s12 m6 l6 xl2-new">
                                 <NavLink to="/customer-listing">
                                    <div className="card gradient-45deg-red-pink gradient-shadow min-height-100 white-text animate fadeLeft">
                                       <div className="padding-4">
                                          <div className="row">
                                             <div className="col s7 m7">
                                                <i className="material-icons background-round mt-5">perm_identity</i>
                                                <p>Total Customer</p>
                                             </div>
                                             <div className="col s5 m5 right-align">
                                                <h5 className="mb-0 white-text">1885</h5>
                                                <p className="no-margin">New</p>
                                                <p>1,12,900</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="col s12 m6 l6 xl2-new">
                                 <NavLink to="/list-of-return-order">
                                    <div className="card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text animate fadeRight">
                                       <div className="padding-4">
                                          <div className="row">
                                             <div className="col s7 m7">
                                                <i className="material-icons background-round mt-5">replay</i>
                                                <p>Total Return Order</p>
                                             </div>
                                             <div className="col s5 m5 right-align">
                                                <h5 className="mb-0 white-text">80%</h5>
                                                <p className="no-margin">Growth</p>
                                                <p>3,42,230</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="col s12 m6 l6 xl2-new">
                                 <NavLink to="/pending-order-list">
                                    <div className="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight">
                                       <div className="padding-4">
                                          <div className="row">
                                             <div className="col s7 m7">
                                                <i className="material-icons background-round mt-5">av_timer</i>
                                                <p>Total Padding Order</p>
                                             </div>
                                             <div className="col s5 m5 right-align">
                                                <h5 className="mb-0 white-text">$890</h5>
                                                <p className="no-margin">Today</p>
                                                <p>$25,000</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="col s12 m6 l6 xl2-new">
                                 <NavLink to="/order-fulfill-and-tracking">
                                    <div className="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight">
                                       <div className="padding-4">
                                          <div className="row">
                                             <div className="col s7 m7">
                                                <i className="material-icons background-round mt-5">attach_money</i>
                                                <p>Sales</p>
                                             </div>
                                             <div className="col s5 m5 right-align">
                                                <h5 className="mb-0 white-text">$890</h5>
                                                <p className="no-margin">Today</p>
                                                <p>$25,000</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                        <div id="sales-chart">
                           <div className="row">
                              <div className="col s12 l12">
                                 <div id="revenue-chart" className="card animate fadeUp">
                                    <div className="card-content">
                                       <h4 className="header mt-0">
                                          Total Orders
                                       </h4>
                                       <div className="row">
                                          <div className="col s12">
                                             <div className="yearly-revenue-chart">
                                                <Chart
                                                   chartType="LineChart"
                                                   width="100%"
                                                   height="400px"
                                                   data={data}
                                                   options={options}
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col s12  l12">
                                 <div id="revenue-chart" className="card animate fadeUp">
                                    <div className="card-content">
                                       <h4 className="header mt-0">
                                          Total Customer
                                       </h4>
                                       <div className="row">
                                          <div className="col s12">
                                             <div className="yearly-revenue-chart">
                                                <Chart
                                                   chartType="LineChart"
                                                   width="100%"
                                                   height="400px"
                                                   data={data}
                                                   options={options}
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col s12  l12">
                                 <div id="revenue-chart" className="card animate fadeUp">
                                    <div className="card-content">
                                       <h4 className="header mt-0">
                                          Total Return Order
                                       </h4>
                                       <div className="row">
                                          <div className="col s12">
                                             <div className="yearly-revenue-chart">
                                                <Chart
                                                   chartType="LineChart"
                                                   width="100%"
                                                   height="400px"
                                                   data={data}
                                                   options={options}
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col s12  l12">
                                 <div id="revenue-chart" className="card animate fadeUp">
                                    <div className="card-content">
                                       <h4 className="header mt-0">
                                          Total Padding Order
                                       </h4>
                                       <div className="row">
                                          <div className="col s12">
                                             <div className="yearly-revenue-chart">
                                                <Chart
                                                   chartType="LineChart"
                                                   width="100%"
                                                   height="400px"
                                                   data={data}
                                                   options={options}
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col s12  l12">
                                 <div id="revenue-chart" className="card animate fadeUp">
                                    <div className="card-content">
                                       <h4 className="header mt-0">
                                          Sales
                                       </h4>
                                       <div className="row">
                                          <div className="col s12">
                                             <div className="yearly-revenue-chart">
                                                <Chart
                                                   chartType="LineChart"
                                                   width="100%"
                                                   height="400px"
                                                   data={data}
                                                   options={options}
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col s12  l4 mb-5">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="content-overlay"></div>
               </div>
            </div>
         </div>
         <script src="../../vendors/chartjs/chart.min.js"></script>
      </>
   )
}
export default Dashboard;