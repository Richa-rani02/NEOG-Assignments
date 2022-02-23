function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`)
        }
        resolve(`from server: ${msg}`)
      }, 3000)
    })
  }

/*
Given the syntax above. Call fakeFetch() with some msg and use await to get the data and then print it.

const print= async (msg)=>{
      try{
        const res= await fakeFetch(msg,true);
        console.log(res);
      } catch(err){
          console.error(err);
      }
      
  }

  print("hello from richa");

*/
  
/*
Do question number 14 with async-await this time.


const syncCallsToServer=async (msg1,msg2)=>{

    try{
        const datafrommsg1=await fakeFetch(msg1);
        //console.log(datafrommsg1);
        const datafrommsg2=await fakeFetch(msg2,true);
        console.log({datafrommsg1,datafrommsg2});
    }catch(err){
      console.log(err);
    }

}


syncCallsToServer("richa","shubham");


*/

const syncCallsToServer=async (msg1,msg2)=>{

    try{
        const datafrommsg1=await fakeFetch(msg1,true);
        // console.log({datafrommsg1});
       }catch(err){
          console.error(err);
      }
      try{
        const datafrommsg2=await fakeFetch(msg2,true);
       // console.log({datafrommsg2});
      } catch(err){
        console.log(err);
      } 
}


syncCallsToServer("hello","richa");
