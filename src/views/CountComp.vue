<template>
    <div id="countdown">
  <div id="tiles"><span>{{countdown.days}}</span><span>{{countdown.hours}}</span><span>{{countdown.minutes}}</span><span>{{countdown.seconds}}</span></div>
  <div class="labels">
    <li>Days</li>
    <li>Hours</li>
    <li>Mins</li>
    <li>Secs</li>
  </div>
</div>
  </template>
  
  <script>
  export default {
    props: {
      startDate: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        countdown: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      };
    },
    mounted() {
      this.calculateCountdown();
      setInterval(() => {
        this.calculateCountdown();
      }, 1000); // Update countdown every second
    },
    methods: {
      calculateCountdown() {
    const start = new Date(this.startDate);
    
    // Set endDate to tonight at midnight UTC
    const now = new Date();
    const endDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    
    // Add 1 day to endDate to make it tomorrow at midnight UTC
    endDate.setUTCDate(endDate.getUTCDate() + 1);
    
    const difference = endDate.getTime() - now.getTime();
    
    if (difference > 0) {
        this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
        this.countdown = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
}

      // calculateCountdown() {
      //   const start = new Date(this.startDate);
      //   const endDate = new Date(start.getTime() + (30 * 24 * 60 * 60 * 1000));
      //   const now = new Date();
      //   const difference = endDate.getTime() - now.getTime();
      //   if (difference > 0) {
      //     this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      //     this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      //     this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      //     this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      //   } else {
      //     this.countdown = {
      //       days: 0,
      //       hours: 0,
      //       minutes: 0,
      //       seconds: 0
      //     };
      //   }
      // }
    }
  };
  </script>
  <style scoped>
  /* body {
  font: normal 13px/20px Arial, Helvetica, sans-serif;
  word-wrap: break-word;
  color: #eee;
  background: #353535;
} */
#countdown {
    width: 348px;
    height: 112px;
    text-align: center;
    background: #222;
    background-image: -o-linear-gradient(top, #222, #333, #333, #222);
    border: 1px solid #111;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
    margin: auto;
    padding: 24px 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

#countdown:before {
  content: "";
  width: 8px;
  height: 65px;
  background: #444;
  background-image: -webkit-linear-gradient(top, #555, #444, #444, #555);
  background-image: -moz-linear-gradient(top, #555, #444, #444, #555);
  background-image: -ms-linear-gradient(top, #555, #444, #444, #555);
  background-image: -o-linear-gradient(top, #555, #444, #444, #555);
  border: 1px solid #111;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  display: block;
  position: absolute;
  top: 48px;
  left: -10px;
}

#countdown:after {
  content: "";
  width: 8px;
  height: 65px;
  background: #444;
  background-image: -webkit-linear-gradient(top, #555, #444, #444, #555);
  background-image: -moz-linear-gradient(top, #555, #444, #444, #555);
  background-image: -ms-linear-gradient(top, #555, #444, #444, #555);
  background-image: -o-linear-gradient(top, #555, #444, #444, #555);
  border: 1px solid #111;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  display: block;
  position: absolute;
  top: 48px;
  right: -10px;
}

#countdown #tiles {
  position: relative;
  z-index: 1;
}

#countdown #tiles > span {
    width: 60px;
    max-width: 60px;
    font: bold 28px "Droid Sans", Arial, sans-serif;
    text-align: center;
    color: #111;
    background-color: #ddd;
    background-image: -o-linear-gradient(top, #bbb, #eee);
    border-top: 1px solid #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.7);
    margin: 0 7px;
    padding: 8px 0;
    display: inline-block;
    position: relative;
}

#countdown #tiles > span:before {
  content: "";
  width: 100%;
  height: 13px;
  background: #111;
  display: block;
  padding: 0 3px;
  position: absolute;
  top: 41%;
  left: -3px;
  z-index: -1;
}

#countdown #tiles > span:after {
  content: "";
  width: 100%;
  height: 1px;
  background: #eee;
  border-top: 1px solid #333;
  display: block;
  position: absolute;
  top: 48%;
  left: 0;
}

#countdown .labels {
  width: 100%;
  height: 25px;
  text-align: center;
  position: absolute;
  bottom: 8px;
}

#countdown .labels li {
    width: 75px;
    font: bold 15px "Droid Sans", Arial, sans-serif;
    color: #B99653;
    text-shadow: 1px 1px 0px #000;
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
}

  </style>