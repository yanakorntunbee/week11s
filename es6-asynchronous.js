// asynchronous is a behavior
// without having to wait for line 1 to finish

/* - requests will wait for a timer to finish or a request to respond 
    while the rest of the code continues to execute
   - Then when the time is right a callback will spring these 
   asynchronous requests into action
*/

/* 
   setTimeout()
*/

// - Asynchronous requests will wait for a timer to finish or a request to respond while the rest of the code continues to execute
// - then when the time is right a callback will spring these asynchronous requests into action
// Example :

//Asynchronous
//1.Arrow function
console.log("1");
setTimeout(function example(){
    console.log("2");
},2000);
console.log("3");
/*
    process:
                1
                3
                2
*/


//2.Arrow function
console.log("1");
setTimeout(example=()=>{
    console.log("2");
},2000);
console.log("3");
/*
    process:
                1
                3
                2
*/


//3.Arrow function
console.log("1");
setTimeout(async()=>{
    console.log("2");
},2000);
console.log("3");
/*
    process:
                1
                3
                2
*/



function doFirst(){
    console.log("สั่งสินค้า");
}
function doSecond(){
    console.log("ชำระเงิน");
}
function doThird(){
    console.log("รับสินค้า");
}

doFirst(); 
doSecond(); 
doThird(); 


function doFirst(){
    setTimeout(async()=>{
         console.log("สั่งสินค้า");
    },3000);
}
function doSecond(){
    console.log("ชำระเงิน");
}
function doThird(){
    console.log("รับสินค้า");
}

doFirst();   //พวกเเกไม่ต้องรอฉันนะ ทำงานของพวกเเกไปได้เลย
doSecond(); //พวกเเกต้องรอให้ฉันทำงานเสร็จก่อนนะ เเล้วเเกค่อยทำงาน
doThird(); //พวกเเกต้องรอให้ฉันทำงานเสร็จก่อนนะ เเล้วเเกค้อยทำงาน



let dbResult;
function doFirst(){
    setTimeout(async()=>{
         console.log("สั่งสินค้า");
         dbResult = 'username is john.';
         console.log(dbResult);
    },3000);
}
function doSecond(){
    console.log(dbResult);
    console.log("ชำระเงิน");
}
function doThird(){
    console.log("รับสินค้า");
}

doFirst();   //พวกเเกไม่ต้องรอฉันนะ ทำงานของพวกเเกไปได้เลย
doSecond(); //พวกเเกต้องรอให้ฉันทำงานเสร็จก่อนนะ เเล้วเเกค่อยทำงาน
doThird(); //พวกเเกต้องรอให้ฉันทำงานเสร็จก่อนนะ เเล้วเเกค้อยทำงาน




let dbResult;
function doFirst(callback){
    setTimeout(async()=>{
         console.log("สั่งสินค้า");
         dbResult = 'username is john.';
         console.log(dbResult);
         callback();
    },3000);
}
function doSecond(){
    console.log(dbResult);
    console.log("ชำระเงิน");
}
function doThird(){
    console.log("รับสินค้า");
}

doFirst();   //พวกเเกไม่ต้องรอฉันนะ ทำงานของพวกเเกไปได้เลย
//doSecond(); //พวกเเกต้องรอให้ฉันทำงานเสร็จก่อนนะ เเล้วเเกค่อยทำงาน
doThird(); //พวกเเกต้องรอให้ฉันทำงานเสร็จก่อนนะ เเล้วเเกค้อยทำงาน