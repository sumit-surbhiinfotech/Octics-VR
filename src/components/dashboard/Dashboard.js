import React from 'react';

const Dashboard = () => {
    
    return(
        <>
        <div id="main">
   <div className="row">
      <div className="col s12">
         <div className="container">
            <div className="section">
               <div id="card-stats" className="pt-0">
                  <div className="row">
                     <div className="col s12 m6 l6 xl3">
                        <div className="card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text animate fadeLeft">
                           <div className="padding-4">
                              <div className="row">
                                 <div className="col s7 m7">
                                    <i className="material-icons background-round mt-5">add_shopping_cart</i>
                                    <p>Orders</p>
                                 </div>
                                 <div className="col s5 m5 right-align">
                                    <h5 className="mb-0 white-text">690</h5>
                                    <p className="no-margin">New</p>
                                    <p>6,00,00</p>
                                 </div>
                              </div> 
                           </div>
                        </div>
                     </div>
                     <div className="col s12 m6 l6 xl3">
                        <div className="card gradient-45deg-red-pink gradient-shadow min-height-100 white-text animate fadeLeft">
                           <div className="padding-4">
                              <div className="row">
                                 <div className="col s7 m7">
                                    <i className="material-icons background-round mt-5">perm_identity</i>
                                    <p>Clients</p>
                                 </div>
                                 <div className="col s5 m5 right-align">
                                    <h5 className="mb-0 white-text">1885</h5>
                                    <p className="no-margin">New</p>
                                    <p>1,12,900</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col s12 m6 l6 xl3">
                        <div className="card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text animate fadeRight">
                           <div className="padding-4">
                              <div className="row">
                                 <div className="col s7 m7">
                                    <i className="material-icons background-round mt-5">timeline</i>
                                    <p>Sales</p>
                                 </div>
                                 <div className="col s5 m5 right-align">
                                    <h5 className="mb-0 white-text">80%</h5>
                                    <p className="no-margin">Growth</p>
                                    <p>3,42,230</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col s12 m6 l6 xl3">
                        <div className="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight">
                           <div className="padding-4">
                              <div className="row">
                                 <div className="col s7 m7">
                                    <i className="material-icons background-round mt-5">attach_money</i>
                                    <p>Profit</p>
                                 </div>
                                 <div className="col s5 m5 right-align">
                                    <h5 className="mb-0 white-text">$890</h5>
                                    <p className="no-margin">Today</p>
                                    <p>$25,000</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="sales-chart">
                  <div className="row">
                     <div className="col s12 m8 l12">
                        <div id="revenue-chart" className="card animate fadeUp">
                           <div className="card-content">
                              <h4 className="header mt-0">
                                 Orders
                                 <a
                                    className="waves-effect waves-light btn gradient-45deg-purple-deep-orange gradient-shadow right">Details</a>
                              </h4>
                              <div className="row">
                                 <div className="col s12">
                                    <div className="yearly-revenue-chart">
                                       <canvas id="thisYearRevenue" className="firstShadow" height="350"></canvas>
                                       <canvas id="lastYearRevenue" height="350"></canvas>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col s12 m4 l4">
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="content-overlay"></div>
      </div>
   </div>
</div>
        </>
    )
}
export default Dashboard;