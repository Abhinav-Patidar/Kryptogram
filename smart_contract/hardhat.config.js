require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KSJLL5VTeqnT7--f1klm4IcGoay9ED30',
      accounts: ['5c8f2c7e0b0840cd3353d7bd98d7aa64876e06b502207d59ad5bdbc15a166b00'],
    },
  },
};