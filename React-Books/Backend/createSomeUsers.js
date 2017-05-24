// Script to create som dummy users

var userFacade = require("./userFacade")

userFacade.createNewUser("lib", "jegsover123", function(data){
    if(data != null) console.log("succes creating lib")
})

userFacade.createNewUser("test", "boolean", function(data){
    if(data != null) console.log("succes creating test")
})