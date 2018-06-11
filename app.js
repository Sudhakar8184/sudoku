var a = new Array(3);
var head1;
var row;
var col;
var a,b;
var l=1;
for(var i=0;i<9;i++){
  a[i] = new Array();
let block = document.createElement('tr');
block.setAttribute("id", `tr${i}`)
if(i ==  2||i == 5){
  block.setAttribute("style", 'border-bottom: 3px solid black;')
}
let head = document.getElementById('tbody');
head.appendChild(block);
  for(var j=0;j<9; j++){
    var markup = '';
   let td = document.createElement('td');
   td.setAttribute("id", `td${i}${j}`)
   if(j == 2 || j==5){
    td.setAttribute("style", 'border-right: 3px solid black;')
   }
   var value = Math.floor((Math.random() * 9) + 1);
  //  if(i==2 &&j == 0){
  //    markup = 1;
  //  }
  
   let input =  document.createElement('input');
   input.setAttribute('style','height:50.5px;width:50.5px')
   input.setAttribute('type','number');
   input.setAttribute('id',`${i}${j}`);
   input.setAttribute('class',`inputvalues`);
   input.setAttribute('disabled','');
  //  input.setAttribute('onkeyup',`updatevaluecheck(${i},${j})`);
   input.setAttribute('value',`${markup}`);
   td.appendChild(input);
   let head = document.getElementById(`tr${i}`);
   head.appendChild(td);
  }
}

// function results(){
//   if(mainresults() == true){
//     console.log("succces")
//   }else{
//     console.log("fail")
//   }
//   }
  function mainresults(){
   
    if(!emptyvalue()){
      return true;
    }
    // console.log("data",row,col)
    for(var num = 1; num <=9; num++  ){
      // console.log("value",row,col,num)
        if(insertvalue(row,col,num)){         
          document.getElementById(`${row}${col}`).value = num;         
          
          if(mainresults()){
              //  console.log("SSSSSSSSSSSSSSSSSSSSSSSS")
               return true;
             }
             if(col >= 0){
               col--;
             }
             if(row > 8 || row < 1 ||col > 8 || col < 1 ){
              console.log("not able to", col)
              return true
            }  
            //  console.log("recursive value",row,col,num)
               document.getElementById(`${row}${col}`).value = '';
            }
        }
 return false;
  }
function emptyvalue(){
for( row=0; row< 9;row++ ){
 
    for( col=0;col< 9;col++ ){
      document.getElementById(`${row}${col}`).setAttribute("style","width:50px;height:50px;border: 1px solid black");
      document.getElementById(`${row}${col}`).setAttribute('disabled','')
        var data = document.getElementById(`${row}${col}`).value;
        if(data == ''){
          // console.log("col and row to set",row,col);
         return true;
        }
    }
  }
  return false;
}

function insertvalue(row,col,num){
  return (!valueinrow(row,num)&&!valueincol(col,num)&& !valueinbox((row - (row%3)),(col-(col%3)),num));
}

function valueinrow(row,num){

for(var col=0;col<9;col++){
  var data = document.getElementById(`${row}${col}`).value
  if(data == num){
   a=row;
   b=col;
    // console.log("row inner true",row,col,num);
    return true;
  }
  // console.log("row out flase",row,col,num);
}
return false;
}

function valueincol(col,num){
  for(var row=0;row<9;row++){
    var data = document.getElementById(`${row}${col}`).value;
    if(data == num){
      a=row;
      b = col;
      // console.log("col inner true",row,col,num);
      return true
    }
    // console.log("col out flase",row,col,num);
  }
  return false;
  }

  function valueinbox(newrow,newcol,num){
    for(var row=0; row<3;row++){
      for(var col=0; col<3;col++){
          a=newrow;
          b=newcol;
          var data = document.getElementById(`${row+newrow}${col+newcol}`).value;
          if(data == num){
           return true;
          }
      }
    }
    return false
  }

