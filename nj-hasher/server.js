var express =  require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var app = express();


app.get('/', function(req,res){
    res.set({
        'Access-Control-Allow-Origin' :'*'
    });
    return res.redirect('views/nj-hasher.html');
}).listen(3000);

console.log('Server listening at : 3000');

app.use('/views', express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

var getHash = ( content , value ) => {
				
				if(value == 'md5'){
					var hash = crypto.createHash('md5');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;					
				}else if(value == 'whirlpool'){
					var hash = crypto.createHash('whirlpool');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else if(value == 'sha1'){
					var hash = crypto.createHash('sha1');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else if(value == 'sha224'){
					var hash = crypto.createHash('sha224');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else if(value == 'sha256'){
					var hash = crypto.createHash('sha256');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else if(value == 'sha384'){
					var hash = crypto.createHash('sha384');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else if(value == 'sha512'){
					var hash = crypto.createHash('sha512');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else if(value == 'ripemd160'){
					var hash = crypto.createHash('ripemd160');
					//passing the data to be hashed
					data = hash.update(content, 'utf-8');
					//Creating the hash in the required format
					gen_hash= data.digest('hex');
					//Printing the output on the console
					console.log("Hash : " + gen_hash);
					return gen_hash;				
				}else{
					var gen_hash =  "Invalid Content passed. Please contact https://nodejsera.com Team";
					return gen_hash;
				}
                
}

app.post('/hash', function(req,res){
    var content = req.body.content;  
	var value = req.body.algorithm;
    
    var hash = getHash(content,value);
	const pug = require('pug'); 
                // Compile the source code
    const compiledFunction = pug.compileFile('views/hashed.pug');
    reshash = compiledFunction({
        hashed : hash
    }); 
    res.send(reshash);

})
