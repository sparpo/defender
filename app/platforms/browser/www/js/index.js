document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
document.getElementById("removeProjectFromLocalStorage").addEventListener("click", removeProjectFromLocalStorage);
document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);

var localStorage = window.localStorage;	
function send() {
   localStorage.setItem("Message", $("#textBox").value);
   console.log(localStorage.getItem("Message"));
}
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