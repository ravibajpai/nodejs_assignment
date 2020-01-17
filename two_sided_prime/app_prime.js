const express = require('express');
const isPrime = require('prime-number');
const { floor } = require('mathjs')
const app = express();


function reverse_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

function isNumeric(num){
  num = "" + num; //coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num));
}

/*There are known to be 15 decimal two-sided primes.

First 15: 2, 3, 5, 7, 23, 37, 53, 73, 313, 317, 373, 797, 3137, 3797, 739397*/

function isTwoSidedPrime(data){
	
	var number = parseInt(data);
	//console.log('coming here '+ number );
	if(number <= 0)
		return false;
	var result = true;
	var reverse = 0;
	while(number >0 )
	{
	   //console.log('coming here main '+ number );
	   if(!isPrime(number))
		   return false;
	   reverse = reverse*10 + number%10;
	   number = floor(number /10);
	}
    reverse = floor(reverse /10);
	
    while(reverse >0 )
	{
	   //console.log('coming here reverse '+ reverse_number(reverse) );
	   if(!isPrime(reverse_number(reverse)))
		   return false;
	    reverse = floor(reverse /10);
	   
	   
	}
	
	return result;
	
}


app.get('/api/is_two_sided_prime',(req,res) => {
	
	
	res.send('please provide number also');
	
});


app.get('/api/is_two_sided_prime/:id',(req,res) => {
	
	var result = true;
	if(!isNumeric(req.params.id))
	{
		res.send('please provide valid number');
	
	}
    else
	{	
     result = isTwoSidedPrime(req.params.id);
	 if(result == true)
	   res.send(req.params.id +' is two sided prime Number');
     else
	  res.send(req.params.id + ' is not two sided prime number');
	}
	
});

app.listen(3000, () => console.log('liistening on port 3000'));