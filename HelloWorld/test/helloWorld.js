const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', () => {
    it('Should Return Hello World', async () => {
        const helloWorld = await HelloWorld.deployed();

        const result = await helloWorld.hello();

        assert(result === 'Hello World');
    });
});