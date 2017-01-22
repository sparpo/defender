/*
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
*/

var controller = null;
var app = {
    // Application Constructor
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        var controller = new Controller();
        // We will init / bootstrap our application here
    },
};
var Controller = function() {
    var controller = {
        self: null,
        initialize: function() {
            self = this;
            this.bindEvents();
            self.renderSearchView(); 
        },

        bindEvents: function() {
        	$('.tab-button').on('click', this.onTabClick);
        },

        onTabClick: function(e) {
        	e.preventDefault();
            if ($(this).hasClass('active')) {
                return;
            }
        	
            var tab = $(this).data('tab');
            if (tab === '#add-tab') {
                self.renderPostView();
            } else {
                self.renderSearchView();
            }
        },

        renderPostView: function() {
            $('.tab-button').removeClass('active');
            $('#post-tab-button').addClass('active');

            var $tab = $('#tab-content');
            $tab.empty();
            $("#tab-content").load("./views/post-project-view.html", function(data) {
                $('#tab-content').find('#post-project-form').on('submit', self.postProject);
            }); 
        },
       
        renderSearchView: function() {
            $('.tab-button').removeClass('active');
            $('#search-tab-button').addClass('active');

            var $tab = $('#tab-content');
            $tab.empty();

            var $projectTemplate = null;
            $("#tab-content").load("./views/search-project-view.html", function(data) {
                $projectTemplate = $('.project').remove();
                // Load projects here
            }); 
        }
    }
    controller.initialize();
    return controller;
}
app.initialize();