import Web3 from 'web3';
import AdvancedStorage from '../build/contracts/AdvancedStorage.json';

let web3;
let advancedStorage;

const initWeb3 = function() {
    return new Promise((resolve, reject) => {

        // Case 1: new metamask is present
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.enable()
                .then(() => {
                    resolve(
                        new Web3(window.ethereum)
                    );
                })
                .catch(e => {
                    reject(e);
                });
            return;
        }

        // Case 2: old metamask is present
        if (typeof window.web3 !== 'undefined') {
            return resolve(
                new Web3(window.web3.currentProvider)
            );
        }

        // Case 3: no metamask, just load gnache
        resolve(new Web3('http://localhost:9545'));
    });
}

const initContract = function() {

    const deploymentKeys = Object.keys(AdvancedStorage.networks);
    const key = deploymentKeys[0];

    return new web3.eth.Contract(
        AdvancedStorage.abi, 
        AdvancedStorage.networks[key].address);
}

const initApp = function() {
    let accounts = [];

    web3.eth.getAccounts()
    .then(_accounts => {
        accounts = _accounts

        return advancedStorage.methods
                .getAll().call()
    })
    .then(result => {
        $("#data").innerHTML = result.join(', ');
    });

    $("#addData").submit(e => {
        e.preventDefault();

        var data = $("#addDataInput").val();

        advancedStorage.methods
        .add(data).send({
            from : accounts[0]
        }).then(() => {
            return advancedStorage.methods
                    .getAll().call();
        }).then(result => {
            $("#data").innerHTML = result.join(', ');
        }); 
    });
}

$(document).ready(function() {
    initWeb3()
        .then(_web3 => {
            web3 = _web3;
            advancedStorage = initContract();
            initApp();
        })
        .catch(err => console.log(err.message));
});