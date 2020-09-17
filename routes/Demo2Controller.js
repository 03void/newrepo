var dbqyeryexecute = require("./../../utils/dbqyeryexecute");
var demo2sqlc=require('./Demo2Sqlc')//filename
var config=require("./../../config/config")
var con = config.connection;

module.exports = {
    addDataCtrl: function (req, res) 
    {
        dbqyeryexecute.executeSelect(demo2sqlc.addData2sqlc(req,res),con).then(data =>
        {
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log("json err :" +err) 
            var errmess='';
            Request.status(200).json({errmess : err});
        })
        
    },
    getalldata2 : function(req,res)
    {
        dbqyeryexecute.executeSelect(demo2sqlc.getalladata2sqlc(req,res),con).then(data=>
        {
            res.status(200).json(data)
        }
        )
        .catch(err=>{
            console.log("json err :" +err) 
            var errmess='';
            Request.status(200).json({errmess : err});
        })
    }
}