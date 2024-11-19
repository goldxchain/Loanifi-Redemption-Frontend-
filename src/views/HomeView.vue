<template>

<div class="">
    <b-navbar toggleable="lg" style="background-color: #000000 !important;" type="dark" variant="info">
      
    <b-navbar-toggle target="nav-side" ></b-navbar-toggle>

    <b-navbar-brand href="#"><img src="@/assets/logo.png" alt="" style="max-height: 30px;
        margin-left: 10px;"></b-navbar-brand>      
    
      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <ul class="navbar-nav mr-auto mlr">
          
          <p class="float-right mb-0 px-3 lh-20"><b>Other Assets</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>MINE</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>USDX</b> <br> <span>0.00</span> </p>
        </ul> -->
        <div class="right-items">
          <p class="float-right mb-0 px-3 lh-20"><b>Other Assets</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>MINE</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>USDX</b> <br> <span>0.00</span> </p>
          <span class="float-right"> <img src="@/assets/wallet.png" style="max-width: 20px;
            margin-top: 0px;" alt=""> </span>
          <span v-if="userWallet" @click="downloadCSV()" class="clicker float-right px-3 lh-20 d-none d-md-inline-block"> Download<br> Points Details <span style="float: right;padding: 0px 5px;
    font-size: 38px;
    display: inline-block;
    margin-top: -9px;"> <b>&#10515;</b> </span>  </span>  
          <span v-if="userWallet" class="float-right px-3 lh-20 d-none d-md-inline-block"> Connected as <br> {{userWalletFormatted}} <span class="bg-white sc-icon">&#x00d7;</span> </span>  
          <span v-else class="float-right px-3 lh-20 d-none d-md-inline-block clicker" @click="connectWallet"> Connect<br> Wallet </span>  
          <span v-if="userWallet" class="px-3 lh-20 d-block d-md-none"> Connected as {{userWalletFormatted}} <span class="bg-white sc-icon">&#x00d7;</span> </span>  
          <span v-else class="px-3 lh-20 d-block d-md-none clicker" @click="connectWallet"> Connect Wallet </span>  
          <span v-if="userWallet" class="float-right d-none d-md-inline-block">
            <img src="@/assets/user.png" style="max-width: 20px;margin-top: 0px;" alt="">
          </span>
          <span v-if="userWallet" @click="downloadCSV()" class="clicker float-right px-3 lh-20 d-block d-md-none"> Download Points Details <span style="float: right;padding: 0px 5px;
    font-size: 38px;
    display: inline-block;
    margin-top: -9px;"> <b>&#10515;</b> </span>  </span>
        </div>
        </b-navbar-nav>
      </b-collapse>
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent" style="max-height:40px;"> -->
       
      <!-- </div> -->
    </b-navbar>
    <div class="row m-0 p-0">
      <!-- <div class="bg-sidebar" style="width: 100%;"> -->
        <b-collapse id="nav-side" class="bg-sidebar" style="width: 100%;" >
        <div class="sidebar-icons">
          <span class="icon">
            <span class="imgc"> <img class="ic-img" src="@/assets/dashboard.png" alt="" style="height: 15px;
              width: 18px;"> </span>
            <span class="title">Dashboard</span>
          </span>
          <span class="icon">
            <span class="imgc"> <img class="ic-img" src="@/assets/farm.png" alt="" style="    height: 20px;
              width: 15px;
              margin-bottom: 1px;"> </span>
            <span class="title">Farm</span>
          </span>
          <span class="icon">
            <span class="imgc"> <img class="ic-img" src="@/assets/risky.png" alt="" style="height: 20px;
              width: 21px;
              margin-bottom: 3px;"> </span>
            <span class="title">Risky Trove</span>
          </span>
          <span class="icon actives">
            <span class="imgcs"> <img class="ic-img" src="@/assets/sacrifice.png" alt="" style="height: 28px;
              width: 22px;margin-bottom: -1px;"> </span>
            <span class="title active">Sacrifice</span>
          </span>
          <span class="icon">
            <span > ... </span>
            <span class="title">More Info</span>
          </span>
          <span class="icon">
            <span class="title">Voting </span>
          </span>
          <span class="icon">
            <span class="title">Github </span>
          </span>
          <span class="icon">
            <span class="title">Docs </span>
          </span>
          <span class="icon">
            <span class="title"> Blog </span>
          </span>
          <span class="footer-icon" style="position: absolute;
          bottom: 75px;">
            <img src="@/assets/footer.png" alt="" style="max-width:71%;" class="d-block mx-auto">
          </span>
        </div>
      </b-collapse>
      <!-- </div> -->
     <div class="col-12 p-0 m-0">
       
      <div class="bg-sidebar px-0 d-none d-lg-inline-block" style="width:4%;">
        <div class="sidebar-icons" @mouseover="titleWindow = true">
          <div >
            <span class="icon">
            <span class="imgc"> <img class="ic-img" src="@/assets/dashboard.png" alt="" style="height: 15px;
              width: 18px;"> </span>
          </span>

          <span class="icon">
            <span class="imgc"> <img class="ic-img" src="@/assets/farm.png" alt="" style="    height: 20px;
              width: 15px;
              margin-bottom: 1px;"> </span>
          </span>
          <span class="icon">
            <span class="imgc"> <img class="ic-img" src="@/assets/risky.png" alt="" style="height: 20px;
              width: 21px;
              margin-bottom: 3px;"> </span>
          </span>
          <span class="icon actives">
            <span class="imgcs"> <img class="ic-img" src="@/assets/sacrifice.png" alt="" style="height: 28px;
              width: 22px;margin-bottom: -1px;"> </span>
          </span>
          <span class="icon">
            <span > ... </span>
          </span>
          <span class="icon">
          </span>
          <span class="icon">
          </span>
          <span class="icon">
          </span>
          <span class="icon">
            
          </span>
          </div>
          <div @mouseover="titleWindow = true" @mouseleave="titleWindow = false" v-if="titleWindow" class="title-window">
            <span class="title">Dashboard</span>
            <span class="title">Farm</span>
            <span class="title">Risky Trove</span>

            <span class="title active">Sacrifice</span>
            <span class="title">More Info</span>

            <span class="title">Voting </span>
            <span class="title">Github </span>
            <span class="title">Docs </span>



            <span class="title"> Blog </span>
            
            <span class="footer-icon" style="position: absolute;
          bottom: 5px;">
            <img src="@/assets/footer.png" alt="" style="max-width:71%;" class="d-block mx-auto">
          </span>
            
            
            
            
            
          </div>
          
          
        </div>
      </div>
      <div class="main-cont d-inline-block mct">
        <div class="row justify-content-end">
          <div class="col-12">
<coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,ripple,binancecoin,tether,chainlink,usd-coin" currency="usd" background-color="#050505" locale="en" font-color="#f2eded"></coingecko-coin-price-marquee-widget>
          </div>
          <!-- </div> -->
          <div class="col-12 col-md-6">
       <p class="text-center glow-text-small mb-0">
        Total $USD Value Sacrificed
       </p>
<h3 class="glow-text text-center">
  <b>$ {{addCommasToNumber(Number(totalSacUSD) + Number(phase2Sacrifices.curr["USDX"] )) }}</b> 
</h3>
<div class="d-none d-md-block">
      <p class="text-center glow-text-small mb-0">
        GOLDX Price
       </p>
<h3 class="glow-text text-center">
  <b>$ {{stats.price.toFixed(5) }} </b> 
</h3>
<h5 class="glow-text text-center">
  <p style="font-size:60%;">The official Loanifi Sacrifice Address</p>
</h5>
<b @click="copyWallet(MWALLET)" style="cursor: pointer;font-size: 155%; 
    margin-bottom: 14px;" class="d-block text-center"> {{MWALLET.slice(0, 6)+'....'+MWALLET.substring(MWALLET.length - 6) }}  <span>&#10063;</span> </b> 


     </div>

          </div>
          <div class="col-12 col-md-3">
            <div style="font-size: 10px;
    color: rgb(185, 150, 83);
    border: 4px solid rgb(185, 150, 83);
    border-radius: 55%;
    padding: 27px 8px;
    position: relative;
    background: black;
    width: 170px;
    height: 170px;
    line-height: 13px;
    margin-top: 54px;
    letter-spacing: 2px;">
              <span class="d-block text-center"> Power <br> <b> {{walletData.Power.toFixed(2)}} </b> </span> 
              <span class="d-block text-center"> Refiners <br> <b>{{walletData.Refiners}}</b> </span> 
              <span class="d-block text-center"> Miners <br> <b>{{walletData.Miners}}</b> </span> 
              <span class="d-block text-center"> Prospectors <br> <b>{{walletData.Prospectors}}</b> </span> 
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="inner-section mb-5 maxh"> <h1 class="f-font text-center bold py-2">Sacrifice Phase 2/3 Now Live</h1> </div>
     <div class="d-md-none">
      <p class="text-center glow-text-small mb-0">
        GOLDX Price
       </p>
<h3 class="glow-text text-center">
  <b>$ {{stats.price.toFixed(5) }} </b> 
