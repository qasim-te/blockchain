import React, {useContext, useEffect, useState} from 'react';
import Web3 from "web3";
import {ethers} from "ethers";
import Web3Modal from "web3modal";
import WalletLink from "walletlink";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Alert from "react-bootstrap/Alert";
import AppContext from "../hooks/CreateContext";
import httpLink from "../http/HttpLink";
import axios from "axios";
import {useNavigate} from "react-router";
import {providerOptions} from "./ProviderOptions";
import {useMutation, useQuery} from "react-query";
// import {Alert} from "react-bootstrap";
// import * as net from "net";
//-------------------------------------------------------------------------------------

// const apiRequestAddBlockChainInfo=(data)=>{
//     console.log("you are in api arrow function")
//     // return axios.post('http://127.0.0.1:8000/api/saveUserData',data).then(function (response) {
//     return httpLink.post('/saveUserData',data).then(function (response) {
//         console.log("Api is ok ",response.data);
//     });
// }



//-------------------------------------------------------------------------------------
function Navbar(props) {
    //------------- use hooks --------------------
    const obj = useContext(AppContext);
    // const [userData,setUserData] = useState({});
    const navigate = useNavigate();
    //---------- function and validations --------------
    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        // disableInjectedProvider: true,
        providerOptions // required
    });
    const backUrl = ()=>{
        navigate(-1);
    }
    //----------- Api Request Add -------------

    // const postUserReq = async(data)=> {
    //     console.log("you are in api arrow function")
    //     console.log(data, 'data')
    //     return await axios.post('http://127.0.0.1:8000/api/saveUserData', data).then(function (response) {
    //         // return await httpLink.post('/saveUserData',data).then(function (response) {
    //         console.log("Api is ok " + response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    // }
    //
    //
    // const { mutate } = useMutation('only',async (data)=> {
    //     console.log("you are in api arrow function")
    //     console.log(data, 'data')
    //      return await axios.get('http://127.0.0.1:8000/api/saveUserData', data).then(function (response) {
    //         // return await httpLink.post('/saveUserData',data).then(function (response) {
    //         console.log("Api is ok " + response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    // });


    const {mutate} = useMutation("addBlockchainInfo", async(data)=>{
        console.log("you are in api arrow function")
        console.log(data,'data')

        return await httpLink.post('/saveUserData',data).then(function (response) {
        // return await httpLink.post('/saveUserData',data).then(function (response) {
            console.log("Api is ok ",response.data);
        }).catch(function (error) {
            console.log(error);
        }),{
        onSuccess:(data, variables, context)=>{
            console.log("your api request for add data into data base"+data.data);
            console.log(variables);
        }
    }})

    //----------Api Request Add End ----------
    //----------- Request Api function ---------
    // const apiRequest = (data)=>{
    //     const hitApi = (data)=>{
    //         return axios.post('http://127.0.0.1:8000/api/saveUserData',data)
    //         // return httpLink.post('/saveUserData',data)
    //             .then(function (response) {
    //                 // handle success
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 // handle error
    //                 console.log(error);
    //             })
    //             .then(function () {
    //                 console.log("your network Information save successfully");
    //             });
    //     }
    //     hitApi(data);
    // }

    // useEffect(() => {
    //     // const data = executeQuery()
    //     if (userData.userAccount){
    //         console.log(data)
    //     }
    //
    // }, [userData])

    //------------check network information wifi or mobile data------
    // const networkInformation = navigator.connection;
    // console.log(networkInformation);
    //---------------------------------------------------------------
    // const {data,isLoading,isError,error} = useQuery('userGet',()=>{
    //     if (userData){
    //         console.log("User is connected");
    //         return axios.get('http://127.0.0.1:8000/api/getUserData');
    //     }else {
    //         console.log("User is disconnected Please connect with Crypto Wallet");
    //     }
    //     // return axios.get('http://127.0.0.1:8000/api/getUserData');
    // })
    // if (isLoading){
    //     return <h1>Loading.....</h1>
    // }
    // if (isError){
    //     console.log(error);
    //     return <h2>{error.message}</h2>
    // }
    // console.log(data)
    //---------- connect Binance -----------------
    function binanceWallet(){

        const connection = async ()=>{
            const provider = await web3Modal.connectTo('binancechainwallet');
            console.log(provider);
            if (provider){
            const web3 = new ethers.providers.Web3Provider(provider);
            // const web3 = new Web3(provider);
            console.log(web3);
            }else {
                alert("Please add Binance extion in your");
            }
        }
        connection();

    }
    //--------- connect CoinBase ----------------
    function coinbaseWallet(){

        const connection = async ()=>{
            // const provider = await web3Modal.connectTo('coinbaseWallet');
            // const provider = await web3Modal.connectTo('walletLink');
            // const web3 = new ethers.providers.Web3Provider(window.ethereum);
            // const accounts = await web3.send('eth_requestAccounts',[]);
            // const web3 = new Web3(provider);
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts().then(console.log);

            web3.eth.getBalance('0x60176e34919f1724028944f18Be3b09c8023dCeb').then(console.log);

            // console.log(accounts[0]);
            // console.log(web3);
        }
        connection();

    }
    //-------- connect metamask ----------------
    function metamaskWallet(){
        const connection = async ()=>{
            if(window.ethereum) {
                const web3 = new ethers.providers.Web3Provider(window.ethereum);
                const accounts = await web3.send("eth_requestAccounts", []);
                const blockNumber = await web3.getBlockNumber();
                const balance = await web3.getBalance(accounts[0]);
                const formatted_balance = ethers.utils.formatEther(balance);
                const network = await web3.getNetwork();
                // setUserData({
                //    userAccount : accounts[0],
                //    blockNumber : blockNumber,
                //    balance : formatted_balance,
                //    network : network
                // });
                obj.setWalletAddress(accounts[0]);
                obj.setWalletBlockNumber(blockNumber);
                obj.setWalletBalance(formatted_balance);
                obj.setNetwork(network.name);
                obj.setNetworkId(network.chainId);
                // console.log(blockNumber);
                // console.log(accounts[0]);
                // console.log(formatted_balance);
                // console.log(network.chainId);
                // console.log(network.name);
                // const data={
                //     userNetworkAccount : accounts[0],
                //     userNetworkBlockNumber : blockNumber,
                //     userNetworkAccountBlc : formatted_balance,
                //     userNetworkName : network.name,
                //     userNetworkChainId : network.chainId
                // }
                // apiRequest(data);
                console.log("before mutate")
                mutate({
                    userNetworkAccount : accounts[0],
                    userNetworkBlockNumber : blockNumber,
                    userNetworkAccountBlc : formatted_balance,
                    userNetworkName : network.name,
                    userNetworkChainId : network.chainId
                })
                console.log("after mutate")
            }else {
                alert("please add Metamask extention in your app.");
            }
        }
        connection();
    }
    //-------- connect connectWallet -----------
    function connectWallet(){
        const connection = async ()=>{
            const provider = await web3Modal.connectTo('walletconnect');
            const web3 = new ethers.providers.Web3Provider(provider);
            // const web3 = new Web3(provider);
            console.log(web3);
        }
        connection();
    }
    //
    // function defaultWallet (){
    //     const conection = async ()=>{
    //         const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    //         // console.log(web3Provider);
    //         const accounts = await web3Provider.send("eth_requestAccounts", []);
    //         console.log(accounts[0]);
    //         const balance = await web3Provider.getBalance(accounts[0]);
    //         const blc =ethers.utils.formatUnits(balance)
    //         console.log(blc);
    //         // const signer = provider.getSigner();
    //         // console.log(signer);
    //     }
    //     conection();
    // }
    //
    // const disconnect = async () => {
    //     setUserData(null);
    //     window.location.reload();
    // };
    return (
        <>
            <nav className="navbar p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo-mini" >
                        <img src="assets/images/logo-mini.svg" alt="logo"/>
                    </a>

                </div>
                <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                            data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <ul className="navbar-nav w-100">
                        <li className="nav-item w-100">
                            <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                                <input type="text" className="form-control" placeholder="Search products"/>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a className="nav-link btn btn-success create-new-button"
                               // data-toggle="dropdown"
                               // aria-expanded="false"
                                  onClick={()=>{backUrl()}}
                            >Go Back</a>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a className="nav-link btn btn-success create-new-button" id="createbuttonDropdown"
                               data-toggle="dropdown" aria-expanded="false">
                                Crypto Wallets</a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                 aria-labelledby="createbuttonDropdown">
                                <h6 className="p-3 mb-0">wallets</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item"
                                   onClick={()=>{metamaskWallet()}}
                                >
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <img className="img-s rounded-circle" src="assets/icons/metamask-icon.jpg"  alt="metamask icon"/>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">MetaMask</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                {/*<a className="dropdown-item preview-item"*/}
                                {/*   onClick={()=>{coinbaseWallet()}}*/}
                                {/*>*/}
                                {/*    /!* onClick={()=>{activate(connectors.coinbaseWallet)}} *!/*/}
                                {/*    <div className="preview-thumbnail">*/}
                                {/*        <div className="preview-icon bg-dark rounded-circle">*/}
                                {/*            /!* <i className="mdi mdi-web text-info"></i> *!/*/}
                                {/*            <img className="img-s rounded-circle" src="assets/icons/coinbase-v2.png"  alt="binance icon"/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="preview-item-content">*/}
                                {/*        <p className="preview-subject ellipsis mb-1">Coinbase</p>*/}
                                {/*    </div>*/}
                                {/*</a>*/}
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item" onClick={()=>{binanceWallet()}}>
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <img className="img-s rounded-circle" src="assets/icons/binance-icon.png"  alt="binance icon"/>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Binance</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item"
                                   onClick={() => {connectWallet()}}
                                >
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon rounded-circle">
                                            <img className="img-s rounded-circle" src="assets/icons/walletConnet.jpeg"  alt="binance icon"/>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">WalletConnect</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item"
                                   // onClick={()=>{disconnect()}}
                                >
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi eos-icons:blockchain text-danger" />
                                            <i className="mdi mdi-lan-disconnect text-danger" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Disconnect Wallet</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-settings d-none d-lg-block">
                            <a className="nav-link">
                                <i className="mdi mdi-view-grid"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown border-left">
                            <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown"
                               data-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-email"></i>
                                <span className="count bg-success"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                 aria-labelledby="messageDropdown">
                                <h6 className="p-3 mb-0">Messages</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="assets/images/faces/face4.jpg" alt="image"
                                             className="rounded-circle profile-pic"/>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                                        <p className="text-muted mb-0"> 1 Minutes ago </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="assets/images/faces/face2.jpg" alt="image"
                                             className="rounded-circle profile-pic"/>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                                        <p className="text-muted mb-0"> 15 Minutes ago </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="assets/images/faces/face3.jpg" alt="image"
                                             className="rounded-circle profile-pic"/>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                                        <p className="text-muted mb-0"> 18 Minutes ago </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <p className="p-3 mb-0 text-center">4 new messages</p>
                            </div>
                        </li>
                        <li className="nav-item dropdown border-left">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown"
                               data-toggle="dropdown">
                                <i className="mdi mdi-bell"></i>
                                <span className="count bg-danger"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                 aria-labelledby="notificationDropdown">
                                <h6 className="p-3 mb-0">Notifications</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Event today</p>
                                        <p className="text-muted ellipsis mb-0"> Just a reminder that you have an
                                            event today </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Settings</p>
                                        <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-link-variant text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Launch Admin</p>
                                        <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <p className="p-3 mb-0 text-center">See all notifications</p>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="profileDropdown"  data-toggle="dropdown">
                                <div className="navbar-profile">
                                    <img className="img-xs rounded-circle" src="assets/images/faces/face15.jpg"
                                         alt=""/>
                                    <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                                    <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                 aria-labelledby="profileDropdown">
                                <h6 className="p-3 mb-0">Profile</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Settings</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-logout text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Log out</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <p className="p-3 mb-0 text-center">Advanced settings</p>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                            type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-format-line-spacing"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;