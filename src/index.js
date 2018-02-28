module.exports = function getZerosCount(number) {
  // your implementation
 var rez = 0;
  do{
  	number = Math.floor(number / 5);
  	rez=rez+ number;
  }

  while(number >= 5 );
  return rez;
}


