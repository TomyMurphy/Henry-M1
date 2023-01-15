'use strict';

function BinarioADecimal(num) {

   var decimal = 0;
   var j = num.length - 1;

   for (var i = 0; i < num.length; i++) {
      
      decimal += num[i] * 2 ** j;
      j--;
   }

   return decimal;
}

function DecimalABinario(num) {

   var binary = "";

   while (num > 0) {

      if (num === 1) {
         binary += 1;
         break;
      }

      binary += num % 2;
      num = Math.floor(num / 2);
   }

   return binary.split("").reverse().join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
