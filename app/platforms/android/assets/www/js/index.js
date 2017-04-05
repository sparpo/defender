
document.getElementById("confirm").addEventListener("click", confirm);
document.getElementById("schoolName").addEventListener(search);
var localStorage = window.localStorage;	
/*function confirm() {
    localStorage.setItem("AdminsEmail", document.getElementById('emailBox').value);
    console.log(localStorage.getItem("AdminsEmail"));
}*/
function confirm() {
    var email = document.getElementById('emailBox').value;
    if(email.substring(email.length-4, email.length-3) == "." || email.substring(email.length-3, email.length-2 ) == ".") {
        localStorage.setItem("AdminsEmail",email);
        localStorage.setItem("School", document.getElementById("schoolName").value);
        console.log("valid");
        window.location = "home.html";
    } else {
        console.log("invalid");
    }
}
function search() {
    if(document.getElementById("schoolName").value.length>1){
        document.getElementById("table").style.visibility="visible";
    } else {
        document.getElementById("table").style.visibility="hidden";
    }
    var input, filter, table, tr, td, tds, i;
  input = document.getElementById("schoolName");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    tds = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || tds.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
//http://defender.netne.net/sendmail.php?p=5kxP2wba&to=defender%40ricecollege.ie&subject=5th&body=hello
var app = {
    // Application Constructor
    initialize: function() {
        if(localStorage.getItem("AdminsEmail")) {
            window.location = "home.html";
        }
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