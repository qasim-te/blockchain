import React, {useContext,useState} from 'react';
import AppContext from "../hooks/CreateContext";
import {Alert} from "react-bootstrap";
import {useQuery} from "react-query";
import httpLink from "../http/HttpLink";

function Main(props) {
    const obj = useContext(AppContext);
    const [show, setShow] = useState(true);
    const blc = Number(obj.walletBalance).toFixed(3);
    // const adrs = Number(obj.walletAddress).toFixed(2)+"...";
    const address = obj.walletAddress.substring(0, 9) + '...';
    const netWorkId = obj.networkId;
    //----------------------------------------------------------------------
    // const addressTest = "0x73800138757773d17f9fb8ede073d6807d4495c8";
    // const netWorkIdTest = 97;
    // const objInfo = {
    //     addressTest:addressTest,
    //     netWorkIdTest:netWorkIdTest
    // }
    //------------ useQuery For fetch data form data base ------------------
    // const getData = ()=>{
    //     if (addressTest){
    //         console.log("User is connected");
    //         return httpLink.get('/getUserData/address/'+{addressTest}+'/netId/'+{netWorkIdTest}).then((res)=>{
    //             console.log("we are in main page ", res.data);
    //         });
    //     }else {
    //         console.log("User is disconnected Please connect with Crypto Wallet");
    //     }
        // return axios.get('http://127.0.0.1:8000/api/getUserData');
    // }
    //
    // const {data,isLoading,isError,error} = useQuery(['userGet',addressTest,netWorkIdTest],getData,{});
    // if (isLoading){
    //     return <h1>Loading.....</h1>
    // }
    // if (isError){
    //     console.log(error);
    //     return <h2>{error.message}</h2>
    // }
    // // console.log("in main page data ",data)

    // const {data,isLoading,isError,error} = useQuery([],)

    return (
        <>
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-sm-4 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h5>Block Number</h5>
                                <div className="row">
                                    <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                                            <h2 className="mb-0">{obj.walletBlockNumber ? obj.walletBlockNumber :
                                                show ?
                                            <Alert variant="danger">
                                                <p>sorry....Please check your code</p>
                                            </Alert>:""
                                            }</h2>
                                            <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                        </div>
                                        <h6 className="text-muted font-weight-normal">11.38% Since last
                                            month</h6>
                                    </div>
                                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                        <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h5>Wallet Address</h5>
                                <div className="row">
                                    <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                                            <h2 className="mb-0">{obj.walletAddress ? address :
                                                show ?
                                                    <Alert variant="danger">
                                                        <p>sorry....Please check your code</p>
                                                    </Alert>:""
                                            }</h2>
                                            <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                                        </div>
                                        <h6 className="text-muted font-weight-normal"> 9.61% Since last
                                            month</h6>
                                    </div>
                                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                        <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h5>Balance </h5>
                                <div className="row">
                                    <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                                            <h2 className="mb-0">{obj.walletBalance ? blc :
                                                show ?
                                                    <Alert variant="danger">
                                                        <p>sorry....Please check your code</p>
                                                    </Alert>:""
                                            }</h2>
                                            <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                                        </div>
                                        <h6 className="text-muted font-weight-normal">2.27% Since last
                                            month</h6>
                                    </div>
                                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                        <i className="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h5>Network</h5>
                                            <p className="text-success ml-2 mb-0 font-weight-medium"></p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-md ">
                                            {/*<span className="mdi mdi-arrow-top-right icon-item"></span>*/}
                                            <iconify-icon icon="eos-icons:blockchain" style={{"color": "green"}}></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                                <h2 >{obj.network ? obj.network :
                                    show ?
                                        <Alert variant="danger">
                                            <p>sorry....Please check your code</p>
                                        </Alert>:""
                                }</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h5>Network Id</h5>
                                            {/*<p className="text-success ml-2 mb-0 font-weight-medium">+11%</p>*/}
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-success">
                                            <span className="mdi mdi-arrow-top-right icon-item"></span>
                                        </div>
                                    </div>
                                </div>
                                <h2>{netWorkId ? netWorkId :
                                    show ?
                                        <Alert variant="danger">
                                            <p>sorry....Please check your code</p>
                                        </Alert>:""
                                }</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h3 className="mb-0">$12.34</h3>
                                            <p className="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-danger">
                                            <span className="mdi mdi-arrow-bottom-left icon-item"></span>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-muted font-weight-normal">Daily Income</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h3 className="mb-0">$31.53</h3>
                                            <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-success ">
                                            <span className="mdi mdi-arrow-top-right icon-item"></span>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-muted font-weight-normal">Expense current</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Visitors by Countries</h4>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="flag-icon flag-icon-us"></i>
                                                    </td>
                                                    <td>USA</td>
                                                    <td className="text-right"> 1500</td>
                                                    <td className="text-right font-weight-medium"> 56.35%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="flag-icon flag-icon-de"></i>
                                                    </td>
                                                    <td>Germany</td>
                                                    <td className="text-right"> 800</td>
                                                    <td className="text-right font-weight-medium"> 33.25%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="flag-icon flag-icon-au"></i>
                                                    </td>
                                                    <td>Australia</td>
                                                    <td className="text-right"> 760</td>
                                                    <td className="text-right font-weight-medium"> 15.45%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="flag-icon flag-icon-gb"></i>
                                                    </td>
                                                    <td>United Kingdom</td>
                                                    <td className="text-right"> 450</td>
                                                    <td className="text-right font-weight-medium"> 25.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="flag-icon flag-icon-ro"></i>
                                                    </td>
                                                    <td>Romania</td>
                                                    <td className="text-right"> 620</td>
                                                    <td className="text-right font-weight-medium"> 10.25%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="flag-icon flag-icon-br"></i>
                                                    </td>
                                                    <td>Brasil</td>
                                                    <td className="text-right"> 230</td>
                                                    <td className="text-right font-weight-medium"> 75.00%</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div id="audience-map" className="vector-map"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;