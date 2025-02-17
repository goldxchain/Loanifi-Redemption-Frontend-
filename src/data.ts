import axios from "axios";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
const web3 = new Web3("https://rpc2.goldxscan.com/")
export interface User {
  key: string;
  total: number;
  phase2Points?: number;
  grandTotal?: number;
}

export interface Stats {
  minePoints?: number;
  totalGOLDX: number;
  totalWGOLDX: number;
  totalWGOLDXBsc: number;
  NFTsCLS?: {
    Pros: number;
    Miners: number;
  };
  price?: number;
}

export interface Phase2User {
  points: number;
  email: string;
}

export interface WalletData {
  key: string;
}

export interface Phase2User {
    points: number;
    email: string;
}

export interface DataState {
  walletData: any;
  walletByEmail: Record<string, string>;
  users: User[];
  stats: Stats;
  phase2Purchases: any[]; 
  rawUsers: any[];
  mergedUsers: User[];
  phase2Users: Phase2User[];
}
// const ERC20_ABI = ;
const generatePhase2Users = (
  phase2Purchases: { status: string; points: number; email: string }[],
  walletByEmail: Record<string, string>
): Record<string, Phase2User> => {
  if (!phase2Purchases.length) return {};

  const web3 = new Web3();
  let p: Record<string, Phase2User> = {};

  phase2Purchases.forEach((element) => {
    if (element.status === "Verified" && element.points && element.points > 0) {
      const walletAddress = walletByEmail[element.email];

      if (walletAddress) {
        const checksumAddress = web3.utils.toChecksumAddress(walletAddress);
        const lowerCaseAddress = checksumAddress.toLowerCase();

        if (!p[lowerCaseAddress]) {
          p[lowerCaseAddress] = { points: element.points, email: element.email };
        } else {
          p[lowerCaseAddress] = {
            points: p[lowerCaseAddress].points + element.points,
            email: element.email,
          };
        }
      }
    }
  });

  return p;
};

