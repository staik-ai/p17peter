import Contract from "./Contract";
import settings from "../../settings";
import {factoryAbi} from "./factoryAbi";

const {masterContract} = settings;

class FactoryContract extends Contract {
    constructor(){
        super(factoryAbi, masterContract);
    }

    fetch = async () => {
        return Promise.all([
            this.getAddress(),
            this.getBalance(),
            this.getCount(),
            this.getLatestSpawnedContract(),
            this.getPreviousContract(),
            this.getAdmin(),
        ]).then(this.arrayToObject);
    };

    getLatestSpawnedContract = async () => {
        return this.methods.getLatestSpawnedContract().call()
            .then(latestSpawnedContract => ({latestSpawnedContract}));
    };

    getPreviousContract = async () => {
        return this.methods.previousContract().call()
            .then(previousContract => ({previousContract}))
            .catch(() => null);
    };

    getCount = async () => {
        return this.methods.getContractCount().call()
            .then(count => ({count: parseInt(count, 10)}));
    };
}

export default new FactoryContract();