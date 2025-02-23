const ENV = "prod";
let cors = require('cors');

const TEST_DB = "mongodb://localhost:27017/fusegbackend";
const PRO_DB = `mongodb+srv://doadmin:k0P19s34E5em2H8U@pro-db-fusegold-54c0a5f4.mongo.ondigitalocean.com/admin?tls=true&authSource=admin`
const express = require('express');
const { getWGOLDXlogs,
getUSDXlogs,getOwnerNFTlogs,fetchKarmaRecords,fetchAndProcessTransactions,
getNFTlogs,getUsersRaw,getSacrificeRecords,updateMissingDates,
    getNLogs,getUsers,getWgoldxBsc,
    getPastTransactions, } = require('./helper');
    const path = require('path');
const app = express();
const port = (ENV == "dev") ? 3000 : 8080;
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));
if(ENV == "dev")
{
  let DB = TEST_DB
  mongoose.connect(DB, {})
  .then(() => { console.log('Test Database connectedsdfsdfsdfdsfsdfsdf!')},
  error => { console.log(error)}
)
}else{
  let DB = PRO_DB
  mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    tls: true,
    // tlsCAFile: path.join(__dirname, '/ca-certificate.crt')
}).then(async () => {
  console.log('Pro Database connected!')
  // await getNFTlogs();
  // updateMissingDates()
  // getOwnerNFTlogs().then((result) => {
  //   console.log("Processed Transactions:", result);
  // });
// getWGOLDXlogs()

      // await getPastTransactions()
      // await getUSDXlogs()
      // await getPastTransactions()
      // await getWgoldxBsc()
},
error => {
    console.log(error)
  }
)
}
// Define a route to get wallet transfers
app.get('/get/users', async (req, res) => {
  let data = await getUsers();
  res.send({data})
});
app.get('/get/karma-rewards', async (req, res) => {
  let data = await fetchAndProcessTransactions();
  res.send({data})
});
app.get('/get/user-karma-rewards/:wallet', async (req, res) => {
  console.log(req.params.wallet)
  let data = await getSacrificeRecords(req.params.wallet);
  res.send({data})
});

app.get('/get/users-raw', async (req, res) => {
  let data = await getUsersRaw();
  res.send({data})
});
app.get('/get/nft-logs', async (req, res) => {
  let data = await getNLogs();
  res.send({data})
});

app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
// getWGOLDXlogs()
// getNFTlogs()
// getUSDXlogs()

// const intervalTime24Hours = 24 * 60 * 60 * 1000;
//     const intervalTime = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
//     setInterval(() => {
//       getWGOLDXlogs()
//       getUSDXlogs()
//       getPastTransactions()
//     }, intervalTime);
//     setInterval(() => {
//       getWgoldxBsc()
//     }, intervalTime24Hours);