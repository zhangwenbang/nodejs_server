// 盛大机场或高铁数据
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
// 数据结构
// [{
//     name:"东京",
//     sub:[{
//     name:"东京成田国际机场",
//     value:"日本"
//     },{
//     name:"东京羽田国际机场",
//     value:"日本"
//     }]
//     },{
//     name:"大阪",
//     sub:[{
//     name:"东京成田国际机场",
//     value:"日本"
//     },{
//     name:"东京羽田国际机场",
//     value:"日本"
//     }]
//     }]
var buffer = xlsx.build(data);
var obj = xlsx.parse("./" + "123.xlsx");
    // console.log(obj);
    var arr=obj[0].data;
    var arrTotal=new Array();
    
    var _index=-1;
    var cityName="";
    for ( var i = 0; i <arr.length; i++){
        var objEle=new Object();
        var arr1=arr[i];
        if(cityName==arr1[1]){
            var obj2=new Object();
            obj2.name=arr1[2];
            obj2.value=arr1[0];
            var abc=arrTotal[_index].sub;
            abc.push(obj2);
            // console.log("1111111111");
            // console.log(JSON.stringify(arrTotal));
        }else{
            _index++;
            objEle.name=arr1[1];
            cityName=arr1[1];
            objEle.sub=new Array();
            var obj2=new Object();
            obj2.name=arr1[2];
            obj2.value=arr1[0];
            var abc=objEle.sub;
            abc.push(obj2);
            arrTotal.push(objEle);
            // console.log("222222222222");
            // console.log(JSON.stringify(arrTotal));
        }
        
        
        
    }
    // console.log("1111111111111")
    // console.log(JSON.stringify(arrTotal));
    var filename = "./test.json";
    fs.writeFileSync(filename, JSON.stringify(arrTotal));

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