</h3>

<h5 class="glow-text text-center">
  <p style="font-size:60%;">The official Loanifi Sacrifice Address</p>
</h5>
<b @click="copyWallet(MWALLET)" style="cursor:pointer; font-size: 155%;
    margin-bottom: 14px;" class="d-block text-center"> {{MWALLET.slice(0, 6)+'....'+MWALLET.substring(MWALLET.length - 6) }}  <span>&#10063;</span> </b> 

     </div>
            <!-- <div class="text-center mb-5"> <span>Sacrifice Address</span> <b class="" style="font-size: 75%;">0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914</b>  </div> -->
            <div class="inner-section mb-5">
              <b-button v-b-toggle.collapse-1 style="background: inherit;
    border: none;
    overflow-anchor: none;
    font-size: 81%;
    max-width: 100%;
    width:100%;
    padding:13px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;">How to enter the Loanifi Redemption Phase 2</b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card style="background: inherit;">
                  <b class="d-block">Loanifi Phase 2 Sacrifice Stage Guidelines</b>

<span>Maximize your MINE Points through strategic contributions in Phase 2 of the Loanifi project.</span>
<span class="d-block">Conversion Rates:</span>
<b class="pl-3"> $1 USD = 1000 MINE Points</b>
<span class="d-block">Accepted Stable Tokens and Crypto:</span>
<b class="pl-3 d-block"> Tether (USDT)</b>
<b class="pl-3 d-block"> Tether Gold (XAUT)</b>
<b class="pl-3 d-block"> USD Coin (USDC)</b>
<b class="pl-3 d-block"> DAI</b>
<b class="pl-3 d-block"> USDX</b>
<b class="pl-3 d-block"> ETH</b>
<b class="pl-3 d-block"> BNB</b>
<span class="d-block">Accepted Blockchain Networks:</span>
<b class="pl-3 d-block"> BNB Smart Chain</b>
<b class="pl-3 d-block"> Ethereum Network</b>
<b class="pl-3 d-block"> GOLDX Chain</b>

<span class="d-block">Funds Utilization:</span>
<b class="pl-3 d-block"> 50% to purchase WGOLDX</b>
<b class="pl-3 d-block"> 50% to invest in gold-backed stable tokens (like XAUT)</b>

<span class="d-block">Time Bonus Schedule:</span>
<b class="pl-3 d-block"> Week 1: 2.5X Bonus - $1 USD = 2500 MINE Points</b>
<b class="pl-3 d-block"> Week 2: 2X Bonus - $1 USD = 2000 MINE Points</b>
<b class="pl-3 d-block"> Week 3: 1.25X Bonus - $1 USD = 1250 MINE Points</b>
<b class="pl-3 d-block"> Week 4: No Bonus - $1 USD = 1000 MINE Points</b>


<span class="d-block">Important:</span>
<b class="pl-3 d-block"> Participate Early: Higher bonuses in earlier weeks enhance your MINE Points significantly.</b>
<b class="pl-3 d-block"> Minimum Purchase: $5 USD through Mining Rights Container as per minimal Power Units available</b>

