const ENV = "prod";
const TEST_DB = "mongodb://localhost:27017/fusegbackend";
const PRO_DB = `mongodb+srv://doadmin:k0P19s34E5em2H8U@pro-db-fusegold-54c0a5f4.mongo.ondigitalocean.com/admin?tls=true&authSource=admin`
const express = require('express');
const { getWGOLDXlogs,
    getNFTlogs,
    getUsers,
    getPastTransactions, } = require('./helper');
    const path = require('path');
const app = express();
const port = (ENV == "dev") ? 3000 : 8080;
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
app.use(express.static(path.join(__dirname, 'dist')));
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
}).then(() => {
  console.log('Pro Database connected!')
},
error => {
    console.log(error)
  }
)
}
// Define a route to get wallet transfers
// app.get('/transfers', (req, res) => {
//   const walletAddress = req.params.walletAddress;
//   getWalletTransfers(walletAddress).then(transfers => {
//     res.json(transfers);
//   }).catch(error => {
//     res.status(500).send('Error retrieving transfers: ' + error.message);
//   });
// });
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html file for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
getWGOLDXlogs()
    getNFTlogs()
    getPastTransactions()
    // getUsers()