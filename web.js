var http = require('http');  
var url = require('url');  
var fs = require('fs');  

var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(1205);

//data
var registeredusers = [];

var io = require('socket.io')(serv,{});
var $ = require('jQuery'); 

io.sockets.on('connection', function(socket){
	
    function reguser(userdata, passdata) {
        registeredusers[userdata] = {};
        registeredusers[userdata]["password"] = passdata;
        registeredusers[userdata]["plans"] = [];
        registeredusers[userdata]["moods"] = [];
        registeredusers[userdata]["friends"] = [];
        registeredusers[userdata]["Count"] = 0;
    };
    
    function updatePlan(priordata, titledata, bodydata, user) {
        var prior = priordata;
        var body = bodydata;
        var title = titledata;
        
        var eleno = registeredusers[user]["Count"] + 1;
        
        registeredusers[user]["Count"] = registeredusers[user]["Count"] + 1;
        
        registeredusers[user]["plans"].push([title, prior, body, eleno]);

        return registeredusers[user]["plans"]
    };
    
    function updateMood(priordata, bodydata, user) {
        var prior = priordata;
        var desc = bodydata;
                        
        registeredusers[user]["moods"].push([desc, prior]);

        return registeredusers[user]["moods"]
    };
    
    function planremove(eleno, user) {        
        var y = registeredusers[user]["plans"];
        var l;
        for (l = 0; l < y.length; l++) {
            if (y[l][3] == eleno) {
                var index = y.indexOf(y[l])
                y.splice(index, 1);
                return registeredusers[user]["plans"];
            }; 
        };
    };
    
    function RegFunction(userdata, passdata) { 
        
        var results = [false, " "];
        
        if (userdata.length > 0) {
            if (passdata.length > 0) {
                if (registeredusers[userdata] != null) {
                    results[0] = false;
                    results[1] = "Username already taken";
                    return results;
                } else {
                    results[0] = true;
                    results[1] = "Registration Complete";
                    reguser(userdata, passdata)
                    return results;
                };
            } else {
                results[0] = false;
                results[1] = "Please enter a password";
                return results;
            };
        } else { 
            results[0] = false;
            results[1] = "Please enter a username";
            return results;
        };
    };
    
    function LogFunction(userdata, passdata) {
        
        var results = [false, " "];
        
        if (registeredusers[userdata] != null) {
            if (registeredusers[userdata]["password"] == passdata) {
                results[0] = true;
                results[1] = "Successfuly logged in";
                return results;
            } else {
                results[0] = false;
                results[1] = "Password is incorrect";
                return results;
            };
        };
        
        results[0] = false;
        results[1] = "Could not find user";
        return results;
        
    };
    
    socket.on('regrequest',function(userdata, passdata){
		 var result = RegFunction(userdata, passdata);
         
         socket.emit('regresult', result);
	});
    
    socket.on('logrequest',function(userdata, passdata){
        var result = LogFunction(userdata, passdata) ;
        var usrtab = registeredusers[userdata]; 
        socket.emit('logresult', result, userdata, usrtab);
	});
    
    socket.on('planremove',function(eleno, user){
        var result = planremove(eleno, user);
         
        socket.emit('Planupdate', result);
	});
    
     socket.on('Planrequest',function(priordata, titledata, bodydata , user){
        var result = updatePlan(priordata, titledata, bodydata, user);
         
        socket.emit('Planupdate', result);
	});
    
    socket.on('Moodrequest',function(priordata, bodydata, user){
        var result = updateMood(priordata, bodydata, user);
         
        socket.emit('Moodupdate', result);
	});
});
