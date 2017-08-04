//=========================================================================================================
exports.registerUser = registerUser;
//=========================================================================================================

function newConnection(){
   //variables y funciones privadas

   return{ //funciones públicas
      mysql: function (){
            var mysql = require("mysql");
            var conexion = mysql.createConnection({
                                    host: "localhost",
                                    user: "usuario",
                                    password: "1234",
                                    database: "prueba",
                                    port: 3306,
                                    charset: "utf8mb4"
                                 });

            conexion.connect(function connerror(error){
                                 if(error){
                                    console.log("ERROR- connmysql.newConnection: BBDD no disponible.");
                                    throw error;
                                 }else{
                                    console.log("INFO- connmysql.newConnection: Conexion correcta.");
                                 }
                              });
            return conexion;
                  }
   }
}
var connection = newConnection();

//=========================================================================================================
function registerUser(data, callback){
   var connmysql = connection.mysql();
   var sentenceSQL = "call registerUser(?,?,?,?,?,?);";
   console.log("INFO-connmysql.registerUser: sentenceSQL --->>>>" + sentenceSQL);
   var query = connmysql.query(sentenceSQL,
                  [data.name, 
                  data.surname, 
                  data.email, 
                  data.mobile, 
                  data.password, 
                  data.sal], 
                  function(error, result){
                     if(error){
                        console.log("ERROR-connmysql.registerUser:"+error.message);
                        callback(Error(error.message), false);
                     }else{
                        console.log("INFO-connmysql.registerUser:"+result);
                        callback(false, true);
                     }
                  }
               );

   connmysql.end();

}
//=========================================================================================================

