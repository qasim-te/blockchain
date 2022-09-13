import {CoinbaseWalletSDK} from "@coinbase/wallet-sdk";
import WalletLink from "walletlink";
import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
    coinbaseWallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "Web 3 Modal Demo",
            infuraId: {3:"https://ropsten.infura.io/v3/031e6cea5caa4ffdaa72c48844d3dfcd"} // Required
        }
    },
    walletLink: {
        package: WalletLink,
        options: {
            appName: "Web 3 Modal Demo",
            infuraId: '031e6cea5caa4ffdaa72c48844d3dfcd'
        }
    },
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: '031e6cea5caa4ffdaa72c48844d3dfcd'
        }
    },
    binancechainwallet: {
        package: true
    }
};