function updatevaluecheck() {
  for(var row=0; row<9;row++){
    for(var col=0; col<9;col++){
        var data = document.getElementById(`${row}${col}`).value;
        if(data == ''){
             console.log("please fill",row,col)
             return;
          }
          if(row == 8 && col == 8){
            console.log("success")
            return;
         }
         // console.log("please fill data",row,col,data)
        document.getElementById(`${row}${col}`).value='';
        if(insertvalue(row,col,data)){
          document.getElementById(`${row}${col}`).value=data;          
        }else{
          console.log("fail in ",row,col)
          return;
        }
    }
  }
 }


//  const buttons = document.getElementsByClassName('inputvalues');
//  const buttonsCount = buttons.length;
//  for (let i = 0; i < buttonsCount; i += 1) {
//  buttons[i].addEventListener('click', function() {
//    id1 =this.id;
//    console.log(id1)
//  })
// }

  const buttons1 = document.getElementsByClassName('gametype');
  const buttonsCount1 = buttons1.length;
  for (let i = 0; i < buttonsCount1; i += 1) {
  buttons1[i].addEventListener('click', function() {
    typename =this.id;
    switch(typename){
        case 'easy':
             mainresults();
             emptydata();
             break;
        case 'medium':           
             mainresults();
             emptydata();
             emptydata();
             break;
        case 'hard':
             mainresults();
             emptydata();
             emptydata();
             emptydata();
             break;
        
    }
  })
}

function emptydata(){
  for(var row=0; row<9;row++){
    for(var col=0; col<9;col++){
        var data = document.getElementById(`${row}${col}`).value;
        var value = Math.floor((Math.random() * 9) + 1);
        if(data == value){
          console.log("main",data,value)
          document.getElementById(`${row}${col}`).setAttribute("style","width:50px;height:50px;border: 3px solid red")
          document.getElementById(`${row}${col}`).removeAttribute('disabled')
          document.getElementById(`${row}${col}`).value='';          
        }
    }
  }
}

/////////////////////////////////////////////////////
// var a = new Array(3);
// var head1;
// for(var i=0;i<3;i++){
//   a[i] = new Array();
// let block = document.createElement('tr');
// block.setAttribute("id", `tr${i}`)
// let head = document.getElementById('tbody');
// head.appendChild(block);
//   for(var j=0;j<3; j++){
// let td = document.createElement('td');
// let table = document.createElement('table');
// td.setAttribute("id", `innertd${i}${j}`);
// table.setAttribute("id", `innertable${i}${j}`);
// table.setAttribute("border", `1`);
// td.appendChild(table);
// let head = document.getElementById(`tr${i}`);
// head.appendChild(td);
// a[i] = new Array();
// for(var k=0;k<9; k++){

//     var l = '';

//   var markup = `${l}`;
//    if(k == 0){
//     let head = document.getElementById(`innertable${i}${j}`);
//     let tr = document.createElement('tr');
//     tr.setAttribute("id", `innertr${i}${j}${k}`);
//     head.appendChild(tr);
//    }
//    if(k == 3){
//     let head = document.getElementById(`innertable${i}${j}`);
//     let tr = document.createElement('tr');
//     tr.setAttribute("id", `innertr${i}${j}${k}`);
//     head.appendChild(tr);
//    }
//    if(k == 6){
//     let head = document.getElementById(`innertable${i}${j}`);
//     let tr = document.createElement('tr');
//     tr.setAttribute("id", `innertr${i}${j}${k}`);
//     head.appendChild(tr);
//    }
//    let td = document.createElement('td');
//    td.setAttribute("id", `innertd${i}${j}${k}`)
//    let input =  document.createElement('input');
//    input.setAttribute('style','width:60.5px')
//    input.setAttribute('type','number')
//    input.setAttribute('id',`value${i}${j}${k}`)
//    input.setAttribute('value',`${markup}`)
//    td.appendChild(input)
//    if(k < 3)
//    {
//    head1 = document.getElementById(`innertr${i}${j}0`);
//    }
//    if(k >= 3 && k < 6)
//    {
//     head1 = document.getElementById(`innertr${i}${j}3`);
//    }
//    if(k >= 6 && k < 9)
//    {
//    head1 = document.getElementById(`innertr${i}${j}6`);
//    }
//    head1.appendChild(td);
//    }
//   }
// }

