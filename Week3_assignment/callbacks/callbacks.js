/*
Question 1

Write a function strLength() which takes

Your name
A function which it will call with the length of your name
Now, call this function with the two parameters.

Your name. This is simple.
A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long!



const strLength=(name,calc)=>{
  let length=name.length;
  calc(name,length);
}
strLength("richa",(name,length)=>console.log(`OMG! my name ${name} is ${length} char long`));

*/


/*
Question 2

Write a function willThanosKillMe() . This function will take three parameters

Your name
Function to call if Thanos doesn't kill you.
Function to call if Thanos does kill you.
This function will call success callback if your name has even characters. You won't die.

But if your name has odd number of characters then you're going to die. Sorry! :(

Now, call this function with the given parameters. The success function should console a happy message: Yay! I am alive! and the failure function should console your will: Give my bose speakers and apple headphones to my sister




const willThanosKillMe=(name,cb1,cb2)=>{
    name.length%2===0?cb1():cb2();
}
// const cb1=()=>console.log("Yay! I am alive!");
// const cb2=()=>console.log("Give my bose speakers and apple headphones to my sister");
//  willThanosKillMe("richaa",cb1,cb2);

willThanosKillMe("richaa",()=>console.log("Yay! I am alive!"),()=>console.log("Give my bose speakers and apple headphones to my sister"));
*/