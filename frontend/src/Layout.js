import React,{useState} from 'react';
import Sidebar from "./partials/Sidebar";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import AppContext from "./hooks/CreateContext";
import {ReactQueryDevtools} from "react-query/devtools";

function Layout(props) {
    const [walletBalance,setWalletBalance]=useState('0.00');
    const [walletBlockNumber,setWalletBlockNumber]=useState('0');
    const [walletAddress,setWalletAddress]=useState('0x00000');
    const [network,setNetwork]=useState('....');
    const [networkId,setNetworkId]=useState('0');
    const obj = {
        walletBalance : walletBalance,
        walletBlockNumber : walletBlockNumber,
        walletAddress : walletAddress,
        network : network,
        networkId : networkId,
        //---------------------------//
        setWalletBalance,
        setWalletBlockNumber,
        setWalletAddress,
        setNetwork,
        setNetworkId,
    }
    return (
        <>
            <AppContext.Provider value={obj}>
            <div className="container-scroller">
                <Sidebar />
                <div className="container-fluid page-body-wrapper">
                    <Navbar />
                    <div className="main-panel">
                        {props.children}
                        <Footer />
                    </div>
                    <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
                </div>
            </div>
            </AppContext.Provider>
        </>
    );
}

export default Layout;