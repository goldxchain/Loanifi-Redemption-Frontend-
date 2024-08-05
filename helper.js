const Transaction = require('./Models/Transaction');
const Web3 = require('web3');
const USDXADDRESS = "0xB137650135BCE3A79D5D546CB787F359e6F31D18";
var USDXABI = [{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[{"type":"string","name":"name","internalType":"string"},{"type":"string","name":"symbol","internalType":"string"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"_decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"_name","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"_symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"burn","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"mint","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}],"constant":false}]
const axios = require('axios');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6ImV4dHJhY3RlZC11c2VyLWlwIiwiaWF0IjoxNzIxNTg5NTg4LCJleHAiOjE3MjI4ODU1ODh9.iViAc3bWt93pr7182a85K_9GrSekwALqa4ZJ23jTb-A"
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// const Web3 = require('web3');
const { ethers } = require('ethers');
const Purchase = require('./Models/Purchase');
// const web3 = new Web3('https://rpc2.goldxscan.com/');
var pluginAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftContractAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokenId",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "GoldXClaimed",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onBulkClaim",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "GoldXClaimed",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onClaim",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokensToCombineMiner",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokensToCombineProspector",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onCombinedRights",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "multiple",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "class",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onCustomMiningRight",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onFund",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256[]",
        "name": "tokenId",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "class",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onRightsApproval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "multipleMiner",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "multipleProspector",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "onRightsApprovalDual",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "NFT_account",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "NFT_items",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "NFT_stats",
    "outputs": [
      {
        "internalType": "uint256[3]",
        "name": "",
        "type": "uint256[3]"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "NftCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "NftLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TNT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TNT_Refiner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "availableRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "tokenId",
        "type": "uint256[]"
      }
    ],
    "name": "claimBulkRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "claimRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "tokensToCombineMiner",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "tokensToCombineProspector",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      }
    ],
    "name": "grantCombinedMiningRight",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "multiple",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_class",
        "type": "uint256"
      }
    ],
    "name": "grantCustomMiningRight",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "multipleMiner",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "multipleProspector",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      }
    ],
    "name": "grantCustomMiningRightDual",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "tokenId",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_class",
        "type": "uint256"
      }
    ],
    "name": "grantMiningRight",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "isApproved",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lastFundTimestamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_class",
        "type": "uint256"
      }
    ],
    "name": "miningPowerCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nftSmartContract",
    "outputs": [
      {
        "internalType": "contract NFTMarketplace",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_class",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "limit",
        "type": "uint256"
      }
    ],
    "name": "setNftCountLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalClaims",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawGOLDX",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
