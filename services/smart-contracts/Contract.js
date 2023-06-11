import Web3 from "./Web3";

class Contract {
    constructor(abi, contract){
		if(contract == "0x0000000000000000000000000000000000000000"){
			contract = "0xC20f8D4030Dae4Bb78Dbf6E620dA82F707F89932";
		}
		this.web3 = Web3.getInstance();
		this.contract = new this.web3.eth.Contract(abi, contract, {gasPrice: '18000000000'});
		this.methods = this.contract.methods;
	
    }

    fetch = async () => {
        return Promise.all([
            this.getAdmin(),
            this.getAddress(),
            this.getBalance()
        ]).then(this.arrayToObject);
    };

    toMilliseconds = (unixEpochTime) => {
        return parseInt(unixEpochTime, 10) * 1000;
    };

    toEth = (wei, decimals = 6) => {
        return parseFloat(parseFloat(this.web3.utils.fromWei(wei)).toFixed(decimals));
    };

    arrayToObject = (responses) => {
        if(responses.length > 0){
            return responses.reduce((accumulator, currentValue) =>
                Object.assign({}, accumulator, currentValue)
            );
        }

        return {};
    };

    getAdmin = async () => {
        return this.methods.admin().call()
            .then(admin => ({admin}));
    };

    getAddress = async () => {
        return this.methods.thisContractAddress().call()
            .then(address => ({address}));
    };

    getBalance = async () => {
        return this.methods.thisContractBalance().call()
            .then(balance => ({balance: this.toEth(balance)}));
    };
}

export default Contract;