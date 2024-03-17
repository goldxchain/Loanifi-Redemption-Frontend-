<template>

<div class="">
    <b-navbar toggleable="lg" style="background-color: #1E1E1E;">
      
    <b-navbar-toggle target="nav-side"></b-navbar-toggle>

    <b-navbar-brand href="#"><img src="@/assets/logo.png" alt="" style="max-height: 30px;
        margin-left: 10px;"></b-navbar-brand>      
    
      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <ul class="navbar-nav mr-auto">
          
          <p class="float-right mb-0 px-3 lh-20"><b>Other Assets</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>MINE</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>USDX</b> <br> <span>0.00</span> </p>
        </ul>
        <div class="right-items">
          <p class="float-right mb-0 px-3 lh-20"><b>Other Assets</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>MINE</b> <br> <span>0.00</span> </p>
          <p class="float-right mb-0 px-3 lh-20"><b>USDX</b> <br> <span>0.00</span> </p>
          <span class="float-right"> <img src="@/assets/wallet.png" style="max-width: 20px;
            margin-top: 0px;" alt=""> </span>
          <span v-if="userWallet" class="float-right px-3 lh-20 d-none d-md-inline-block"> Connected as <br> {{userWalletFormatted}} <span class="bg-white sc-icon">&#x00d7;</span> </span>  
          <span v-else class="float-right px-3 lh-20 d-none d-md-inline-block clicker" @click="connectWallet"> Connect<br> Wallet </span>  
          <span v-if="userWallet" class="px-3 lh-20 d-block d-md-none"> Connected as {{userWalletFormatted}} <span class="bg-white sc-icon">&#x00d7;</span> </span>  
          <span v-else class="px-3 lh-20 d-block d-md-none clicker" @click="connectWallet"> Connect Wallet </span>  
          <span v-if="userWallet" class="float-right d-none d-md-inline-block">
            <img src="@/assets/user.png" style="max-width: 20px;margin-top: 0px;" alt="">
          </span>
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
      
      <div class="col-lg-2 bg-sidebar px-0 d-none d-lg-block">
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
      </div>
      <div class="col-lg-10 main-cont">
        <div class="row mt-5">
          <div class="col-md-6 col-lg-4">
            <div class="inner-section mb-5"> <h1 class="f-font text-center bold py-2">Sacrifice Now Live</h1> </div>
            <div class="text-center mb-5"> <span>Sacrifice Address</span> <b class="" style="font-size: 75%;">0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914</b>  </div>
            <div class="inner-section mb-5 inner-chart">  
              <div class="px-3 chart-items">
                <div class="border-bottom LV"> <span class="leftee">Sacrificed($)</span> <span class="float-right"> <b>{{totalSacUSD}}</b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">GOLDX</span> <span class="float-right"> <b>{{totalSac}} GOLDX</b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">WGOLDX-BNB</span> <span class="float-right"> <b>{{stats.totalWGOLDXBsc}} GOLDX</b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">WGOLDX-GOLDXCHAIN</span> <span class="float-right"> <b>{{stats.totalWGOLDX}} GOLDX</b> </span>  </div>
                <div class="border-bottom LV"> <span class="leftee">Mine Points</span> <span class="float-right"> <b>{{stats.minePoints}} GOLDX</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Unique Sacrificers </span> <span class="float-right"> <b>{{totalSacs}}</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">NFT’s Sacrificed  </span> <span class="float-right"> <b>{{stats.NFTs}}</b> </span>  </div>
              <!-- <div class="border-bottom LV"> <span class="leftee">Number of Sacrificers</span> <span class="float-right"> <b>{{totalSacs}}</b> </span>  </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="inner-section mb-5"> <h1 class="f-font text-center thick py-2 f-3">Leaderboard</h1> </div>
            <div class="inner-section mb-5"> 
              <input placeholder="Enter Wallet" v-model="search" class="" type="text" name="" id="msinp" style="">            
            </div>
            <div class="inner-section mb-5 inner-text"> 
            <div v-for="user in usersFiltered.slice(0, 10) " :key="user.index">
              <div class="d-inline-block tx-gold f-sizes">{{user.index}}</div> 
            <div class="d-inline-block" style="font-size:64%;font-weight:500;">{{user.key}} ({{user.total * 100 }})</div>
          </div>
          </div>

          </div>
          <div class="col-md-6 col-lg-4"> 
            <div class="mb-5 inner-section"> <h1 class="f-font text-center thick py-2 f-3">Accepted Currencies</h1> </div>
            <div class="mb-5 inner-section inner-icons"> <img src="@/assets/currencies.jpg" style="    max-width: 97%;
              margin-left: 1%;" alt="" srcset=""> 
            </div>
            <div class="mb-5 inner-section inner-table"> 
        <p class="text-center py-4 para"> <b>Loanifi</b> is the first truely <br> decentarlized lending protocol built <br> specially for goldxchain <br> <br> 
        <b>Fully backed</b> stable coin 
        <br> <br> 
        Low <b>110% collateral </b> ratio
        <br> <br> 
        <b>No repayment </b> schedule  

        </p>  
        </div> 
          </div>
        </div>
        </div>
      </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'HomeView',
  data(){
    return {
      search:"",
      users:[],
      userWallet:null,
      stats:{totalGOLDX:0,totalWGOLDX:0, totalWGOLDXBsc:0}
    }
  },
  components: {
  },
  computed:{
    userWalletFormatted(){
      if (!this.userWallet) return ''; // Return empty string if originalString is empty or undefined
      if (this.userWallet.length <= 6) return this.userWallet; // Return original string if it has 6 or fewer characters
      
      // Split the original string into parts
      const firstPart = this.userWallet.substring(0, 6);
      const lastPart = this.userWallet.substring(this.userWallet.length - 4);

      // Create the formatted string with 5 dots in the middle
      return `${firstPart}.....${lastPart}`;
    },
    usersFiltered(){
      if(this.search.length){
        let users = [];
        this.users.forEach(element => {
          if(this.search == element.key){ users = [element] }
        });
        if(users.length) return users
        else return this.users
      }else{
        return this.users
      }
    },
    totalSac(){
      return (
         this.stats.totalGOLDX
        +
        this.stats.totalWGOLDX
        +
        this.stats.totalWGOLDXBsc
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
  },
  mounted(){
    console.log("i am mounted")
    this.loadData()
  },
  methods:{
    async connectWallet(){
      if (window.ethereum) {
    let wallets = await window.ethereum.request({method: 'eth_requestAccounts'});
    this.userWallet = wallets[0]

  }
    },
    loadData(){
      console.log("i am load data")
      axios.get("/get/users")
      .then((res) => {
        this.users = res.data.data.users;
        this.stats = res.data.data.stats;
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
    background-color: #111111;
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
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px; 
  }
  .actives{
    border-left: 5px solid #B99653;
    padding-left:13px;
    background: #281818;
  }
  .inner-section{
    padding: 3px 0px;
    border: 3px solid #B99653;
    border-radius: 13px;
    box-shadow: 0px 1px 4px 2px #B99653;
  }
  .f-font{
    font-size: 27px; 
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
</style>