var pluginAddress = "0xBbDC165A49D0eCc847D762A4310a268EC0294B44"
var web3 = new Web3("https://rpc2.goldxscan.com/");
var WGOLDXABI = 
[{"type":"event","name":"Approval","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"address","name":"guy","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"dst","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"address","name":"dst","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdrawal","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"guy","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"deposit","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"src","internalType":"address"},{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"receive","stateMutability":"payable"}]
var WGOLDXADDRESS = "0xaf1CC4b8623AA078690220682817e0f035b74765"
var MARKETABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"tokenName","internalType":"string"},{"type":"string","name":"tokenSymbol","internalType":"string"},{"type":"uint256","name":"gotMaxTokenSupply","internalType":"uint256"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"MarketItemCreated","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true},{"type":"address","name":"nftContract","internalType":"address","indexed":true},{"type":"string","name":"uri","internalType":"string","indexed":false},{"type":"address","name":"creator","internalType":"address","indexed":false},{"type":"address","name":"owner","internalType":"address","indexed":false},{"type":"uint256","name":"price","internalType":"uint256","indexed":false},{"type":"bool","name":"forSale","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_value","internalType":"uint256"}],"name":"_bidIds","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"_tokenName","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"_tokenSymbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"actualOwnerWallet","inputs":[{"type":"uint256","name":"altOwnerFund","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addTokens","inputs":[{"type":"uint256","name":"gotNewMaxTokenSupply","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"bidPassCheck","inputs":[{"type":"address","name":"userWallet","internalType":"address"},{"type":"uint256","name":"currBid","internalType":"uint256"},{"type":"uint256","name":"tokenID","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"bidWalletIN","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"bidWalletOUT","inputs":[{"type":"address","name":"sendTo","internalType":"address"},{"type":"uint256","name":"withdrawAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"bidderWallet","inputs":[{"type":"address","name":"bidderAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"fetchTokenIDURI","inputs":[{"type":"uint256","name":"tokenID","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNewTokenID","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"listNFT","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"uint256","name":"price","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"marketSetup","inputs":[{"type":"address","name":"scAddress","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"mintNFT","inputs":[{"type":"string","name":"uri","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"sellNFT","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"uint256","name":"marketItemPrice","internalType":"uint256"},{"type":"uint256","name":"sellerGets","internalType":"uint256"},{"type":"uint256","name":"marketOwnerGets","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"soldBidNFT","inputs":[{"type":"address","name":"winner","internalType":"address"},{"type":"uint256","name":"bidAmount","internalType":"uint256"},{"type":"uint256","name":"nftOwnerGets","internalType":"uint256"},{"type":"uint256","name":"ownerGets","internalType":"uint256"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"transferNFT","inputs":[{"type":"address","name":"recieverAddress","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"uint256","name":"gotTransferFee","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unlistNFT","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]}]
var MARKETADDRESS = "0x9711f9968009D77C6d7781d6a23b77c46b03Ef4E" 
//get WGOLDX Transfer logs
//get NFTMarketplace Transfer Logs
// get GOLDX tranfer Logs
// let WALLET = "0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914"
function getWGOLDXlogs(){  
  const WGOLDXCONTRACT = new web3.eth.Contract(WGOLDXABI, WGOLDXADDRESS);
  WGOLDXCONTRACT.getPastEvents('Transfer', {
    filter: {dst: ['0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914']}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ 
  
 })
.then(async function(events){
    events.forEach(async (element) => {
      let TX = await Transaction.findOne({tx: element.transactionHash})
          if(TX == null){
            await Transaction.create({tx: element.transactionHash,from: element.returnValues['src'],value: Number(element.returnValues['wad']) / 10**18, type:"wgoldx" })
            // console.log("created ", element.transactionHash)
          }else{
            // console.log("already exists ", element.transactionHash)
          }
    });
});

}
function getUSDXlogs(){  
  // console.log("on the getUSDXlogs")
  const WGOLDXCONTRACT = new web3.eth.Contract(USDXABI, USDXADDRESS);
  WGOLDXCONTRACT.getPastEvents('Transfer', {
    filter: {to: ['0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914']}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 144487,
    toBlock: 'latest'
}, function(error, events){ 
  // console.log("events are ", events.length)
 })
.then(async function(events){
    events.forEach(async (element) => {
      // console.log(element)
      let TX = await Transaction.findOne({tx: element.transactionHash})
      // console.log(TX)
          if(TX == null){
            await Transaction.create({tx: element.transactionHash,from: element.returnValues['from'],value: Number(element.returnValues['value']) / 10**18, type:"usdx" })
            // console.log("created ", element.transactionHash)
          }else{
            // console.log("already exists ", element.transactionHash)
          }
    });
});

}
function getWgoldxBsc(){
  
  let data = JSON.stringify({
    "query": "{\n  EVM(dataset: combined, network: bsc) {\n    Transfers(\n      where: {Transfer: {Currency: {SmartContract: {is: \"0x4E0F32e8EE0E696A662e9575cfFb1c4Dc5a26a92\"}}, Receiver: {is: \"0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914\"}}}\n      orderBy: {descending: Block_Time}\n    ) {\n      Transaction {\n        Hash\n      }\n      Transfer {\n        Amount\n        Receiver\n        Sender\n      }\n    }\n  }\n}\n",
    "variables": "{}"
 });

let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url: 'https://streaming.bitquery.io/graphql',
   headers: { 
      'Content-Type': 'application/json', 
      'X-API-KEY': 'BG0l70RiO7exN4Jro6t_JAUAoH', 
      'Authorization': 'Bearer ory_at_zSrwTOETNQ3Z7ukYGfZNGMKcAn0k1CI2H_jBDYdHes4.AQ0Bbb2mNjBl6WlngWzxzaEF9Rb_eeRb0-e8YoDKmPE'
   },
   data : data
};

axios.request(config)
.then((response) => {
  //  console.log((response.data));
  if(response.data.data){
    if(response.data.data.EVM.Transfers.length){
      response.data.data.EVM.Transfers.forEach(async(element) => {
        // console.log(element)
        let TX = await Transaction.findOne({tx: element.Transaction.Hash})
          if(TX == null){
            await Transaction.create({tx: element.Transaction.Hash,from: element.Transfer.Sender,value: Number(element.Transfer.Amount).toFixed(0) , type:"goldxbnb" })
            // console.log("created ", element.Transaction.Hash)
          }else{
            // console.log("already exists ", element.Transaction.Hash)
          }
      });
    }
  }
})
.catch((error) => {
   console.log(error);
});
}
function getNFTlogs(){
  const plugin = new web3.eth.Contract(pluginAbi,pluginAddress );
  const MARKETCONTRACT = new web3.eth.Contract(MARKETABI, MARKETADDRESS);
  MARKETCONTRACT.getPastEvents('Transfer', {
    filter: {to: ['0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914']}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ 
  
 })
.then(async function(events){
    events.forEach(async (element) => {
      let TX = await Transaction.findOne({tx: element.transactionHash})
          if(TX == null){
            // console.log("created ", element)
            let ID = element.returnValues['tokenId']
            let isApproved = await plugin.methods.isApproved(ID).call()
            if(isApproved){
            let stats = null

            try {
              stats = await plugin.methods.NFT_stats(ID).call() 
              // if(stats[1]){
                let ms =  await plugin.methods.miningPowerCount(ID, 2).call()
                let ps =  await plugin.methods.miningPowerCount(ID, 3).call()
                stats[3] = ms
                stats[4] = ps
            } catch (error) {
              console.log("stats error", error)
            }
            NFT = {approved:((isApproved) ? true : false), stats}

          }
          await Transaction.create({data: NFT,tx: element.transactionHash,from: element.returnValues['from'],value: ID, type:"nft" })
          // console.log("created, ",element.returnValues['tokenId'])

          }else{
            // console.log("already exists ", element.returnValues['tokenId'])
          }
    });
});
}
async function getPastTransactions() {
  let pastTransactions = [];
  let WALLET = "0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914";
  const latestBlockNumber = await web3.eth.getBlockNumber();
  let startBlock = 2409839; // Starting block number
  let batchSize = 1000; // Number of blocks to process in each batch
  let endBlock = startBlock + batchSize - 1; // Calculate end block for the first batch

  while (startBlock <= latestBlockNumber) {
    // console.log(`Processing blocks ${startBlock}-${endBlock}...`);
    
    for (let i = startBlock; i <= endBlock; i++) {
      const block = await web3.eth.getBlock(i, true);
      block.transactions.forEach(async(transaction) => {
        if (transaction.to === WALLET) {
          // pastTransactions.push(transaction);
          // console.log("matched ", transaction);
          let TX = await Transaction.findOne({tx: transaction.hash})
          if(TX == null){
            await Transaction.create({tx: transaction.hash,from: transaction.from,value: Number(transaction.value) / 10**18, type:"goldx" })
            // console.log("created ", transaction.hash)
          }else{
            // console.log("already exists ", transaction.hash)
          }
        } 
      });
    }
    
    // Update start and end blocks for the next batch
    startBlock = endBlock + 1;
    endBlock = Math.min(startBlock + batchSize - 1, latestBlockNumber);

    // Pause execution for 100ms before processing the next batch
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // console.log(`Processed blocks ${startBlock-batchSize}-${endBlock}`);
  }

  // return pastTransactions;
}
async function getPrice(){
  

  return await axios.get("https://goldx.io/api/goldx-price")
  // return await axios.get("https://api.geckoterminal.com/api/v2/networks/bsc/tokens/0x4E0F32e8EE0E696A662e9575cfFb1c4Dc5a26a92")
  .then((res) => { return res.data.price})
}
async function getBalance(){
  try {

    var web3 = new Web3("https://rpc2.goldxscan.com/");
    return await web3.eth.getBalance("0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914")
    .then((res) => { console.log("response getBalance", res); return Number(res) / 10**18} );
  } catch (err) {
return 0
  }
}
async function getBalanceWB(){
  const tokenAddress = '0x4E0F32e8EE0E696A662e9575cfFb1c4Dc5a26a92';
const walletAddress = '0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914';
const web3 = new Web3('https://bsc-dataseed.binance.org/');
const tokenContract = new web3.eth.Contract([
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  }
], tokenAddress);
try {
  let res = await tokenContract.methods.balanceOf(walletAddress).call()
  // console.log("response getBalanceWB", res)
  return Number(res) / 10**18
}catch (err) {
return 0
}
  }
async function getNLogs (){
  let txs = await Transaction.find({type:"nft"});
  return txs;
}
async function getUsersRaw(){
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: { $toLower: '$from' }, // Group by the 'from' field
        count: { $sum: 1 }, // Count the number of records for each 'from' value
        documents: { $push: '$$ROOT' } // Store all documents belonging to each 'from' value
      }
    }
  ]);
  return result;
}  
async function getUsers(){
  let phase2 = await Purchase.find({sacrifice:"I Want to Sacrifice My NFT"})
  let price = await getPrice()
  let balance = await getBalance()
  let WBbalance = await getBalanceWB()
  console.log("getUsers price is ", WBbalance, balance, price)
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: { $toLower: '$from' }, // Group by the 'from' field
        count: { $sum: 1 }, // Count the number of records for each 'from' value
        documents: { $push: '$$ROOT' } // Store all documents belonging to each 'from' value
      }
    }
  ]);
  let users = {};
  let stats = {balance,WBbalance,totalUSDX:0,
    price: (price) ? Number(price) : 0, 
    totalUSD:0,totalGOLDX:0,totalWGOLDX:0, totalWGOLDXBsc:0,minePoints:0,NFTs:0,NFTsGOLDX:0,NFTsCLS:{Miners:0, Pros:0}, totalS:0}
  result.forEach(group => {
    console.log("group._id ", group._id)
    let walletAddresses = ["0x53f7183168da4e317a2870c13c93c4fe63864889","0xCD813725889c87d26bf236AFC45cB0744893C911"]
    if( !walletAddresses.includes(group._id) ){
      users[group._id] = {NFTs:0,NFTsGoldx:0, NFTsPoints:0, wgoldx:0,wgoldxbsc:0, goldx:0,usdx:0,
        total:0,gp:0,wgp:0,wgbp:0,up:0,nftPower:0,nftGPower:0,};
     group.documents.forEach(element => {
       if(element.type == "goldx") 
       {
         users[group._id].gp += ((Number(element.value)) * 100)
         users[group._id].goldx += Number(element.value);
         users[group._id].total += ((Number(element.value)) * 100)
         stats.totalGOLDX += Number(element.value);
         stats.minePoints += ((Number(element.value)) * 100)
       }
       if(element.type == "wgoldx"){
         users[group._id].wgoldx += Number(element.value);
         users[group._id].wgp += (Number(element.value) * 100)
         users[group._id].total += (Number(element.value) * 100)
         stats.totalWGOLDX += Number(element.value);
         stats.minePoints += (Number(element.value) * 100)
       }
       if(element.type == "usdx"){
         let v = Number(element.value) * 25
         users[group._id].usdx += Number(element.value);
         users[group._id].total += (v * 1000)
         users[group._id].up += (v * 1000)
         stats.totalUSDX += Number(element.value);
         stats.minePoints += (v * 1000)
       }
       if(element.type == "goldxbnb")
       {
         users[group._id].wgoldxbsc += Number(element.value);
         users[group._id].total += (Number(element.value) * 100)
         users[group._id].wgbp += (Number(element.value) * 100)
         stats.totalWGOLDXBsc += Number(element.value);
         stats.minePoints += (Number(element.value) * 100)
       }
       if(element.type == "nft") {
         if(!element.data.stats[1]){
           if(element.data.stats[0][2] == "2" ) {
             users[group._id].NFTsGoldx += 150000;
             users[group._id].NFTs += 150000;
             users[group._id].nftPower += 0.0072;
             users[group._id].nftGPower += 0.00009013;
         users[group._id].total += ((150000) * 100);
         users[group._id].NFTsPoints += ((150000) * 100)
         stats.NFTsGOLDX += 150000;
         stats.NFTsCLS.Miners ++
         stats.NFTs += 1;
             stats.minePoints += ((150000) * 100)
           }
           if(element.data.stats[0][2] == "3" ) {
             users[group._id].NFTs += 7500
             users[group._id].NFTsGoldx += 7500;
         users[group._id].total += ( (7500 )  * 100);
         users[group._id].nftPower += 0.00036;
         users[group._id].nftGPower += 0.0000045;
         users[group._id].NFTsPoints += ((7500) * 100)
         stats.NFTsCLS.Pros++
         stats.NFTsGOLDX += 7500;
         stats.NFTs += 1;
             stats.minePoints += ( (7500 )  * 100)
           }
            
         }else{
           if(element.data.stats[0][2] == "2" ) {
             users[group._id].NFTs += (150000 * Number(element.data.stats[3]));
             users[group._id].NFTsGoldx += (150000 * Number(element.data.stats[3]));
         users[group._id].total += (( (150000) * Number(element.data.stats[3])) * 100) ;
         users[group._id].NFTsPoints += (( (150000) * Number(element.data.stats[3])) * 100) ;
         users[group._id].nftPower += (0.0072 * Number(element.data.stats[3]));
         users[group._id].nftGPower += (0.00009013 * Number(element.data.stats[3])) ;
         stats.NFTsGOLDX += (150000 * Number(element.data.stats[3]));
         stats.NFTsCLS.Miners += Number(element.data.stats[3])
         stats.NFTs += 1;
             stats.minePoints += (( (150000 ) * Number(element.data.stats[3])) * 100)
           }
           if(element.data.stats[0][2] == "3" ) {
             users[group._id].NFTs += (7500 * Number(element.data.stats[4]))
             users[group._id].NFTsGoldx += (7500 * Number(element.data.stats[4]));
             users[group._id].total += (( (7500) * Number(element.data.stats[4])) * 100)
         users[group._id].nftPower += (0.00036 * Number(element.data.stats[4]));
         users[group._id].nftGPower += (0.0000045 * Number(element.data.stats[4])) ;
         stats.NFTsCLS.Pros += Number(element.data.stats[4])
         stats.NFTsGOLDX += (7500 * Number(element.data.stats[4]));
         stats.NFTs += 1;
             stats.minePoints += (( (7500 ) * Number(element.data.stats[4])) * 100)
           }
           
         }
       }
     });
    }
    
  });
  const sortedArray = Object.entries(users)
  // Sort based on the 'total' value
  .sort(([, valueA], [, valueB]) => valueB.total - valueA.total)
  // Assign index property
  .map(([key, value], index) => ({ ...value, key, index: index + 1 }));

// console.log(sortedArray);
// stats.NFTsCLS = [...new Set(stats.NFTsCLS)]
stats.WBbalance = WBbalance
  return {stats, users:sortedArray, phase2}
  
  
}


module.exports = {
  getWGOLDXlogs,getWgoldxBsc,
  getNFTlogs,getUsers,getUSDXlogs,
  getPastTransactions,getNLogs,getUsersRaw
};
