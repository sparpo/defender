document.getElementById("send").addEventListener("click", send);

var localStorage = window.localStorage;	
function send() {
   //localStorage.setItem("Message", document.getElementById('textBox').value);
    var message = document.getElementById('textBox').value;
    console.log(message);
    var key = "dJdJekCVAFIqvUJ13DEczZjgIh_4MyeIGEHz2GBYKFe"; // << YOUR KEY HERE
    var message_name = "defender_send_message";    // << YOUR MESSAGE NAME HERE
    var url = "https://maker.ifttt.com/trigger/" + message_name + "/with/key/" + key;
    $.ajax({  
      url: url,
      data: {value1: message},
      data: {value2: "joeyecorbett@gmail.com"},
      dataType: "jsonp",
      complete: function(jqXHR, textStatus) {
        console.log("Message Sent");
      } 
    });   
}

//http://defender.netne.net/sendmail.php?p=5kxP2wba&to=defender%40ricecollege.ie&subject=5th&body=hello
var app = {
    // Application Constructor
    initialize: function() {
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