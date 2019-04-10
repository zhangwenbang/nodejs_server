//机场或高铁excel转html

var xlsx = require('node-xlsx');
var fs = require('fs');

var data = [
    {
        name : 'sheet1',
        data : [
            [
                'ID',
                'Name',
                'Score'
            ],
            [
                '1',
                'Michael',
                '99'

            ],
            [
                '2',
                'Jordan',
                '98'
            ]
        ]
    },
    {
        name : 'sheet2',
        data : [
            [
                'AA',
                'BB'
            ],
            [
                '23',
                '24'
            ]
        ]
    }
]

// 写xlsx
var buffer = xlsx.build(data);
var obj = xlsx.parse("./" + "123456.xls");
    // console.log(JSON.stringify(obj));
    var arr=obj[0].data;
    var html="";
    // for ( var i = 0; i <arr.length; i++){
    //     // console.log("111111");
    //     // console.log(arr[i]);
    //     html+="<tr>";
    //     var arr2=arr[i];
    //     console.log("*********tr**********");
    //     console.log(arr[i]);
    //     for ( var j = 0; j <arr2.length; j++){
    //         console.log("*********td**********");
    //         console.log(arr2[j]);
    //         html+="<td>"+arr2[j]+"</td>";
    //     }
    //     html+="</tr>";
    // }
    // console.log(html);
    var filename = "./123456.json";
    fs.writeFileSync(filename, JSON.stringify(obj));
// fs.writeFile('./resut.xls', buffer, function (err)
// {
//     if (err)
//         throw err;
//     console.log('Write to xls has finished');
    
// // 读xlsx
//     var obj = xlsx.parse("./" + "123.xlsx");
//     console.log(JSON.stringify(obj));
// }
// );