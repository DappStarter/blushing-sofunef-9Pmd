require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind hospital grid problem off slush'; 
let testAccounts = [
"0xbc4d384e7f2f9efe8b5e40adb9cad3ba92e6252596c2bb9cced67b3e770efd31",
"0xa8120a7fc142f6a989fd2bd93c610eb9e86d550a8e1c15139b9583f7f8819c63",
"0xfdc0028babba9c2b95871a0169675f42445e9208d1de8b82acb3d73815dab9b9",
"0x90caa0b1929b55ec85c8113064b89d67fbc76b5b24df77fadbbc9960f8f1699c",
"0x0e8df1639e5cf1b07beabd96b6489923efbdb194f1ef32835b8ce39330a8b84b",
"0xb1fe5d88e90a018c52bb563b9723ccaff35f3b1458f1cf7a948fc1fd86f5601c",
"0x6c961467342d1c38ede03fe89f139a35aa760c28cfd45d3f8ef5465e523f61f2",
"0x3492aa32821b5eb4b0b1b9cefca1b08457fd0c76e700d03c1a89e5c6c903b9e9",
"0xeb537e91047424a1e9c73d86ea9c53cd90178baad5291ea46db8df7e014b8335",
"0x6291ad8689043eb328297ee9a5126fa05bbf3d7df9d86089fd3eac64aca1a5be"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

