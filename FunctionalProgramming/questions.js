/*  1
const richaage={
    mothername:"rambha",
    age:24
}

const shubhamage={...richaage,age:richaage.age-2};
console.log(richaage)
console.log(shubhamage)

*/

/*  2

const colors=["red","orange","blue","pink","yellow"];
const newcolors=[...colors,"white","black"];
console.log(colors);
console.log(newcolors);
*/

/*  3


const person={
    name:"richa",
    age:23
}
const birthday=(person)=>({...person,age:person.age+2});
console.log(person);
console.log(birthday(person));
*/

/*  4

const arr=[1,10,23,2,4,54,11];
const lessthan10=(value)=>value<10;

const arrless10=arr.filter(lessthan10);
console.log(arrless10);
*/

/*  5


const numbers=[1,2,3,5,12];

const getobjmap=(num,index)=>({[`item ${index+1}`]:num});
const getobjreduce=(acc,curr,index)=>[...acc,{[`item ${index+1}`]:curr}];
//const res=numbers.reduce(numbersum,{});
const res1=numbers.map(getobjmap);
const res2=numbers.reduce(getobjreduce,[]);
const objsum=(acc,curr)=>acc=acc+curr;
const objsumres=numbers.reduce(objsum,0);
console.log(res2);
console.log(res1);
console.log(objsumres);

*/
// const numbers=[2,34,21,12,10];
/*  6 (a)

const oddsum=(sum,num)=>num%2===0?sum:sum+num;

const res=numbers.reduce(oddsum,0);
console.log(res);


*/
/*  6 (b)


// const oddindex=(num,index)=>{
//     if(index%2!==0){
//         return num;
//     }
// };
// const oddindexres=numbers.filter(oddindex);
const numbersum=(sum,num,index)=>index%2!==0?sum+num:sum;
// const oddindexres=numbers.filter((num,index)=>index%2!==0).reduce(numbersum,0);
const oddindexres=numbers.reduce(numbersum,0);   // way to filter odd index and do a sum of it in single line
console.log(oddindexres);
*/

/*  6 (c)


const maxnum=(max,num)=> num>max?num:max;
const findmax=numbers.reduce(maxnum,0);
console.log(findmax);
*/

/*  6 (d)


const div10=num=>num%10===0;
const div10res=numbers.filter(div10);
console.log(div10res);
*/
/*  6 (e)


const oddincevendec=(num)=>(num%2===0)?num+1:num-1;
const res=numbers.map(oddincevendec);
console.log(res);
*/

/*  6 (f)

const oddevenobj={even:0,odd:0};
const reduceobj=(oddevenobj,num)=>num%2===0? {...oddevenobj,even:oddevenobj.even+num}:{...oddevenobj,odd:oddevenobj.odd+num};
const res=numbers.reduce(reduceobj,oddevenobj);
console.log(res);
*/


/*  7 (a)

const input=["apple","papaya","mango","orange"];

// const findcharnum=(acc,cur)=>acc[cur.length]===undefined?{...acc,[cur.length]:1}:{...acc,[cur.length]:acc[cur.length]+1};

const charres=input.reduce((acc,cur)=>{
    if(acc[cur.length]){
        return {...acc,[cur.length]: acc[cur.length]+1}
    }else{
        return {...acc,[cur.length]:1}
    }
}
    ,{});

const charres=input.reduce(findcharnum,{});
console.log(charres);

*/





/* 8

const giveyourname=name=>msg=>`${name} says ${msg}`;
const res=giveyourname("richa")("hello");
console.log(res);
*/

/* 9


const printwithname=(name)=>console.log(`${name} says hello`);
const printwithid=(id)=>console.log(`${id} says hello`);

const printnameid=printwithname("richa", printwithid("1234"))
console.log(printnameid)
*/

/* 10


const increment=num=>num+1;
const square=num=>num*num;

const compose=(...rest)=>{
    return (num)=>{
        // console.log("called");
       return rest.reduce((acc,curr)=>{
        //    console.log(acc,curr);
           return curr(acc);
       },num);
    }
}
const res=compose(increment,square);
console.log(res(2));
*/

/* 11
*/
