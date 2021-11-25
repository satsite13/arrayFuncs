module.exports = {
   SumArray: function(arr){
      return arr.reduce(((a,b) => a+b), 0);
   },

   AvgArray: function(arr){
      return arr.reduce((a,b) => a+b)/(arr.length === 0? 1: arr.length);
   },

   MaxVal: function(arr){
      if(arr.length <=0) "Empty Array";
      return Math.max(...arr);
   },

   MinVal: function(arr){
      if(arr.length <=0) "Empty Array";
      return Math.min(...arr);
   },

   UniqArraySort: function(arr){
      let res = [];
      for(let i = 0; i<arr.length; i++){
         if(res.indexOf(arr[i]) === -1) res.push(arr[i]);
      }
      res.sort((a,b) => a-b);
      return res;
   },

   UniqStringArray: function(arr){
      let res = [];
      for(let i = 0; i<arr.length; i++){
         if(res.indexOf(arr[i]) === -1) res.push(arr[i]);
      }
      return res.sort();;
   },

}
