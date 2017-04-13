document.getElementById("send").addEventListener("click", send);
document.getElementById("reset").addEventListener("click", reset);
var localStorage = window.localStorage;	
function send() {
   localStorage.setItem("Message", document.getElementById('textBox').value);
   //var img = new Image();
   //img.src = "C:\Users\Windows 7\Documents\defender\app\www\img\defender.png";
    /*var message = localStorage.getItem("Message");
    console.log(message + localStorage.getItem("AdminsEmail"));
    var key = "dJdJekCVAFIqvUJ13DEczZjgIh_4MyeIGEHz2GBYKFe"; // << YOUR KEY HERE
    var message_name = "defender_send_message";    // << YOUR MESSAGE NAME HERE
    var url = "https://maker.ifttt.com/trigger/" + message_name + "/with/key/" + key;
    $.ajax({  
      url: url,
      data: {value1: message,
             value2: localStorage.getItem("AdminsEmail")},
      dataType: "jsonp",
      complete: function(jqXHR, textStatus) {
        console.log("Message Sent");
      } 
    });  
    */ 
    var message = localStorage.getItem("Message");
    var key = "dJdJekCVAFIqvUJ13DEczZjgIh_4MyeIGEHz2GBYKFe";
    var message_name = "defender_send_message";
    var data = {};
    data.value1 = message;
    data.value2 = localStorage.getItem("AdminsEmail");
    var url = "https://maker.ifttt.com/trigger/" + message_name + "/with/key/" + key;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
        console.log("Message Sent");
        }
    }
    }
    var script = document.createElement("script");
    script.setAttribute("src",url);
    document.body.appendChild(script);
    xmlhttp.open('POST', url, true);
    xmlhttp.responseType = 'json';
    xmlhttp.send(new FormData(data));
}
function reset() {
    localStorage.removeItem("AdminsEmail");
    window.location = "index.html"
}
//http://defender.netne.net/sendmail.php?p=5kxP2wba&to=defender%40ricecollege.ie&subject=5th&body=hello
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById("yourSchool").innerHTML="Your school is " + localStorage.getItem("School");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();