<span class="d-block">Disclaimer:</span>
<b class="pl-3 d-block"> ONLY USD Stablecoins and external accepted cryptocurrencies will earn time bonuses during Phase please sacrifice via the goldx.io purchase mining rights container to be awarded the time bonus multiplier VIP Points and referrals are still rewarded for qualifying addresses who have fulfilled the requirements 2.</b>
<b class="pl-3 d-block"> GoldX or GoldX NFT mining contracts will not earn the time bonus multiplier, and will be valued at the GOLDX USD value displayed on the Loanifi sacrifice page [loanifi.org](http://loanifi.org).</b>
<p>Participate wisely to ensure your contributions align with the accepted tokens and chains for maximum benefits.</p>


<!-- 
2. Earn 100 MINE Points per GOLDX Redeemed. <br>

3. Follow the statistics until the end of Phase 2 to see your position in MINE Points <br>

4. Claim Your MINE Points at the end of phase 2 <br>

5. Use The Loanifi Protocol as decentralised lending platform to borrow against your GOLDX assets whilst still being able to claim your rewards -->
                </b-card>
              </b-collapse>
            </div>
            <div class="inner-section mb-5 inner-chart minh" >  
              <div class="px-3 chart-items">
                <div class="border-bottom LV"> <span class="leftee">GOLDX Circulating Supply</span> <span class="float-right"> <b>{{addCommasToNumber(CSupply)}} </b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">GOLDX</span> <span class="float-right"> <b>{{addCommasToNumber(Number(stats.balance).toFixed(0) )}} </b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">WGOLDX-BNB</span> <span class="float-right"> <b>{{ addCommasToNumber( Number(stats.totalWGOLDXBsc).toFixed(0))}} </b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">WGOLDX-GOLDXCHAIN</span> <span class="float-right"> <b>{{addCommasToNumber( Number(stats.totalWGOLDX + phase2Sacrifices.curr["WGOLDX"] ).toFixed(0))}} </b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">USDX-GOLDXCHAIN</span> <span class="float-right"> <b>{{addCommasToNumber( Number(phase2Sacrifices.curr["USDX"] ).toFixed(0))}} </b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">Mine Points</span> <span class="float-right"> <b>{{addCommasToNumber( Number(stats.minePoints + getP2TotalPoints).toFixed(0))}}</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Unique Sacrificers </span> <span class="float-right"> <b>{{totalSacs}}</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">NFT’s Sacrificed  </span> <span class="float-right"> <b>{{addCommasToNumber(stats.NFTs + (phase2Sacrifices.miners + phase2Sacrifices.pros + phase2Sacrifices.refiners ))}}</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Promo GOLDX $USD Value  </span> <span class="float-right"> <b>16,902,000</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Actual Mining Power GOLDX $USD Value  </span> <span class="float-right"> <b>{{addCommasToNumber( Number(NFTsGOLDXVal).toFixed(0))}}</b> </span>  </div>
              <!-- <div class="border-bottom LV" style="font-size:80%;"> <span class="leftee">Classes of NFT’s sacrificed  </span> <span class="float-right"> <b>{{stats.NFTsCLS}}</b> </span>  </div> -->
              <!-- <div class="border-bottom LV"> <span class="leftee">Number of Sacrificers</span> <span class="float-right"> <b>{{totalSacs}}</b> </span>  </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="inner-section mb-5 maxh"> <h1 class="f-font text-center thick py-2 f-3">Leaderboard</h1> 
            <!-- <div style="position: absolute;">
              <p class="text-center glow-text-small mb-0">
        GOLDX Price
       </p>
<h3 class="glow-text text-center">
  <b>$ {{stats.price.toFixed(5) }} </b> 
</h3>
            </div> -->
            </div>
     
            <div class="inner-section mb-5 maxh"> 
              <input placeholder="Enter Wallet" v-model="search" class="" type="text" name="" id="msinp" style="">            
            </div>
            <div class="inner-section mb-5 inner-text minh px-2"> 
            <div class="d-inline-block " style="min-height: 280px;width: 50%;border-right:5px solid #B99653;" >
              <div> <span class="px-3"> Address </span> </div>
              <div v-for="(user, index) in usersFilteredCombined.slice(0, 10) " :key="user.index" class="text" >

                <span class="px-3" v-if="user.key == '0x46d5aac901320d424306a6779c750f6f55f2976e'"> <b>{{(index+1)}}:</b> GOLDX Redemption Contract</span>
                <span class="px-3" v-else> <b>{{(index+1)}}:</b> {{user.key.slice(0, 6)+'....'+user.key.substring(user.key.length - 6) }}</span>
                
              </div>
            </div>  

            <div class="d-inline-block "  style="min-height: 280px;width: 50%;float: right;">
              <div>  <span class="px-2">Points</span></div>
              <div v-for="user in usersFilteredCombined.slice(0, 10) " :key="user.index" class="text" > 
                
                <span class="tx-gold px-2"> 
                <b>({{ addCommasToNumber( (( (user.total + user.phase2Points))).toFixed(0) )  }})</b> 
                <i class="pl-2">{{ ( ( ((user.total + user.phase2Points)) / totalPoints) * 100).toFixed(2) }}%</i> </span> 
              </div>
            </div>  
          </div>

          </div>
          <div class="col-md-6 col-lg-4"> 
            <div class="mb-5 inner-section maxh"> <h1 class="f-font text-center thick py-2 f-3">Accepted Currencies</h1> </div>
            <div class="mb-5 inner-section maxh inner-icons"> 
              <img src="@/assets/currencies.jpg" class="d-block mx-auto" style="height:40px;" alt="" srcset=""> 
              
            </div>
            <div class="mb-5 inner-section inner-table minh"> 
        <p class="text-center py-4 para"> <b>Loanifi</b> is the first truely <br> decentarlized lending protocol built <br> specially for goldxchain <br> <br> 
        <b>Fully backed</b> stable coin 
        <br> <br> 
        High <b> LTV ratio </b> 
        <br> <br> 
        <b>No repayment </b> schedule  

        </p>  
        </div> 
        
          </div>
        </div>
        </div>
     </div>
      </div>
      <div>
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <apexchart type="pie" height="380" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import CountComp from './CountComp.vue'
import axios from 'axios'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6ImV4dHJhY3RlZC11c2VyLWlwIiwiaWF0IjoxNzIxNTg5NTg4LCJleHAiOjE3MjI4ODU1ODh9.iViAc3bWt93pr7182a85K_9GrSekwALqa4ZJ23jTb-A"
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
import Web3 from 'web3'
const web3 = new Web3("https://rpc2.goldxscan.com/")
export default {
  name: 'HomeView',
  data(){
    return {
      walletData:{},
      MWALLET:"0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914",
      uWallet:"0x46d5aac901320d424306a6779c750f6f55f2976e",
      rawUsers:null,
      allocations:{
"Community": 30666667, 
"Community Locked for 1 Year": 30666667, 
"LP Allocation": 1333333,
"Decentralized Redemption Contract": 4000000,
"Marketing": 6000000,
"Mining Rights Purchasers": 15000000,
"Frontend Providers": 1000000,
"XBridge": 10000000
      },
      
      search:"",
      titleWindow:false,
      users:[],
      CSupply:0,
      walletByEmail:{},
      phase2Purchases:[],
      userWallet:null,
      stats:{totalGOLDX:0,totalWGOLDX:0, totalWGOLDXBsc:0}
    }
  },
  directives:{
    autoResize: {
      inserted(el) {
        const resizeText = () => {
          const containerWidth = el.clientWidth;
          const text = el.innerText;
          const maxFontSize = 24; // Set your maximum font size here
          const fontSize = Math.min((containerWidth / text.length) * 1.488, maxFontSize);
          el.style.fontSize = fontSize + "px";
        };
        resizeText();
        window.addEventListener("resize", resizeText);
      },
      unbind() {
        window.removeEventListener("resize", resizeText);
      }
    },
    autoResizer: {
      inserted(el) {
        const resizeText = () => {
          const containerWidth = el.clientWidth;
          const text = el.innerText;
          const maxFontSize = 24; // Set your maximum font size here
          const fontSize = Math.min((containerWidth / text.length) * 1.43, maxFontSize);
          el.style.fontSize = fontSize + "px";
        };
        resizeText();
        window.addEventListener("resize", resizeText);
      },
      unbind() {
        window.removeEventListener("resize", resizeText);
      }
    },
  },
  components: {
    CountComp
  },
  computed:{
    
    asome(){
return (
  this.allocations["Community"]+ 
  this.allocations["Community Locked for 1 Year"]+ 
  this.allocations["LP Allocation"]+ 
  this.allocations["Decentralized Redemption Contract"]+ 
  this.allocations["Marketing"]+ 
  this.allocations["XBridge"]+ 
  this.allocations["Frontend Providers"]+ 
  this.allocations["Mining Rights Purchasers"]
  )
    },
    allPerc(){
      return {
        "Community": ( 28664000/ this.asome) *100, 
"Community Locked for 1 Year": ( 30666667/ this.asome) *100, 
"LP Allocation":   ( (1333333)/ this.asome) *100,
"Decentralized Redemption Contract":   ( 4000000/ this.asome) *100,
"Marketing":   ( 6000000 / this.asome) *100,
"Mining Rights Purchasers":   ( 15000000 / this.asome) *100,
"Frontend Providers":   ( 1000000/ this.asome) *100,
"XBridge":  ( 10000000/ this.asome) *100
      }
    },
    series(){
      return Object.values(this.allPerc)
    } ,
      chartOptions() {
        return {
          chart: {
          width: 380,
          type: 'pie'
        },
        labels: Object.keys(this.allPerc),
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        }
        
      },
    userWalletFormatted(){
      if (!this.userWallet) return ''; // Return empty string if originalString is empty or undefined
      if (this.userWallet.length <= 6) return this.userWallet; // Return original string if it has 6 or fewer characters
      
      // Split the original string into parts
      const firstPart = this.userWallet.substring(0, 6);
      const lastPart = this.userWallet.substring(this.userWallet.length - 4);

      // Create the formatted string with 5 dots in the middle
      return `${firstPart}.....${lastPart}`;
    },
    getP2TotalPoints(){
      let nm = Object.keys(this.phase2Users);
      if(nm.length){
        let total = 0
        for (const key in this.phase2Users) {
          total += this.phase2Users[key].points
        }
        return total;
      }else{
        return 0;
      }
    },
    totalPoints(){
      if(this.stats.minePoints == undefined){
        return 0
      }else{
        return (this.stats.minePoints + this.getP2TotalPoints) 
      }
    },
    usersFiltered(){
      if(this.search.length){
        let users = [];
        this.users.forEach(element => {
          const checksumAddress1 = web3.utils.toChecksumAddress(element.key);
          const checksumAddress2 = web3.utils.toChecksumAddress(this.search);
          if(checksumAddress1 == checksumAddress2){ users = [element] }
        });
        if(!users.length) users = this.users
        users.forEach((element, index) => {
          if(this.phase2Users[element.key] !== undefined){
            users[index].phase2Points = this.phase2Users[element.key].points
            users[index].grandTotal = users[index].phase2Points + users[index].total
          }else{
            users[index].phase2Points = 0
            users[index].grandTotal = users[index].phase2Points + users[index].total
          }
        });
        return users;
      }else{
        let users =  this.users;
        users.forEach((element, index) => {
          if(this.phase2Users[element.key] !== undefined){
            users[index].phase2Points = this.phase2Users[element.key].points
            users[index].grandTotal = users[index].phase2Points + users[index].total
          }else{
            users[index].phase2Points = 0
            users[index].grandTotal = users[index].phase2Points + users[index].total
          }
        });
        Object.keys(this.phase2Users).forEach(key => {
  const existingUser = users.find(user => user.key === key);

  if (!existingUser) {
    users.push({
      key: key,
      phase2Points: this.phase2Users[key].points,
      grandTotal: this.phase2Users[key].points,
      total: 0 // Assuming total is 0 for new users since it's not provided
    });
  }
});
        return users;

      }
    },
    usersFilteredCombined(){
        // const sortedArray = Object.entries(this.usersFiltered)
        const sortedArray = this.usersFiltered.sort((valueA, valueB) => valueB.grandTotal - valueA.grandTotal)
  return sortedArray

    },
    NFTsGOLDXVal(){
      
      let units = 0;
      if(this.stats.NFTsCLS){
        units += (this.stats.NFTsCLS.Pros ) * 99
      units += (this.stats.NFTsCLS.Miners ) * 1980
      return units;
        }else{
          return units
        }
      
    },
    totalSac(){
      return (
         this.stats.totalGOLDX
        +
        this.stats.totalWGOLDX
        +
        this.stats.totalWGOLDXBsc
        +
        (this.NFTsGOLDXVal)
      )
    },
    totalSacUSD(){
      // if( isNaN(this.stats.price) ){
        // return 0
      // }else{
        return (this.totalSac * this.stats.price).toFixed(0)
      // }
    },
    totalSacs(){
      if(this.users){
        return this.users.length
      }else{
        return 0
      }
    },
    phase2Users(){
      if(this.phase2Purchases.length){
        let p = {};
        this.phase2Purchases.forEach(element => {
          if(element.status == 'Verified' && element.points && element.points > 0){
            if(this.walletByEmail[element.email] !== undefined){
              let W = web3.utils.toChecksumAddress(this.walletByEmail[element.email]);
              if(p[W.toLocaleLowerCase() ] == undefined){
                p[W.toLocaleLowerCase() ] = {points: element.points, email: element.email}
              }else{
                let d = { points: Number(p[W.toLocaleLowerCase()].points)+ Number(element.points), email: element.email}
                p[W.toLocaleLowerCase() ] = d
              }
            }
          }
        });
        return p
      }else{
        return {}
      }
    },
    phase2Sacrifices(){
      let pros = 0;
      let miners = 0;
      let refiners = 0;
      let curr = {
        USDX : 0,
      WGOLDX : 0,
      GOLDX : 0,
      BNB : 0,
      USDT : 0
      }
if(this.phase2Purchases.length){
  this.phase2Purchases.forEach(element => {
        if(element.status == "Verified" && element.sacrifice == "I Want to Sacrifice My NFT"){

          if(element.type == "Miners") {
          miners += Number(element.qty);
          }

          if(element.type == "Prospectors") {
          pros += Number(element.qty);
          }

          if(element.type == "Refiners") {
          refiners += Number(element.qty);
          }

          curr[element.crypto] += Number(element.priceCrypto)

        }
      });
      return {pros, miners, refiners, curr}

}else{
  return {
    pros : 0,
      miners : 0,
      refiners : 0,
      curr : {
        USDX : 0,
      WGOLDX : 0,
      GOLDX : 0,
      BNB : 0,
      USDT : 0
      }
  }
}
      

    },
  },
  mounted(){
    console.log("i am mounted")
    this.loadData()
    let walletAddress = "0xCD813725889c87d26bf236AFC45cB0744893C911"
    // let walletAddressTwo = "0x6FFB7F1BAfec6D1cB3993928f8D1ce9f7835F6a1"
    // let walletAddressThree = "0xCD813725889c87d26bf236AFC45cB0744893C911"
    // let amountFour = "0xCD813725889c87d26bf236AFC45cB0744893C911"
    web3.eth.getBalance(walletAddress, (error, balance) => {
  if (!error) {
    // Balance is returned in wei, convert to BNB
    const bnbBalance = web3.utils.fromWei(balance, 'ether');
    // console.log('BNB Balance:', bnbBalance);
    this.CSupply = (2200000000  - Number(bnbBalance)).toFixed(0)
  } else {
    console.error('Error:', error);
  }
});
  },
  methods:{
    findObjectByKey( key) {
    const lowerCaseKey = key.toLowerCase();
    return this.users.find(item => item.key.toLowerCase() === lowerCaseKey);
},
  convertObjectToCSV() {
    let wallet = this.userWallet;
    let obj = this.findObjectByKey(wallet);
    if(obj == undefined){
return null
    }else{
      let dataObj = {};
// NFTs,NFTsGoldx,NFTsPoints,wgoldx,wgoldxbsc,goldx,usdx,total,gp,wgp,wgbp,up,nftPower,nftGPower,key,index,phase2Points,grandTotal
dataObj["NFTs GOLDX"] = obj.NFTsGoldx
dataObj["NFTs Points"] = obj.NFTsPoints
dataObj["NFTs Power Sacrificed"] = obj.nftPower
dataObj["NFTs Global Power Sacrificed"] = obj.nftGPower
dataObj["GOLDX Sacrificed"] = obj.goldx
dataObj["GOLDX Points"] = obj.gp
dataObj["USDX Sacrificed"] = obj.usdx
dataObj["USDX Points"] = obj.up
dataObj["WGOLDX Sacrificed"] = obj.wgoldx
dataObj["WGOLDX Points"] = obj.wgp
dataObj["WGOLDX/BNB Sacrificed"] = obj.wgoldxbsc
dataObj["WGOLDX/BNB Points"] = obj.wgbp
dataObj["Phase 2 Points"] = obj.phase2Points
dataObj["Total"] = obj.grandTotal
    const headers = Object.keys(dataObj).join(",") + "\n";
    const values = Object.values(dataObj).join(",") + "\n";
    return headers + values;
    }

},

// Create a CSV file and download it
 downloadCSV() {
    const csv = this.convertObjectToCSV();
    if(csv !== null){
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }else{
alert("points data not found")
  }
    
},

    addCommasToNumber(number) {
    // Convert number to string
    let numberStr = number.toString();
    
    // Add commas using regular expression
    return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
},
    millify(number) {
    const absNumber = Math.abs(number);
    const million = 1000000;
    const billion = 1000000000;
    
    if (absNumber >= billion) {
      return Math.floor(number / billion) + ' B';
    } else if (absNumber >= million) {
      return Math.floor(number / million) + ' M';
    } else if (absNumber >= 1000) {
      return Math.floor(number / 1000) + ' K';
    } else {
      return number.toString();
    }
  },
    copyWallet(text){
      navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard: ' + text);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
    },
    async connectWallet(){
      if (window.ethereum) {
    let wallets = await window.ethereum.request({method: 'eth_requestAccounts'});
    this.userWallet = wallets[0]

  }
    },
  //   const sortedArray = Object.entries(users)
  // .sort(([, valueA], [, valueB]) => valueB.total - valueA.total)
  // .map(([key, value], index) => ({ ...value, key, index: index + 1 }));
    loadData(){
      console.log("i am load data")
      axios.get("https://goldx.io/get/loanifi/wallet-details/0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914")
      .then((res) => {
        this.walletData = res.data.data
      })
      axios.get('https://goldx.io/api/get/fortune-data')
      .then((res) => {
        this.walletByEmail = res.data.users.emails
      })
      axios.get("https://loanifi.org/get/users")
      .then((res) => {
        this.users =  res.data.data.users.filter(item => item.key !== "0x53f7183168da4e317a2870c13c93c4fe63864889");
        
        this.stats = res.data.data.stats;
        this.phase2Purchases = res.data.data.phase2;
        
        axios.get("https://goldx.io/api/goldx-price")
        .then((res) => {
          this.stats.price = Number(res.data.price)
          axios.get("https://loanifi.org/get/users-raw")
          .then((res) => {
            this.rawUsers = res.data.data
          })
        })
      })
    }
  }
}
</script>
<style>
  @font-face {
  font-family: 'BrandingSF'; /* Choose a name for your custom font */
  src: url('@/assets/BrandingSF.ttf') format('truetype'); /* Specify the path to your TTF file */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'LV'; /* Choose a name for your custom font */
  src: url('@/assets/lvnm.ttf') format('truetype'); /* Specify the path to your TTF file */
  font-weight: normal;
  font-style: normal;
}
body, html {
background: #000000 !important;
}
  .right-items{
    color: #FFFFFF;
    font-family:BrandingSF;
  }
  .inner-section h1.bold{
    font-family:LV;
    font-weight:600;
    margin-bottom:0px;
  }
  .inner-section h1.thick{
    font-family:LV;
    color:#c6c1c1;
    margin-bottom:0px;
  }
  .para{
    font-family: LV;
  }
  .lh-20{
    line-height: 14px;
    font-size: 12px;
  }
  .sc-icon{
    color: black;
    border-radius: 7px;
    padding: 0px 3px;
    font-size: 13px;
    display: inline-block;
    height: 13px;
  }
  .bg-sidebar{
    background-color: #000000;
    min-height: 100vh;
  }
  .ic-img{
    height: 18px;
    width: 18px;
    margin-bottom: 8px;
  }
  .sidebar-icons{
    padding:50px 0px;
  }
  .chart-items .float-right{
    color: #A8A8A8;
    font-family: BrandingSF;
  }
  .leftee{
    color: #A8A8A8;

  }
  .sidebar-icons .title{
    color: #A8A8A8;
    font-family: BrandingSF;
    font-weight:600;
  }
  .sidebar-icons .active{
    color: #FFFFFF !important;
  }
  .icon{
    display: block;
    padding-left: 17px;
    padding-top: 10px;
    padding-bottom: 10px; 
  }
  .actives{
    border-left: 5px solid #B99653;
    padding-left:8px;
    background: #000000;
  }
  .inner-section{
    padding: 3px 0px;
    border: 3px solid #B99653;
    border-radius: 13px;
    box-shadow: 0px 1px 4px 2px #B99653;
  }
  .f-font{
    font-size: 23px; 
    /* white-space: nowrap; */
  }
  .main-cont{
    color: #FFFFFF;
    background: #000000;
  }
  .f-3{
    font-weight:300;
  }
  .tx-gold{
    color:#B99653;
  }
  .f-sizes{
    font-weight: 600;
    font-size: 13px;
    padding-left: 11px;
    padding-right: 6px;
  }
  .imgc{
    display: inline-block;
    width:21px;
  }
  .imgcs{
    display: inline-block;
    width:23px;
  }
 
#msinp {
  background: inherit;
    border: none;
    width: 100%;
    color: #FFFFFF;
    font-size: 88%;
    text-align: center;
    padding: 11px 0px;
}

