module.exports={

addData2sqlc : function(req,res)
{
var queryString2= "insert into tbl_registration2(s_name,s_address,s_contact,s_dob,s_email) values('"+req.body.Name+"','"+req.body.Address+"','"+req.body.Contact+"','"+req.body.Dob+"','"+req.body.Email+"')";

return queryString2;
},

getalladata2sqlc : function(req,res)
{
    var  queryString2="select * from tbl_registration2";
    return queryString2;

}

}