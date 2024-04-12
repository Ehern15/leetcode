const fs = require('fs');
 
fs.readFile('text.txt', (err, data) => {
  if (err) throw err;
    let string = data.toString();
    var lines = string.split('\n');
    let arr = [];
    let restring = typeof(string);
    for (var line = 0; line < lines.length; line++) {
      restring = lines[line];
      let temp = restring.split('\r');
    arr.push(temp);
     
      
    }
    let newArr = [];
    for (let i = 0;i < arr.length;i++){
        for(let j = 0; j < arr[i].length;j++){
            if(arr[i][j] == ''){

            }else{
                newArr.push(arr[i][j]);
            }
        }
    }
    let map = new Map();
    let number = typeof(Int);
    
    for(let i = 0; i < newArr.length;i++){
        let temp1 = newArr[i].split(' ');
        number = parseInt(temp1[0]);
        map.set(number,temp1[1]);
    }

    let num = 0;
    let multiple = 1;
    let answer = "";

    for(let i = 0; i < newArr.length;i++){
        num += multiple;
        if(map.has(num)){
            answer+= ' ' + map.get(num);
        }
        multiple++;
    }
    return answer;
  }
);