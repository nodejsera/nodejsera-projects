var express =  require('express');
var bodyParser = require('body-parser');
var app = express();


//Sendgrid Email system
const sgMail = require('@sendgrid/mail');
var key = 'YOUR_API_KEY_HERE';		//Your API key from sendrid comes here
sgMail.setApiKey(key);


app.get('/', function(req,res){
    res.set({
        'Access-Control-Allow-Origin' :'*'
    });
    return res.redirect('/public/index.html');
}).listen(3000);

console.log('Server listening at : 3000');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));


app.post('/mail', function(req,res){
   
	var email= req.body.email;
    var subject = req.body.subject;
	var content = req.body.content;

    //console.log("SENDGRID_ENV : " + key);
    const msg = {
        to: email,
        from: 'ENTER_YOUR_EMAIL',				//Your email comes here
        subject: subject,
        html: content ,
    };

    sgMail.send(msg);

    return res.redirect('/public/success.html');

})




