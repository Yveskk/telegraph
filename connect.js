const {
    createPool
} = require('mysql') ;

const db = mysql.createPool({
    host:'localhost' ,
     user: 'root',
     password:'',
     database: 'telegraph',
     connectionLimit: 10
});

db.query('select * from crypter',(err, result, fields)=>{
    if(err){
        return console.log(err);
    }
    
})