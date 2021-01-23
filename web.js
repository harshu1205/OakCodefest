<html lang="en" class=""><head>

  <meta charset="UTF-8">
  <title>Website1</title>

  <meta name="robots" content="noindex">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Indie+Flower">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    
  <style class="INLINE_PEN_STYLESHEET_ID">
    @charset "UTF-8";
/*Typography*/
      
/*Login*/
      
:root {
    --body_gradient_left: #a0c1fa;
    --body_gradient_middle: #94e8c4;
    --body_gradient_right: #de9ae3;
    --form_bg: #ffffff;
    --input_bg: #E5E5E5;
    --input_hover: #eaeaea;
    --submit_bg: #1FCC44;
    --submit_hover: #40e263;
    --icon_color: #6b6b6b;
}

      
.login * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.login {
    height: 100%;
    font-family: 'Indie Flower',
        sans-serif;
    background-image: linear-gradient(to right, var(--body_gradient_left),var(--body_gradient_middle), var(--body_gradient_right));
    display: flex;
    transition: height 0.75 ease;
}

.login #form_wrapper {
    width: 70%;
    height: 70%;
    margin: auto;
    background-color: var(--form_bg);
    border-radius: 50px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 7% 12% 7% 12% 6%;
    grid-gap: 2.5%;
    padding: 5vh 15px;
}

.login #form_Head {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
}

.login #form_Subhead {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 10px;
}

.login #form_contain {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
    
.login #buttons {
    display: grid;
    grid-template-columns: 60% 20% 20% ;  
    font-size: 100%;
    grid-gap: 2.5%;
    padding: 5vh 15px;
}      
.login #buttons .button{
  width: 80%;
  height: 100%;
  background-color: #a0c1fa;
  border-radius: 35px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font: 25px "Indie Flower";
}  
      
.login h1,
span {
    text-align: center;
}

.input_container {
    background-color: var(--input_bg);
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.input_container:hover {
    background-color: var(--input_hover);
}

.input_container,
#input_submit {
    height: 100%;
    border-radius: 30px;
    width: 100%;
}

.input_field {
    color: var(--icon_color);
    background-color: inherit;
    width: 90%;
    border: none;
    font-size: 1.3rem;
    font-weight: 400;
    padding-left: 30px;
}

.input_field:hover,
.input_field:focus {
    outline: none;
}

#input_submit {
    background-color: var(--submit_bg);
    padding-left: 0;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
}

#input_submit:hover {
    background-color: var(--submit_hover);
    transition: background-color,
        1s;
    cursor: pointer;
}

/* shift it a bit lower */
#create_account {
    display: block;
    position: relative;
    top: 30px;
}

.login a {
    /* remove default underline */
    text-decoration: none;
    color: var(--submit_bg);
    font-weight: bold;
}

.login a:hover {
    color: var(--submit_hover);
}

/* make it responsive */
.login @media screen and (max-width:768px) {

    /* make the layout  a single column and add some margin to the wrapper */
    #form_wrapper {
        grid-template-columns: 1fr;
        margin-left: 10px;
        margin-right: 10px;
    }
    /* on small screen we don't display the image */
    #form_left {
        display: none;
    }
}      
/*LoginEnd*/
      
html {
  font: 16px "Indie Flower";
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 2.25em;
}

h3 {
  font-size: 2em;
}

h4 {
  font-size: 1.75em;
}

p {
  font-size: 1.5em;
}

h1,
h2,
h3,
h4,
p {
  line-height: 1.375em;
}

/*Base*/
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

/*Layout*/
.wrapper {
  position: relative;
  width: 100%;
  height: 0%; /*make this 100*/
  transition: height 0.75 ease;
}
      
.content {
  width: 60%;
}

/*Navigation*/
nav {
  float: right;
  width: 5%; /*make this 5*/
  min-height: 100%;
  background: #69a8f0;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  display: none;
}

nav label {
  display: block;
  position: relative;
  width: 100%;
  padding: 0.25em 0;
  height: 2.5em;
  cursor: pointer;
}
nav label:before {
  content: "";
  position: absolute;
  width: 100%;
  font-family: fontAwesome;
  font-size: 2em;
  text-align: center;
  text-shadow: 2px 2px 0 #666;
  transition: all 0.5s ease;
}
nav label:hover:before {
  text-shadow: none;
}

:target {
  z-index: 2;
  opacity: 1;
}

/*Hidding mechanism*/

#wrapper > input {
  display: none;
}

#wrapper > input:checked ~ section {
  width: 85%;
}

