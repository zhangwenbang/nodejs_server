// 盛大机场或高铁数据
var xlsx = require('node-xlsx');
var fs = require('fs');

var obj = xlsx.parse("./" + "123.xlsx");
    // console.log(obj);
    var arr=obj[0].data;
    var arrTotal=new Array();
    
    
    for ( var i = 24000; i <32000; i++){
        arrTotal.push(arr[i]);
        
        
    }
    // console.log("1111111111111")
    // console.log(JSON.stringify(arrTotal));
    var filename = "./24000-32000.xlsx";
    //fs.writeFileSync(filename, JSON.stringify(arrTotal));

    var buffer = xlsx.build([
        {
            name:'sheet1',
            data:arrTotal   
        }
    ]);
    fs.writeFileSync(filename,buffer,{'flag':'w'});  


