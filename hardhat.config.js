// hardhat.config.js

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { projectId, privateKey } = require('./secrets.json');
const { alchemyApiKey } = require('./secrets.json');

module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0", // Use a Solidity version that is compatible with the imported contracts
        settings: {}
      },
      {
        version: "0.8.20", // Use a Solidity version that is compatible with the imported contracts
        settings: {}
      }
    ]
  }
};