#wrapper > input:checked ~ nav {
  width: 15%;
}

#wrapper > input:checked ~ nav > label:before {
  content: "";
}

#wrapper > input:checked ~ nav > label + .navigation {
  display: flex;
}

#wrapper #form_wrapper {
    width: 80%;
    height: 73%;
    margin: auto;
    background-color: var(--form_bg);
    border-radius: 50px;
    display: block;
    position: absolute;
    left: 10%;
    top: 6%
}
      
#wrapper #form_wrapper #planner {
    width: 95%;
    height: 95%;
    margin: auto;
    background-color: var(--form_bg);
    display: grid;
    grid-auto-rows: 20% ;
    grid-gap: 2%;
    position: absolute;
    left: 2.5%;
    top: 2.5%;
    overflow: scroll;
}
   
#wrapper #form_wrapper #planner #planneritem {
    height: 100%;
    margin: auto;
    background-color: var(--form_bg);
    display: grid;
    grid-template-columns: 10% 75% 10%;
    grid-gap: 2.5%;
}      

#planneritem #planneritemprior {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    color: black;
    background-color: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}  
      
#planneritem #planneritembody {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: var(--form_bg);
    display: grid;
    grid-template-rows: 30% 70%;
    font-size: 25px;
    justify-content: center;
    align-items: center;
}    
     
#planneritem .removebutton {
    width: 27%;
    height: 30%;
    margin: 0 auto;
    text-align: center;
    color: black;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
} 
           
#wrapper #planinput {
    width: 80%;
    height: 10%;
    margin: auto;
    display: grid;
    grid-template-columns: 6% 25% 65%;
    grid-gap: 2%;
    position: absolute;
    left: 10%;
    top: 85%
}      

#wrapper #planinput .input_container {
    background-color: var(--input_bg);
    display: flex;
    align-items: center;
    padding-left: 20px;
}      
      
#wrapper #planinput .input_container:hover {
    background-color: var(--input_hover);
}

#wrapper #planinput .input_container,
#input_submit {
    height: 100%;
    border-radius: 30px;
    width: 100%;
}      
      
#wrapper #planinput .inputbox {
    width: 100%;
    height: 100%;
    background-color: var(--form_bg);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}     

#wrapper #planinput .input_field {
    color: var(--icon_color);
    background-color: inherit;
    width: 90%;
    border: none;
    font-size: 1.3rem;
    font-weight: 400;
    padding-left: 5px;
}

#wrapper .input_field:hover,
#wrapper .input_field:focus {
    outline: none;
}
     
#wrapper #AddPlanebutton {
    width: 5%;
    height: 10%;
    margin: auto;
    background-color: #95ff44;
    border-radius: 50px;
    display: block;
    position: absolute;
    left: 92%;
    top: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}      

::-webkit-scrollbar {
  width: 18px;
}

::-webkit-scrollbar-track {
  border-radius: 15px;
}
 
::-webkit-scrollbar-thumb {
  background: #a0c1fa; 
  border-radius: 10px;
}
      
.navigation {
  display: none;
  flex-direction: column;
  width: 100%;
}

.navigation a {
  display: block;
  align-self: center;
  padding: 0.5em 0;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-shadow: 1px 1px 0 #666;
}

nav label,
.navigation a {
  border-bottom: 1px dashed #ffffff;
  transition: all 0.5s ease;
}
nav label:hover,
.navigation a:hover {
  /*background: #3868eb;*/
  text-shadow: none;
}
nav label:active,
.navigation a:active {
  /*background: #558ae6;*/
}

/*Sections*/
section {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 95%;
  min-height: 100%;
  opacity: 0;
  overflow: hidden;
  transition: width 0.5s, opacity 0.5s;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

/*Login*/
.sec-Login {
  float: left;
  position: relative;
  background: #ffffff;
  color: #7786ad;
  opacity: 1;
}    
      
/*Planner*/
.sec-Planner {
  float: left;
  position: relative;
  background: #a0c1fa;
  color: #7786ad;
  /*opacity: 1;*/
}

.sec-Planner .content {
  height: 50%;
  text-align: center;
}
      
/*Mood-Tracker*/
.sec-Mood-Tracker {
  background: #de9ae3;
  color: #fff;
}

.sec-Mood-Tracker .content {
  height: 55%;
  text-align: center;
}

.sec-Mood-Tracker .collapsible {
  background-color: #ecc2ed;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 20%;
    border-radius: 50px;    
  border: none;
  text-align: center;
  outline: none;
    font-size: 15px;
    font-family: "Indie Flower";
    position: absolute;
    top: 7%;
    left: 10%;
}

.sec-Mood-Tracker .active, .collapsible:hover {
  background-color: #EAD;
}

.sec-Mood-Tracker .content {
  padding: 0 0px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
  background-color: #f1f1f1;
    right: 18%;
    bottom: 55%;
}

#wrapper #moodform_wrapper {
    width: 80%;
    height: 73%;
    margin: auto;
    background-color: var(--form_bg);
    border-radius: 50px;
    display: block;
    position: absolute;
    left: 10%;
    top: 23%;
    transition: all 0.5s ease-out;
}
      
