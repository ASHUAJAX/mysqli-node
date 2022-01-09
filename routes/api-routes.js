const express=require("express");
const router=express.Router();

const apiController=require('../controllers/api-controller');

router.get("/orders",apiController.fetchOrders);

// router.get("/users",apiController.fetchUsersWithOrders);

module.exports=router;