const express = require("express");
const mysql = require("../connection").conn;

const fetchOrders = (req, res, next) => {

    const {page, limit, user_id} = req.query;

    console.log(page, limit, user_id);

    if (!page || !limit || !user_id) {
        res.send("please fill the query feilds");
    } else {

        const qry = `SELECT  User_id,Product_name,Status,Created_date from orders WHERE User_id = ${user_id}  LIMIT ${limit} `;

        mysql.query(qry, (err, result) => {
            if (err) {
                throw err;
            } else {

                if (result.length === 0) {
                    res.send("no result found")
                } else {
                    
                //simlify the date
                for(let i=0;i < result.length;i++){  
                   let date=JSON.stringify(result[i].Created_date);
                   let simpleDate=date.split("T")[0].replace(/"/g,"");
                   
                //set the simpledate to object
                result[i].Created_date = simpleDate;
                  
                }
                    res.send(result);
                }

            }
        })

    }

}




exports.fetchOrders = fetchOrders;

