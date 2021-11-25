module.exports = {
   SumArray: function sumArray(arr){
      return arr.reduce(((a,b) => a+b), 0);
   },

   AvgArray: function avgArray(arr){
      return arr.reduce((a,b) => a+b)/(arr.length === 0? 1: arr.length);
   },

   MaxVal: function findMax(arr){
      if(arr.length <=0) "Empty Array";
      return Math.max(...arr);
   },

   MinVal: function findMin(arr){
      if(arr.length <=0) "Empty Array";
      return Math.min(...arr);
   },

   AToS: function aToS(arr){
      let res = [];
      for(let i = 0; i<arr.length; i++){
         if(res.indexOf(arr[i]) === -1) res.push(arr[i]);
      }
      res.sort((a,b) => a-b);
      return res;
   },

}


function tester(arr){
   let res = [];
   for(let i = 0; i<arr.length; i++){
      if(res.indexOf(arr[i]) === -1) res.push(arr[i]);
   }
   res.sort((a,b) => a-b);
   return res;
}

console.log(tester([1,111,20,21,33,4,8,22,1120,32,34]))


