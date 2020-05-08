var contractABI = [];
var contractAddress = '0xE42CFA5acbEA7f8c463429484466b23c256FD561';

var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);