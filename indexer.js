module.exports = {
   SumArray: function sumArray(arr){
      return arr.reduce(((a,b) => a+b), 0);
   },

   AvgArray: function avgArray(arr){
      return arr.reduce((a,b) => a+b)/(arr.length === 0? 1: arr.length);
   }
}





