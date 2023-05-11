var express = require('express');
var app = express();

app.get('/users', function(req, res){
    const nama = req.query.nama;
    const tempat = req.query.tempat;
    const lahir = req.query.lahir;
    const alamat = req.query.alamat;

    res.send({
        'Nama': nama,
        'Tempat_Lahir': tempat,
        'Tanggal_Lahir': lahir,
        'Alamat': alamat
    })
})

var server = app.listen(4000, function(){
    console.log('Listen on port 4000')
})