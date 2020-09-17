var express=require('express');
var Demo2Controler=require("./Demo2Controller");

var Demo2Route=express.Router();
Demo2Route.route('/addData2').post(Demo2Controler.addDataCtrl);
Demo2Route.route('/getalldata').get(Demo2Controler.getalldata2);
module.exports=Demo2Route;
