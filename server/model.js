
const config = {
    server : '192.168.180.122',
    port : 58062,
    user : 'sa',
    password : 'certain1y',
    database : 'HR_Evaluate',
    stream : true,

    options : {
      encryt : true
    }
}
const sql = require('mssql');

class Model{
  
  async get_fun(){
    var sql_command;
    var result;

    await sql.connect(config);

    sql_command = await new sql.Request(); 

    var result = await sql_command.query("select * from Sys_Admin")
    
    await sql.close();

    return result.recordset[0];
  }
}


module.exports=new Model();


/*
  async get_fun(){
    var sql_command;
    var result;

    await sql.connect(config);

    sql_command = await new sql.Request(); 

    var result = await sql_command.query("select * from Sys_Admin")
    
    await sql.close();

    return result.recordset[0];
  }
  */