export const loadData = async (): Promise<DataState> => {
    console.log("Fetching data...");
  
    const state: DataState = {
      walletData: {},
      walletByEmail: {},
      users: [],
      stats: {
        totalGOLDX: 0,
        totalWGOLDX: 0,
        totalWGOLDXBsc: 0,
      },
      phase2Purchases: [],
      rawUsers: [],
      mergedUsers: [], // New variable
      phase2Users:[]
    };
  
    try {
      const [walletRes, fortuneRes, usersRes] = await Promise.all([
        axios.get("https://goldx.io/get/loanifi/wallet-details/0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914"),
        axios.get("https://goldx.io/api/get/fortune-data"),
        axios.get("https://loanifi.org/get/users"),
      ]);
  
      state.walletData = walletRes.data.data;
      state.walletByEmail = fortuneRes.data.users.emails;
      state.users = usersRes.data.data.users.filter(
        (item: User) => item.key !== "0x53f7183168da4e317a2870c13c93c4fe63864889"
      );
      state.stats = usersRes.data.data.stats;
      state.phase2Purchases = usersRes.data.data.phase2;
  
      // Merge users and phase2Purchases into mergedUsers
      let mergedUsers = [...state.users];
  
      mergedUsers.forEach((user, index) => {
        // console.log("the key and index ", user.key, index)
        const phase2User = state.phase2Purchases.find(p => p.key === user.key);
        if (phase2User) {
          mergedUsers[index] = {
            ...user,
            phase2Points: phase2User.points,
            grandTotal: user.total + phase2User.points,
          };
        } else {
          mergedUsers[index] = {
            ...user,
            phase2Points: 0,
            grandTotal: user.total,
          };
        }
      });
  
      // Add users that exist only in phase2Purchases
      state.phase2Purchases.forEach(phase2User => {
        if (!state.users.some(user => user.key === phase2User.userWallet)) {
            if(phase2User.userWallet == undefined){
                console.log("got undeifned ", phase2User);
            }
          mergedUsers.push({
            key: phase2User.userWallet,
            phase2Points: phase2User.points,
            grandTotal: phase2User.points,
            total: 0, // Default total for new users
          });
        }
      });
      const phase2Users = generatePhase2Users(state.phase2Purchases, state.walletByEmail);

        // Convert object to array
        state.phase2Users = Object.keys(phase2Users).map((key) => ({
        key, // Store the wallet address as 'key'
        points: phase2Users[key].points,
        email: phase2Users[key].email,
        }));
  
    //    = mergedUsers;
       state.mergedUsers = mergedUsers.sort((a, b) => (b.grandTotal || 0) - (a.grandTotal || 0));
  
      const goldxPriceRes = await axios.get("https://goldx.io/api/goldx-price");
      state.stats.price = Number(goldxPriceRes.data.price);
  
      const rawUsersRes = await axios.get("https://loanifi.org/get/users-raw");
      state.rawUsers = rawUsersRes.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    return state;
  };
  

export const userWalletFormatted = (userWallet: string | undefined): string => {
  if (!userWallet) return "";
  if (userWallet.length <= 6) return userWallet;
  return `${userWallet.substring(0, 6)}.....${userWallet.slice(-4)}`;
};

export const getP2TotalPoints = (phase2Users: Phase2User[]): number => {
    return phase2Users.reduce((total, user) => total + user.points, 0);
  };

export const totalPoints = (stats: Stats, phase2Users: Record<string, Phase2User>): number => {
  return (stats.minePoints ?? 0)
};

export const circulatingSupply = async (): Promise<number> => {
    try {
      const walletAddress = "0xCD813725889c87d26bf236AFC45cB0744893C911";
      const balance = await web3.eth.getBalance(walletAddress);
      const bnbBalance = parseFloat(web3.utils.fromWei(balance, "ether"));
      const CSupply = Math.floor(2200000000 - bnbBalance); // Rounded to nearest whole number
      return CSupply;
    } catch (error) {
      console.error("Error fetching balance:", error);
      return 0;
    }
  };
  export const connectWallet = async (): Promise<string | null> => {
    const provider: any = await detectEthereumProvider();
    if (provider) {
        const web3 = new Web3(provider);
        try {
            const accounts = await provider.request({ method: "eth_requestAccounts" });
            return accounts[0]; // Return connected wallet address
        } catch (error) {
            console.error("Wallet connection failed", error);
            return null;
        }
    } else {
        alert("Please install MetaMask to connect your wallet.");
        return null;
    }
};

export const fetchUSDXBalance = async (walletAddress: any) => {
  const contract = new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
  ], "0xB137650135BCE3A79D5D546CB787F359e6F31D18");

  try {
    const balance = await contract.methods.balanceOf(walletAddress).call();
    console.log("fetched USDX balance,", balance);
    return Number(web3.utils.fromWei(balance, "ether")) ; // Assuming 18 decimals
  } catch (error) {
    console.error("Error fetching USDX balance:", error);
    return 0;
  }
};

// Function to fetch minePoints (Mocked)
export const fetchMinePoints = async (walletAddress: string): Promise<number> => {
  
// interface User {
//   key: string;
//   minePoints?: number;
// }
  try {
      const data = await loadData();

      if (!data?.mergedUsers) return 0;
      const user = data.mergedUsers.find((user: { key: string }) => user.key.toLowerCase() === walletAddress.toLowerCase()) as { grandTotal?: number };
      console.log("minPoints are fetched for ", walletAddress, user)
      return user?.grandTotal || 0;
      // const user = data.mergedUsers.find((user: { key: string }) => user.key.toLowerCase() === walletAddress.toLowerCase());

      // return user ? user.minePoints || 0 : 0;
      
  } catch (error) {
      console.error("Error fetching mine points:", error);
      return 0;
  }
};