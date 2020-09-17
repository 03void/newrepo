getallData1();
function addData1()
{
alert("");
    var data1=
    {
        name:$("#name").val(),
        lastname:$("#lastname").val(),
        city:$("#city").val(),
        pincode:$("#pincode").val(),

    }

$.ajax
({
    type :"Post",
    url:'/demoserver11/addData1',
    data:data1,
    success : function(result)
    {
        alert("data inserted successfully");
    }


})
    
}
function getallData1()
{
alert("get data");
$.ajax
({
    type : "Get",
      url :'/demoserver11/getallData1',
      
      success :function(result)
      {
        var data2 = result;
        console.log(data2);

        $('#tbl1').DataTable({
            "data":data2,
            "aoColumns":[
                {"data":"l_id"},
                {"data":"l_name"},
                {"data":"l_lastname"},
                {"data":"l_city"},
                {"data":"l_pincode"},
                {
                    "render":function(type,data,row,meta)
                    {
                        var a='<a onclick=editdata("'+row.l_id+'")><span class="glyphicon glyphicon-pencil"></span></a> <a onclick=deletedata("'+row.l_id+'")><span class="glyphicon glyphicon-trash"></span></a>';
                        return a;

                    }
                }
            ]
        })
      }
})

}
function editdata(idd)
{
    $.ajax({
        type :"GET",
        url:'/demoserver11/editdata',
        data:{id:idd},
        success : function(result)
        {
            console.log(result);
            $("#id2").val(result[0].l_id);
            $("#name").val(result[0].l_name);
            $("#lastname").val(result[0].l_lastname);
            $("#city").val(result[0].l_city);
            $("#pincode").val(result[0].l_pincode);
        }
    })
}