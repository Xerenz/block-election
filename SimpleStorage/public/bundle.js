var contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "data",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
];

var contractAddress = '0x9DACF549eFF74D75a673eEA904460fedc17b145F';

var web3 = new Web3('http://localhost:9545');

var simpleStorage = new web3.eth.Contract(contractABI, contractAddress);

$(document).ready(() => {

    let accounts = [];

    web3.eth.getAccounts()
    .then(acc => {
        accounts = acc;
    });

    const getData = () => {
        simpleStorage.methods.get().call()
        .then(result => {
            $("data").text(result);
        });
    }

    getData();

    $("#setData").submit(e => {

        e.preventDefault();

        console.log("form!");

        const data = $("#setDataInput").val();

        console.log(data);
        
        simpleStorage.methods.set(data)
        .sent({
            from : accounts[0]
        })
        .then(getData);
    });
});