const SimpleSmartContract = artifacts.require("SimpleSmartContract");

contract('SimpleSmartContract', () => {
    it('Smart contract should be deployed', async () => {
        const simpleSmartContract = await SimpleSmartContract.deployed();

        console.log(simpleSmartContract.address);

        assert(simpleSmartContract !== '');
    });
}); 