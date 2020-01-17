const http = require('http')


/*There are known to be 15 decimal two-sided primes.

First 15: 2, 3, 5, 7, 23, 37, 53, 73, 313, 317, 373, 797, 3137, 3797, 739397*/


const server = http.createServer( (req, res ) => {
	if(req.url === '/api/two_sided_prime/' )
	{
		res.write('hello world , insided its very scary ');
		res.end();
		
	}
	
	
});

server.listen(3000)

console.log('listening on port 3000 ...')
