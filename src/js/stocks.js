import database from "../database";
let stocks;
database.serialize(function() {
  database.each("SELECT * FROM STOCKS", function(err, data) {
    if (err) console.log(err);
    else{
    	  console.log(data[0]);
    }
   });
});

export default stocks;
