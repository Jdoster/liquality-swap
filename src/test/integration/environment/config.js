export default {
  assets: {
    ETH: {
      rpc: {
        url: 'https://api-rinkeby.etherscan.io',
        wallet: true
      }
    },
    BTC: {
      rpc: {
        username: 'bitcoin',
        password: 'local321',
        url: 'http://localhost:18443',
        addressType: 'bech32',
        wallet: true
      },
      network: 'bitcoin_regtest',
      swapMode: 'p2wsh',
      feeNumberOfBlocks: 2
    }
  }
}
