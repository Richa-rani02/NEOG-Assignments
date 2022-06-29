/* 1


const arr=[1,2,3,58,5,6,24,8,15,4];

//const odd=(num)=>num%2===0?num+1:num;
const odd=(acc,curr)=>curr%2===0?[...acc,curr+1]:[...acc,curr];
//using map
// const res=arr.map(odd);

//using reduce
const res=arr.reduce(odd,[]);
console.log(res);
*/

/* 2

const family=[
    {
        name:'Tanay',
        haveCycle:true
    },
    {
        name:'Tanvi',
        haveCycle:true
    },
    {
        name:'Akanksha',
        haveCycle:false
    },
    {
        name:'Kanak',
        haveCycle:false
    },
]

const havecycle=(acc,curr)=>curr.haveCycle===true?[...acc,curr.name]:acc;
const res=family.reduce(havecycle,[]);
console.log(res);
*/

/* 3



const arr=[1,2,3,58,5,6,24,8,15,4];

//const less8even=(acc,curr)=>curr%2===0 && curr<=8?[...acc,curr]:acc;
//  const res=arr.reduce(less8even,[]);
// const less8even=(num)=>num%2===0 && num<=8;
// const res=arr.filter(less8even);
console.log(res);
*/

/* 4

const arr=['eat','sleep','repeat','code'];

// const more5=activity=>activity.length>5;
// const res=arr.filter(more5);

const more5=(acc,curr)=>curr.length>5?[...acc,curr]:acc;
const res=arr.reduce(more5,[]);
console.log(res);

*/

/* 5


const arr=[1,2,3,58,5,6,62,8,70];
// using reduce
// const sum50=(acc,curr)=>curr>50?acc+curr:acc;
// const res=arr.reduce(sum50,0);

// const find50=(num)=>num>50;
// const sum50=(num)=>{
//     let ans=0;
//     ans+=num;
//     return ans;
// }
// const res=arr.filter(find50);
// const res1=res.map(sum50);
console.log(res1);

*/

/* 6

const arr=[1,2,3,7,5,6,8,9];
const producteven=(acc,curr)=>curr%2===0?acc*curr:acc;
const res=arr.reduce(producteven,1);
console.log(res);
*/

/* 7

const arr=[
    {name:"jay",
     age:60
  },
  {name:"Gloria",
     age:36
  },
  {name:"Manny",
     age:16
  },
  {name:"Joe",
     age:9
  },

]
const findsum=(acc,curr)=>curr.age+acc;
const res=arr.reduce(findsum,0);
console.log(res);
*/

/* 8

const arr=["You","all","are","rockstars"];

 const convobj=(acc,curr,index)=>
 {
    return {...acc,[index]:curr}
}

// const convobj=(acc,curr,index)=>{...acc,[index]:curr};

const res=arr.reduce(convobj,{});
console.log(res);

*/

/* 9


const arr=[
    {
        name:"apple"
    },
    {
        name:"Mango"
    },
    {
        name:"Potato"
    },
    {
        name:"Guava"
    },
    {
        name:"Capsicum"
    },
]

const additem=(item)=>{
    return item.name.length>5?{...item,type:"Vegetable"}:{...item,type:"Fruits"};
}
const res=arr.map(additem);
console.log(res);

*/

/* 10
*/
const inventory=[
    {name:'fans',quantity:3},
    {name:'chimneys',quantity:0},
    {name:'bulbs',quantity:5},
    {name:'stove',quantity:1},

]

/* 10 a

const qtyless2=(item)=>item.quantity<2;
const res=inventory.filter(qtyless2);
console.log(res);

*/

/* 10 b


const totalqty=(acc,curr)=>acc+curr.quantity;
const res=inventory.reduce(totalqty,0);
console.log(res);
*/

/* 10 c

const qty0=(item)=>item.quantity===0;
const res=inventory.reduce((acc,curr)=>{
    curr.qty===0 ?{...curr}:acc
},{});
console.log(res);
*/

/* 11

const arr=["violet","Indigo","Blue","Green","Yellow","orange","Red"];
const res=arr.map(element=>element).join("-");
console.log(res);
*/
/* 12
let num=24345687;
const findEven=(num)=>{
   let strsplit=num.toString().split('');
   let numArr = strsplit.map(Number);
  for(let i=0 ;i<numArr.length;i++){
      if(numArr[i-1]%2===0 && numArr[i]%2===0){
          numArr.splice(i,0,'-')
      }
  }
  return numArr.join('');
}
console.log(findEven(num));
*/

/* 13
*/
/* 14
*/
/* 15
*/
const input=[
    ['a','b','c'],
    ['c','d','e'],
    ['e','d','f'],
];

// const flatarray=input.flat();
const flatarray=(acc,curr)=>[...acc,...curr];
const res=input.reduce(flatarray,[]);
console.log(flatarray);



/* 16
*/
