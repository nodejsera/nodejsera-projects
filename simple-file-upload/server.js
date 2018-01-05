var express = require('express');
var formidable = require('formidable');
const path = require('path');

var app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/data/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    return res.json(200, {
							result: 'Upload Success'
    });
});
app.listen(3000, () => console.log('Server app listening on port 3000!'))