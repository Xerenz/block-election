var contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
    ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
];

var contractAddress = '0xE42CFA5acbEA7f8c463429484466b23c256FD561';

var web3 = new Web3('http://localhost:9545');

var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
    .then(result => {
        document.getElementById("hello").innerHTML = result;    
    });
});