#wrapper #moodform_wrapper #mood {
    width: 95%;
    height: 95%;
    margin: auto;
    background-color: var(--form_bg);
    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-columns: 100%;
    grid-gap: 2%;
    position: absolute;
    left: 2.5%;
    top: 2.5%;
    z-index: 1;
}      
      
#wrapper #moodform_wrapper #mood #form {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: var(--form_bg);
    display: grid;
    grid-template-columns: 10% 80% 10% ;
    grid-gap: 2%;
    position: absolute;
    z-index: 2;
}      

#wrapper #moodform_wrapper #mood #list {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: var(--form_bg);
    display: grid;
    grid-auto-rows: 20% ;
    grid-gap: 2%;
    position: absolute;
    overflow: scroll;
    z-index: 2;
} 

#wrapper #planinput .input_container {
    background-color: var(--input_bg);
    display: flex;
    align-items: center;
    padding-left: 20px;
}      
      
#wrapper #moodform_wrapper #mood .input_container:hover {
    background-color: var(--input_hover);
}

#wrapper #moodform_wrapper #mood .input_container,
#input_submit {
    height: 100%;
    border-radius: 30px;
    width: 100%;
}      
      
#wrapper #moodform_wrapper #mood .inputbox {
    width: 100%;
    height: 100%;
    background-color: var(--form_bg);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}     

#wrapper #moodform_wrapper #mood .input_field {
    color: var(--icon_color);
    background-color: inherit;
    width: 90%;
    border: none;
    font-size: 1.3rem;
    font-weight: 400;
    padding-left: 5px;
}    
      
#wrapper #Addbutton {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #95ff44;
    border-radius: 50%;
    display: block;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}      
      
/*Friends*/
.sec-Friends {
  background: #94e8c4;
}

</style>

</head>

<body id="MainBody" >
  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    
  <div class = "login" id ="loginmain">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>#1 HTML Login Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>  
      
    <body>
    
    <h style="color:red;font: 40px 'Indie Flower';width: 100%;text-align: center;position: absolute; top: 3%; opacity: 0" id = "status">Boi</h>

    <div id="form_wrapper">
        <div id="form_Head">
            <h1>Login</h1>
        </div>
        <div id="form_Subhead">
            <h1>Username:</h1>
        </div>
        <div id="form_contain">
            <div class="input_container">
                <input placeholder="Username" type="text" name="username" id="field_user" class='input_field'>
            </div>
        </div>
        <div id="form_Subhead">
            <h1>Password:</h1>
        </div>
        <div id="form_contain">
            <div class="input_container">
                <input  placeholder="Password" type="password" name="Password" id="field_password" class='input_field'>
            </div>
        </div>
        <div id="buttons">
            <div>
                <h1> </h1> 
            </div>
            <button type="button" class = "button" id ="loginbutton">Login</button>
            <button type="button" class = "button" id ="registerbutton">Register</button>
        </div>
    </div>
