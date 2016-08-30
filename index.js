
var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});
client.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
  console.log("constituencies",resp);
});


// client.indices.create({  
//   index: 'gov'
// },function(err,resp,status) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("create",resp);
//   }
// });

// client.index({  
//   index: 'gov',
//   id: '1',
//   type: 'constituencies',
//   body: {
//     "ConstituencyName": "Ipswich",
//     "ConstituencyID": "E14000761",
//     "ConstituencyType": "Borough",
//     "Electorate": 74499,
//     "ValidVotes": 48694,
//   }
// },function(err,resp,status) {
//     console.log(resp);
// });

// client.delete({  
//   index: 'gov',
//   id: '1',
//   type: 'constituencies'
// },function(err,resp,status) {
//     console.log(resp);
// });