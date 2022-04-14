require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain equip gloom arena forward test'; 
let testAccounts = [
"0xf80422ee6699241a764376c61b4a5a7dc135a6c0ef9f01a8ed6bf70e5d41ba99",
"0xf5c0b5e4db97f5fbe6ab9e04f2ae3646f04bcb013c51434a86acd77a5304182a",
"0xe3a7db83e00f5e19ac375047ce72888de06fa274a4d71c2912d5701889b8dfde",
"0xa6a9aaf6a181a0632ee666b8ac06c7b5e84018ce2f052fd4271145e240c5462b",
"0x501ba057d001fe3aa154471710b6173f9ac6728c71cb2937410950ef93a43ecf",
"0x13f14e221b996c34397848fa0ea8e9347be274dec9492259b5247d72adfc68b8",
"0xeb68a367405fee4827c806d925cb0c999c1b50d3d187991dc2868491bcc25c9f",
"0xa7c1b5d4a97691d8fbf432a6107c1716806e524dc7203cf0966a5aa06b7c0c56",
"0x99ac96e6ee31ec91d6d1d43f0b195d1f4f34d6fbdf3d9ee2c294dea652f400d9",
"0xc636ca3e7421d2540cb9cbcc05292dc4aeab0252cdae9ad0b09546d119c2f98f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