</body>
  </div>    
    
  <div class="wrapper" id = "wrapper">
  <input type="checkbox" name="nav-check" id="nav-check" class="navbox">
  <section class="sec-Mood-Tracker" id="sec-Mood-Tracker">
      
      <h class = "userlog" style="color:black;font: 20px 'Indie Flower';width: 100%;position: absolute; top: 1%;left:2%">Logged in as: </h>
      
    <button class="collapsible" id="collapser">Open Graph</button>
    <div class="content">
      <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    </div>
      
      <div id="moodform_wrapper">
        <div id="mood">
            
            <div id="form" >
                
            </div>
            
            <div id="list" >
                 
            </div>
            
        </div>
    </div>
      
  </section>
  <section class="sec-Planner" id="sec-Planner">
      
      <h class = "userlog" style="color:black;font: 20px 'Indie Flower';width: 100%;position: absolute; top: 1%;left:2%">Logged in as: </h>
      
      
    <div id="form_wrapper">
        <div id="planner">
            
        </div>
    </div>
      
  <div id="planinput">
        <div class="input_container">
            <input id = "prior" placeholder="#" type="number" name="priority" class='input_field' min = 1 max = 9 id="noinput">
        </div>

        <div class="input_container">
            <input id = "title" placeholder="Title" type="text" name="Title" class='input_field'>
        </div>

        <div class="input_container">
            <input id = "body" placeholder="Body" type="text" name="Body" class='input_field'>
        </div>
    </div>
      
    <button id="AddPlanebutton" >+</button>  
      
  </section>
  <section class="sec-Friends" id="sec-Friends">
      
    <h class = "userlog" style="color:black;font: 20px 'Indie Flower';width: 100%;position: absolute; top: 1%;left:2%">Logged in as: </h>
      
  </section>
  <nav role="navigation" id="nav">
    <label class = "sidebar" for="nav-check" id="navlabel"></label>
    <ul class="navigation">
      <li><a class = "sidebar" href="#sec-Planner">Planner</a></li>
      <li><a class = "sidebar" href="#sec-Mood-Tracker">Mood-Tracker</a></li>
      <li><a class = "sidebar" href="#sec-Friends">Friends</a></li>
    </ul>
  </nav>

    <script>
        var colorscheme = "blue"
        var colortab = {};
        
        colortab["blue"] = {};
        colortab["blue"]["over"] = "#3868eb";
        colortab["blue"]["out"] = "#69a8f0";
        
        colortab["purple"] = {};
        colortab["purple"]["over"] = "#ad4faa";
        colortab["purple"]["out"] = "#c361ca";
        
        colortab["teal"] = {};
        colortab["teal"]["over"] = "#46a891";
        colortab["teal"]["out"] = "#5bcf9d";
        
        var x = document.getElementsByClassName("sidebar");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].onmouseover = function() {
            this.style.background = colortab[colorscheme]["over"];
            console.log("over");
          }
          x[i].onmouseout = function() {
            this.style.background = colortab[colorscheme]["out"];
            console.log("out");
          }
        }
        
        function resetcolor(color) {
            var i;
            for (i = 0; i < x.length; i++) {
              x[i].style.background = colortab[colorscheme]["out"];
              }
            };
                
        function adjustcolor(name, element) {
            if (name == "#sec-Planner") {
                colorscheme = "blue"
                resetcolor(colorscheme)
                document.getElementById("nav").style.background = "#69a8f0"; //main
            } else if (name == "#sec-Mood-Tracker") {
                colorscheme = "purple"
                resetcolor(colorscheme)
                document.getElementById("nav").style.background = "#c361ca"; //main
            } else {
                colorscheme = "teal"
                resetcolor(colorscheme)
                document.getElementById("nav").style.background = "#5bcf9d"; //main
            };
        };
        
        $(function(){
          $("nav a").click(function(){
            var name = $(this).attr("href");
            console.log(name)
            adjustcolor(name)  
          })
        })
    </script>  
      
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    
    <script>
    var socket = io();
    var user
        
    const logbutton = document.getElementById("loginbutton");
    const regbutton = document.getElementById("registerbutton");
    const addbutton = document.getElementById("AddPlanebutton");

    const varplanc = {};
    varplanc[1] = "#ccff00";
    varplanc[2] = "#ff8300";
    varplanc[3] = "#cc5500"; 
    varplanc[4] = "#b30000"; 
    varplanc[5] = "#013220"; 
    varplanc[6] = "#000053"; 
    varplanc[7] = "#1d1238"; 
    varplanc[8] = "#1b0618"; 
    varplanc[9] = "#000000"; 
        
    function emitremove(that) {
        var eleno = that.getAttribute('id');
        socket.emit('planremove', eleno, user);;
    }; 
        
    function resetPlanner(result) { 
        const myNode = document.getElementById("planner");
          while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
        
        var elements1 = "<div name='divX'><div id='planneritem'><div><div id='planneritemprior' class='priorbutton'";
        var elements2 = "</div></div><div id= 'planneritembody'><div>";
        var elements3 = "</div><div>";
        var elements4 = "</div></div><div><button id='";
        var elements5 = "' class='removebutton' onclick='emitremove(this)'>-</button></div></div>;</div>";
        
        
        function create(value, index) {
        var prior = value[1];
        var tail = value[2];
        var head = value[0];
        var eleno = value[3];
        var bc = varplanc[prior];
                
        return $(elements1 + "style='background-color:'" + bc + ">" + prior + elements2 + head + elements3 + tail +     elements4 + eleno + elements5);
        };
        
        result.forEach(function (value, index) {
            $("#planner").append(create(value, index));
        });  
        
        var x = document.getElementsByClassName("priorbutton");
        var i;
        for (i = 0; i < x.length; i++) {
            var prir = x[i].innerHTML;
          x[i].style.backgroundColor = varplanc[prir];
        };
    };  
        
    regbutton.onclick = function(){
        var passdata = document.getElementById("field_password").value;
        var userdata = document.getElementById("field_user").value;
        socket.emit('regrequest', userdata, passdata);
    };
    
    logbutton.onclick = function(){
        var passdata = document.getElementById("field_password").value;
        var userdata = document.getElementById("field_user").value;
        socket.emit('logrequest', userdata, passdata);
    };    
        
    function login(userdata, usrtab) {
        const loginmain = document.getElementById("loginmain");
        const statusbar = document.getElementById("status");
        const navbar = document.getElementById("nav");
        const wrap = document.getElementById("wrapper");
        const logpage = document.getElementById("loginmain");
        
        user = userdata;
        
        statusbar.style.opacity = 0;
        wrap.style.height = "100%";
        loginmain.style.height = "0%";
        document.getElementById("nav").style.display = "block";
        document.getElementById("loginmain").addEventListener("transitionend", function() {
            $("#loginmain").remove();
        });
        
        var includes = window.location.href.includes("#", 0);
        
        if (includes == true) {
            window.location.href = window.location
        } else {
           window.location.href = window.location + '#sec-Planner'; 
        };
        
        $("#loginmain").children().hide();
        
        resetPlanner(usrtab["plans"]);
        
        var x = document.getElementsByClassName("userlog");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML = "Logged in as : " + userdata
        }
    };
    
    function StatusUpdate(boole, message) {
        var statusbar = document.getElementById("status");
        if (boole == true) {
            statusbar.style.color = "green";
            statusbar.style.opacity = 1;
            statusbar.innerHTML = message;
        } else {
            statusbar.style.color = "red";
            statusbar.style.opacity = 1;
            statusbar.innerHTML = message;
        };
    };
    
    socket.on('regresult',function(result){
        StatusUpdate(result[0],result[1]);
	});
    
	socket.on('logresult',function(result, userdata, usrtab){
		if (result[0] == true) {
            login(userdata, usrtab)
        } else {
            StatusUpdate(result[0],result[1]);
        };
	});

    var maxchars = 1;

    $('#noinput').keydown( function(e){
        if ($(this).val().length >= maxchars) { 
            $(this).val($(this).val().substr(0, maxchars));
        }
    });

    $('#noinput').keyup( function(e){
        if ($(this).val().length >= maxchars) { 
            $(this).val($(this).val().substr(0, maxchars));
        }
    });
    
    function checkPlan(Prior, Title, Body) {
        if (Prior != "" || Prior != null) {
            if (Title != "" || Title != null) {
                if (Body != "" || Body != null) {
                    return true;
                } else {
                    return "Please enter a valid body";
                };
            } else {
                return "Please enter a valid title";
            };
        } else { 
            return "Please enter a valid Priority";
        };   
    }; 
        
    addbutton.onclick = function(){
        var priordata = document.getElementById("prior").value;
        var titledata = document.getElementById("title").value;
        var bodydata = document.getElementById("body").value;
        
        var validate = checkPlan(priordata, titledata, bodydata) ;
        
        if (validate == true) {
            socket.emit('Planrequest', priordata, titledata, bodydata, user);
        } else {
            //output error
        };
    };    
    
    socket.on('Planupdate',function(result){
		resetPlanner(result)
	});
    
    const collapse = document.getElementById("collapser");
    const frame = document.getElementById("moodform_wrapper");

      collapse.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
          console.log(content);
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.bottom = "55%";
            frame.style.top = "23%";
            frame.style.height = "73%";
            collapse.innerHTML = "Open Graph";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
            collapse.innerHTML = "Close Graph";
            content.style.bottom = "18%";
            frame.style.top = "70%";
            frame.style.height = "25%";
        } 
      });
        
    window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Mood graph",
            horizontalAlign: "center",
        },
        data: [{        
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 1 },
                { y: 2 },
                { y: 2 },
                { y: 4 },
                { y: 4 },
                { y: 5 },
                { y: 6 },
                { y: 1 },
                { y: 2 },
                { y: 9 },
                { y: 7 },
                { y: 6 }
            ]
        }]
    });
    chart.render();

    };
          
</script>   
</div>
  
</body></html>