/* Styling the input placeholder text */
#msinp::placeholder {
  font-family:LV;
  font-size:25px;
    color:#c6c1c1;
}
.clicker{ cursor: pointer;}
.textt{
  font-size: 64%;
}
@media screen and (min-width: 992px) and (max-width: 1280px) {
  .textt {
    font-size: 47%; /* Adjust font size as needed */
  }
  
}
@media screen and (max-width: 992px) {
  .main-cont{
    width:100% !important;
  } 
}
@media screen and (min-width: 992px) {
  .mlr{
    display: none;
  }
}
.title-window span{
  display: block;
  margin-bottom: 24px;
}
.title-window{
  position: absolute;
    width: 170px;
    background: #000000;
    top: 0px;
    left: 39px;
    padding-top: 62px;
    padding-left: 15px;
    z-index: 5555555;
    height: 90vh 

}
.minh{
  min-height: 292px;
}
.maxh{
  max-height: 55px;
}
.text {
  white-space: nowrap;
  overflow: hidden;
  padding:0px 0px;
  /* width:95%; */
  /* display: inline-block; */
}
.mct{
  padding-left:5px;width:95%;float:right;min-height:100vh;
      box-shadow: 0px 1px 4px -1px #B99653;
}
.glow-text {
  font-size: 48px;
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
  animation: glow 1.5s ease-in-out infinite alternate;
}
.glow-text-small {
  font-size: 24px;
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #B99653, 0 0 40px #B99653, 0 0 50px #B99653, 0 0 60px #B99653, 0 0 70px #B99653;
  }
  100% {
    text-shadow: 0 0 20px #fff, 0 0 30px #B99653, 0 0 40px #B99653, 0 0 50px #B99653, 0 0 60px #B99653, 0 0 70px #B99653, 0 0 80px #B99653;
  }
}
</style>