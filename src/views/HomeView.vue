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
          <span class="float-right px-3 lh-20 d-none d-md-inline-block"> Connected as <br> 0Xdsg..sdf6 <span class="bg-white sc-icon">&#x00d7;</span> </span>  
          <span class="px-3 lh-20 d-block d-md-none"> Connected as 0Xdsg..sdf6 <span class="bg-white sc-icon">&#x00d7;</span> </span>  
          <span class="float-right d-none d-md-inline-block">
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
        <div class="row">
          <div class="col-md-6 col-lg-4 p-3 my-2"> <div class="inner-section"> <h1 class="f-font text-center bold py-2">Sacrifice Now Live</h1> </div> </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> <div class="inner-section"> <h1 class="f-font text-center thick py-2 f-3">Leaderboard</h1> </div> </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> <div class="inner-section"> <h1 class="f-font text-center thick py-2 f-3">Accepted Currencies</h1> </div> </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> <div class="text-center"> <span>Sacrifice Address</span> <b class="" style="font-size: 75%;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</b>  </div> </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> <div class="inner-section"> <h1 class="f-font f-3 text-center thick py-2">Enter Wallet</h1> </div> </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> 
            <div class="inner-section inner-icons"> <img src="@/assets/currencies.jpg" style="    max-width: 97%;
              margin-left: 1%;" alt="" srcset=""> </div>
          </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> 
            <div class="inner-section inner-chart">  
              <div class="px-3 chart-items">
                <div class="border-bottom LV"> <span class="leftee">Total Sacrificed</span> <span class="float-right"> <b>1,388,878.99 USD</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Total Sacrificed($)</span> <span class="float-right"> <b>633,837 K</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Rate per 1$ Sacrificed</span> <span class="float-right"> <b>100 Points</b> </span>  </div>
              <div class="border-bottom LV"> <span class="leftee">Number of Sacrificers</span> <span class="float-right"> <b>3183</b> </span>  </div>
              </div>
            </div> </div>
          <div class="col-md-6 col-lg-4 p-3 my-2"> 
          <div class="inner-section inner-text"> 
            <div><div class="d-inline-block tx-gold f-sizes">1</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">2</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">3</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">4</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">5</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">6</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">7</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">8</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">9</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">10</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">11</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

            <div><div class="d-inline-block tx-gold f-sizes">12</div> 
            <div class="d-inline-block" style="font-size:75%;font-weight:500;">0xBbDC165A49D0eCc847D762A4310a268EC0294B44</div></div>

          </div> 
        </div> 
        <div class="col-md-6 col-lg-4 p-3 my-2"> <div class="inner-section inner-table"> 
        <p class="text-center py-4 para"> <b>Loanifi</b> is the first truely <br> decentarlized lending protocol built <br> specially for goldxchain <br> <br> 
        <b>Fully backed</b> stable coin 
        <br> <br> 
        Low <b>110% collateral </b> ratio
        <br> <br> 
        <b>No repayment </b> schedule  

        </p>  
        </div> </div>
        </div>
        </div>
      </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
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

</style>