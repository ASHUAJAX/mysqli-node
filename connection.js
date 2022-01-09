const mysql=require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"assigment",
    port:3306
});

conn.connect((err)=>{

    if(err) throw err;
    
    console.log("connected to database successfully!");

})

module.exports.conn=conn;