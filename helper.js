const Transaction = require('./Models/Transaction');
const Web3 = require('web3');
// const Web3 = require('web3');

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
            console.log("created ", element.transactionHash)
          }else{
            console.log("already exists ", element.transactionHash)
          }
    });
});

}
function getWgoldxBsc(){
  const axios = require('axios');
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
      'X-API-KEY': 'BQY4bEr7mMfCOlh8BweyCgrcdSFYQ5fr', 
      'Authorization': 'Bearer ory_at_O6StFOD0Xn6ku6qjPPfaqgprDl4_MYIFLwl7ECWUpA0.Bop-92fi4S6XXA6wfkvlQbwNJ9d9C-pN0gjRULhoCcU'
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
            console.log("created ", element.Transaction.Hash)
          }else{
            console.log("already exists ", element.Transaction.Hash)
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
            console.log("created ", element)
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

          }else{
            console.log("already exists ", element.transactionHash)
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
    console.log(`Processing blocks ${startBlock}-${endBlock}...`);
    
    for (let i = startBlock; i <= endBlock; i++) {
      const block = await web3.eth.getBlock(i, true);
      block.transactions.forEach(async(transaction) => {
        if (transaction.to === WALLET) {
          // pastTransactions.push(transaction);
          // console.log("matched ", transaction);
          let TX = await Transaction.findOne({tx: transaction.hash})
          if(TX == null){
            await Transaction.create({tx: transaction.hash,from: transaction.from,value: Number(transaction.value) / 10**18, type:"goldx" })
            console.log("created ", transaction.hash)
          }else{
            console.log("already exists ", transaction.hash)
          }
        } 
      });
    }
    
    // Update start and end blocks for the next batch
    startBlock = endBlock + 1;
    endBlock = Math.min(startBlock + batchSize - 1, latestBlockNumber);

    // Pause execution for 100ms before processing the next batch
    await new Promise(resolve => setTimeout(resolve, 100));
    
    console.log(`Processed blocks ${startBlock-batchSize}-${endBlock}`);
  }

  // return pastTransactions;
}
async function getPrice(){
  const axios = require('axios');

  return await axios.get("https://api.geckoterminal.com/api/v2/networks/bsc/tokens/0x4E0F32e8EE0E696A662e9575cfFb1c4Dc5a26a92")
  .then((res) => { return res.data})
}
async function getBalance(){
var web3 = new Web3("https://rpc2.goldxscan.com/");
return await web3.eth.getBalance("0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914")
.then((res) => {return Number(res) / 10**18} );
}
async function getUsers(){
  let price = await getPrice()
  let balance = await getBalance()
  // console.log("price is ", price)
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: '$from', // Group by the 'from' field
        count: { $sum: 1 }, // Count the number of records for each 'from' value
        documents: { $push: '$$ROOT' } // Store all documents belonging to each 'from' value
      }
    }
  ]);
  let users = {};
  let stats = {balance,
    price: Number(price.data.attributes.price_usd), 
    totalUSD:0,totalGOLDX:0,totalWGOLDX:0, totalWGOLDXBsc:0,minePoints:0,NFTs:0,NFTsGOLDX:0,NFTsCLS:[], totalS:0}
  result.forEach(group => {
    users[group._id] = {NFTs:0, wgoldx:0,wgoldxbsc:0, goldx:0, total:0};
    group.documents.forEach(element => {
      if(element.type == "goldx") 
      {
        users[group._id].goldx += element.value;
        users[group._id].total += element.value;
        stats.totalGOLDX += element.value;
        stats.minePoints += (element.value * 100)
      }
      if(element.type == "wgoldx"){
        users[group._id].wgoldx += element.value;
        users[group._id].total += element.value;
        stats.totalWGOLDX += element.value;
        stats.minePoints += (element.value * 100)
      }
      if(element.type == "goldxbnb")
      {
        users[group._id].wgoldxbsc += element.value;
        users[group._id].total += element.value;
        stats.totalWGOLDXBsc += element.value;
        stats.minePoints += (element.value * 100)
      }
      if(element.type == "nft") {
        if(!element.data.stats[1]){
          if(element.data.stats[0][2] == "2" ) {
            users[group._id].NFTs += 150000;
        users[group._id].total += 150000;
        stats.NFTsGOLDX += 150000;
        stats.NFTsCLS.push("Miner")
        stats.NFTs += 1;
            stats.minePoints += (150000 * 100)
          }
          if(element.data.stats[0][2] == "3" ) {
            users[group._id].NFTs += 7500
        users[group._id].total += 7500;
        stats.NFTsCLS.push("Prospectors")
        stats.NFTsGOLDX += 7500;
        stats.NFTs += 1;
            stats.minePoints += (7500 * 100)
          }
          if(element.data.stats[0][2] == "1" ) {
            users[group._id].NFTs += 10000000
        users[group._id].total += 10000000;
        stats.NFTs += 1;
        stats.NFTsCLS.push("Refiner")
        stats.NFTsGOLDX += 10000000;
            stats.minePoints += (10000000 * 100)
          } 
        }
      }
    });
  });
  const sortedArray = Object.entries(users)
  // Sort based on the 'total' value
  .sort(([, valueA], [, valueB]) => valueB.total - valueA.total)
  // Assign index property
  .map(([key, value], index) => ({ ...value, key, index: index + 1 }));

// console.log(sortedArray);
stats.NFTsCLS = [...new Set(stats.NFTsCLS)]
  return {stats, users:sortedArray}
  
  
}


module.exports = {
  getWGOLDXlogs,getWgoldxBsc,
  getNFTlogs,getUsers,
  getPastTransactions,
};
