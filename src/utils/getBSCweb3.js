import Web3 from 'web3';

const currentProvider = new Web3.providers.HttpProvider("https://binance.nodereal.io");
const getBSCWeb3 = () => {
    const web3 = new Web3(currentProvider);
    return web3;
}

export default getBSCWeb3;